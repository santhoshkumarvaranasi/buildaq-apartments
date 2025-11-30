import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, retry, tap, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { TenantService } from './tenant.service';

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: string[];
  metadata?: {
    total: number;
    page: number;
    limit: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface ApiError {
  code: string;
  message: string;
  details?: any;
  timestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = environment.apiUrl;
  private readonly version = environment.apiVersion;
  
  // Loading states
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();
  
  // Error states
  private errorSubject = new BehaviorSubject<ApiError | null>(null);
  public error$ = this.errorSubject.asObservable();

  constructor(
    private http: HttpClient,
    private tenantService: TenantService
  ) {}

  /**
   * Generic GET request
   */
  get<T>(endpoint: string, params?: any): Observable<any> {
    this.setLoading(true);

    const url = this.buildUrl(endpoint);
    const options = {
      headers: this.getHeaders(),
      params: this.buildParams(params),
    } as any;

    return this.http.get<any>(url, options).pipe(
      retry(2),
      tap((resp: any) => {
        this.setLoading(false);
        this.clearError();
        if (resp == null) {
          console.warn('ApiService.get: received null response for', endpoint);
        }
      }),
      // Normalize: if the API uses { data: ... } wrapper, return that payload; otherwise return raw response
      map((resp: any) => {
        if (resp == null) return {} as any;
        if (resp.data !== undefined) return resp.data;
        return resp;
      }),
      catchError(error => this.handleError(error))
    );
  }

  /**
   * Generic POST request
   */
  post<T>(endpoint: string, data: any, params?: any): Observable<ApiResponse<T>> {
    this.setLoading(true);
    
    const url = this.buildUrl(endpoint);
    const options: any = { headers: this.getHeaders() };
    if (params) options.params = this.buildParams(params);

    return this.http.post<ApiResponse<T>>(url, data, options).pipe(
      tap(() => this.setLoading(false)),
      tap(() => this.clearError()),
      catchError(error => this.handleError(error))
    ) as unknown as Observable<ApiResponse<T>>;
  }

  /**
   * Generic PUT request
   */
  put<T>(endpoint: string, data: any, params?: any): Observable<ApiResponse<T>> {
    this.setLoading(true);
    
    const url = this.buildUrl(endpoint);
    const options: any = { headers: this.getHeaders() };
    if (params) options.params = this.buildParams(params);

    return this.http.put<ApiResponse<T>>(url, data, options).pipe(
      tap(() => this.setLoading(false)),
      tap(() => this.clearError()),
      catchError(error => this.handleError(error))
    ) as unknown as Observable<ApiResponse<T>>;
  }

  /**
   * Generic DELETE request
   */
  delete<T>(endpoint: string, params?: any): Observable<ApiResponse<T>> {
    this.setLoading(true);
    
    const url = this.buildUrl(endpoint);
    const options: any = { headers: this.getHeaders() };
    if (params) options.params = this.buildParams(params);

    return this.http.delete<ApiResponse<T>>(url, options).pipe(
      tap(() => this.setLoading(false)),
      tap(() => this.clearError()),
      catchError(error => this.handleError(error))
    ) as unknown as Observable<ApiResponse<T>>;
  }

  /**
   * Upload file
   */
  uploadFile<T>(endpoint: string, file: File, additionalData?: any): Observable<ApiResponse<T>> {
    this.setLoading(true);
    
    const url = this.buildUrl(endpoint);
    const formData = new FormData();
    formData.append('file', file);
    
    if (additionalData) {
      Object.keys(additionalData).forEach(key => {
        formData.append(key, additionalData[key]);
      });
    }
    
    const headers = this.getHeaders();
    headers.delete('Content-Type'); // Let browser set Content-Type for FormData
    
    return this.http.post<ApiResponse<T>>(url, formData, { headers }).pipe(
      tap(() => this.setLoading(false)),
      tap(() => this.clearError()),
      catchError(error => this.handleError(error))
    );
  }

  /**
   * Download file
   */
  downloadFile(endpoint: string, filename?: string): Observable<Blob> {
    this.setLoading(true);
    
    const url = this.buildUrl(endpoint);
    const options = {
      headers: this.getHeaders(),
      responseType: 'blob' as 'json'
    };

    return this.http.get(url, options).pipe(
      map(response => response as Blob),
      tap(() => this.setLoading(false)),
      tap((blob: Blob) => {
        if (filename) {
          this.saveFile(blob, filename);
        }
      }),
      catchError(error => this.handleError(error))
    );
  }

  /**
   * Build full URL
   */
  private buildUrl(endpoint: string): string {
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
    return `${this.baseUrl}/${this.version}/${cleanEndpoint}`;
  }

  /**
   * Build HTTP headers
   */
  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    // Add authentication token if available
    const token = this.getAuthToken();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    // Add tenant information if available
    const tenantId = this.getTenantId();
    if (tenantId) {
      headers = headers.set('X-Tenant-ID', tenantId);
    }

    return headers;
  }

  /**
   * Build query parameters
   */
  private buildParams(params?: any): any {
    if (!params) return undefined;
    
    const cleanParams: any = {};
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
        cleanParams[key] = params[key];
      }
    });
    
    return cleanParams;
  }

  /**
   * Handle HTTP errors
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    this.setLoading(false);
    
    let apiError: ApiError;
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      apiError = {
        code: 'CLIENT_ERROR',
        message: 'A client-side error occurred. Please check your internet connection.',
        details: error.error.message,
        timestamp: new Date().toISOString()
      };
    } else {
      // Server-side error
      apiError = {
        code: error.error?.code || `HTTP_${error.status}`,
        message: error.error?.message || this.getErrorMessage(error.status),
        details: error.error?.details || error.message,
        timestamp: new Date().toISOString()
      };
    }
    
    this.setError(apiError);
    
    // Since we don't have environment debugging config yet, enable basic logging
    console.error('API Error:', apiError);
    
    return throwError(() => apiError);
  }

  /**
   * Get user-friendly error message
   */
  private getErrorMessage(status: number): string {
    switch (status) {
      case 400: return 'Invalid request. Please check your input.';
      case 401: return 'You are not authorized. Please log in again.';
      case 403: return 'You do not have permission to perform this action.';
      case 404: return 'The requested resource was not found.';
      case 409: return 'Conflict. The resource already exists or is being used.';
      case 422: return 'Validation failed. Please check your input.';
      case 429: return 'Too many requests. Please try again later.';
      case 500: return 'Internal server error. Please try again later.';
      case 502: return 'Bad gateway. The server is temporarily unavailable.';
      case 503: return 'Service unavailable. Please try again later.';
      case 504: return 'Gateway timeout. The server took too long to respond.';
      default: return 'An unexpected error occurred. Please try again.';
    }
  }

  /**
   * Get authentication token
   */
  private getAuthToken(): string | null {
    if (typeof window !== 'undefined') {
      // Support multiple possible token keys (shell integration may use `shellAuthToken`)
      return localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token') || localStorage.getItem('shellAuthToken') || sessionStorage.getItem('shellAuthToken');
    }
    return null;
  }

  /**
   * Get tenant ID from tenant service
   */
  private getTenantId(): string | null {
    return this.tenantService.getTenantId();
  }

  /**
   * Save file to user's device
   */
  private saveFile(blob: Blob, filename: string): void {
    if (typeof window !== 'undefined') {
      const link = document.createElement('a');
      const url = window.URL.createObjectURL(blob);
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }
  }

  /**
   * Set loading state
   */
  private setLoading(loading: boolean): void {
    this.loadingSubject.next(loading);
  }

  /**
   * Set error state
   */
  private setError(error: ApiError): void {
    this.errorSubject.next(error);
  }

  /**
   * Clear error state
   */
  private clearError(): void {
    this.errorSubject.next(null);
  }

  /**
   * Public method to clear error
   */
  public clearCurrentError(): void {
    this.clearError();
  }

  /**
   * Check if mock data should be used
   */
  public shouldUseMockData(): boolean {
    return false; // Default to false until environment config is migrated
  }
}
