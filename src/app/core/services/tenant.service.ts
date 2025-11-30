import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface TenantFeatures {
  gradebook: boolean;
  reports: boolean;
  analytics: boolean;
  bulkOperations: boolean;
  dataExport: boolean;
  realTimeUpdates: boolean;
  notifications: boolean;
  customBranding: boolean;
  apiAccess: boolean;
  advancedReporting: boolean;
}

export interface TenantBranding {
  logo: string;
  favicon: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  logoUrl: string;
  backgroundImage?: string;
  fontFamily?: string;
}

export interface TenantSettings {
  timezone: string;
  dateFormat: string;
  timeFormat: string; // '12h' | '24h'
  currency: string;
  language: string;
  academicYear: {
    start: string;
    end: string;
  };
  gradingScale: {
    [grade: string]: number;
  };
  classPeriods: {
    [period: string]: string;
  };
  schoolHours: {
    start: string;
    end: string;
  };
}

export interface TenantSubscription {
  plan: string; // 'free', 'basic', 'premium', 'enterprise'
  status: string; // 'active', 'trial', 'suspended', 'cancelled'
  trialEndsAt?: Date;
  renewsAt?: Date;
  limits: {
    maxStudents: number;
    maxTeachers: number;
    maxClasses: number;
    maxStorageGB: number;
    maxApiCalls: number;
  };
  usage: {
    students: number;
    teachers: number;
    classes: number;
    storageGB: number;
    apiCalls: number;
  };
}

export interface Tenant {
  id: string;
  name: string;
  displayName: string;
  description?: string;
  domain: string;
  customDomain?: string;
  status: 'active' | 'trial' | 'suspended' | 'maintenance';
  
  // Contact & Admin Info
  adminEmail: string;
  adminName: string;
  adminPhone?: string;
  
  // Configuration
  features: TenantFeatures;
  branding: TenantBranding;
  settings: TenantSettings;
  subscription: TenantSubscription;
  
  // Metadata
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;
  
  // Compliance & Security
  dataRegion: string;
  complianceLevel: string; // 'basic', 'ferpa', 'gdpr', 'hipaa'
  ssoEnabled: boolean;
  mfaRequired: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TenantService {
  private currentTenantSubject = new BehaviorSubject<Tenant | null>(null);
  public currentTenant$ = this.currentTenantSubject.asObservable();
  
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();
  
  private errorSubject = new BehaviorSubject<string | null>(null);
  public error$ = this.errorSubject.asObservable();
  
  private tenantId: string = '';
  private isInitialized = false;

  constructor(private http: HttpClient) {
    console.log('TenantService constructor - starting...');
    // For now, just load default tenant to keep it simple
    this.loadDefaultTenant();
  }

  /**
   * Load default tenant configuration for single-tenant mode
   */
  private loadDefaultTenant(): void {
    console.log('Loading default tenant configuration...');
    this.setLoading(true);
    
    const defaultTenant: Tenant = {
      id: 'default',
      name: 'School Management System',
      displayName: 'BuildAQ Schools',
      domain: window.location.hostname,
      status: 'active',
      adminEmail: 'admin@buildaq.com',
      adminName: 'System Administrator',
      features: {
        gradebook: true,
        reports: true,
        analytics: true,
        bulkOperations: true,
        dataExport: true,
        realTimeUpdates: true,
        notifications: true,
        customBranding: true,
        apiAccess: true,
        advancedReporting: true
      },
      branding: {
        logo: '',
        favicon: '/favicon.ico',
        primaryColor: '#3498db',
        secondaryColor: '#2ecc71',
        accentColor: '#f39c12',
        logoUrl: '',
        fontFamily: 'Inter, sans-serif'
      },
      settings: {
        timezone: 'America/New_York',
        dateFormat: 'MM/DD/YYYY',
        timeFormat: '12h',
        currency: 'USD',
        language: 'en-US',
        academicYear: {
          start: '2025-08-15',
          end: '2026-06-15'
        },
        gradingScale: {
          'A': 90,
          'B': 80,
          'C': 70,
          'D': 60,
          'F': 0
        },
        classPeriods: {
          '1': '08:00-08:50',
          '2': '09:00-09:50',
          '3': '10:00-10:50',
          '4': '11:00-11:50',
          '5': '12:00-12:50',
          '6': '13:00-13:50',
          '7': '14:00-14:50',
          '8': '15:00-15:50'
        },
        schoolHours: {
          start: '07:30',
          end: '16:00'
        }
      },
      subscription: {
        plan: 'enterprise',
        status: 'active',
        limits: {
          maxStudents: 10000,
          maxTeachers: 1000,
          maxClasses: 2000,
          maxStorageGB: 100,
          maxApiCalls: 100000
        },
        usage: {
          students: 0,
          teachers: 0,
          classes: 0,
          storageGB: 0,
          apiCalls: 0
        }
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      dataRegion: 'US-East',
      complianceLevel: 'ferpa',
      ssoEnabled: false,
      mfaRequired: false
    };

    this.setCurrentTenant(defaultTenant);
    this.applyTenantConfiguration(defaultTenant);
    this.isInitialized = true;
    this.setLoading(false);
    console.log('Default tenant loaded successfully:', defaultTenant.name);
  }

  /**
   * Set current tenant
   */
  private setCurrentTenant(tenant: Tenant): void {
    this.currentTenantSubject.next(tenant);
  }

  /**
   * Apply tenant configuration to the application
   */
  private applyTenantConfiguration(tenant: Tenant): void {
    this.applyBranding(tenant.branding);
    this.updatePageTitle(tenant.displayName);
    this.updateFavicon(tenant.branding.favicon);
  }

  /**
   * Apply tenant branding (colors, fonts, etc.)
   */
  private applyBranding(branding: TenantBranding): void {
    const root = document.documentElement;
    
    // Update CSS custom properties
    root.style.setProperty('--primary-color', branding.primaryColor);
    root.style.setProperty('--secondary-color', branding.secondaryColor);
    root.style.setProperty('--accent-color', branding.accentColor || branding.primaryColor);
    
    if (branding.fontFamily) {
      root.style.setProperty('--font-family', branding.fontFamily);
    }
  }

  /**
   * Update page title with tenant name
   */
  private updatePageTitle(tenantName: string): void {
    document.title = `${tenantName} - School Management`;
  }

  /**
   * Update favicon
   */
  private updateFavicon(faviconUrl: string): void {
    if (faviconUrl) {
      let favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
      if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
      }
      favicon.href = faviconUrl;
    }
  }

  // Public methods

  /**
   * Get current tenant
   */
  getCurrentTenant(): Tenant | null {
    return this.currentTenantSubject.value;
  }

  /**
   * Get tenant ID
   */
  getTenantId(): string {
    return this.tenantId || 'default';
  }

  /**
   * Check if feature is enabled for current tenant
   */
  isFeatureEnabled(feature: keyof TenantFeatures): boolean {
    const tenant = this.getCurrentTenant();
    return tenant?.features[feature] || false;
  }

  /**
   * Check if tenant service is ready
   */
  isReady(): boolean {
    return this.isInitialized && this.currentTenantSubject.value !== null;
  }

  /**
   * Update tenant features (partial merge)
   */
  updateFeatures(partial: Partial<TenantFeatures>): void {
    const tenant = this.getCurrentTenant();
    if (!tenant) return;
    tenant.features = Object.assign({}, tenant.features, partial);
    tenant.updatedAt = new Date();
    this.setCurrentTenant(tenant);
  }

  /**
   * Convenience: set subscription plan and apply preset feature gates
   */
  setPlan(plan: 'free' | 'basic' | 'premium' | 'enterprise') {
    const tenant = this.getCurrentTenant();
    if (!tenant) return;
    tenant.subscription.plan = plan;
    switch (plan) {
      case 'free':
        tenant.features = {
          gradebook: false,
          reports: false,
          analytics: false,
          bulkOperations: false,
          dataExport: false,
          realTimeUpdates: false,
          notifications: false,
          customBranding: false,
          apiAccess: false,
          advancedReporting: false
        };
        break;
      case 'basic':
        tenant.features = {
          gradebook: true,
          reports: true,
          analytics: false,
          bulkOperations: true,
          dataExport: false,
          realTimeUpdates: false,
          notifications: true,
          customBranding: false,
          apiAccess: true,
          advancedReporting: false
        };
        break;
      case 'premium':
        tenant.features = {
          gradebook: true,
          reports: true,
          analytics: true,
          bulkOperations: true,
          dataExport: true,
          realTimeUpdates: true,
          notifications: true,
          customBranding: true,
          apiAccess: true,
          advancedReporting: true
        };
        break;
      case 'enterprise':
      default:
        tenant.features = {
          gradebook: true,
          reports: true,
          analytics: true,
          bulkOperations: true,
          dataExport: true,
          realTimeUpdates: true,
          notifications: true,
          customBranding: true,
          apiAccess: true,
          advancedReporting: true
        };
        break;
    }

    tenant.updatedAt = new Date();
    this.setCurrentTenant(tenant);
    this.applyTenantConfiguration(tenant);
  }

  // Private utility methods
  private setLoading(loading: boolean): void {
    this.loadingSubject.next(loading);
  }

  private setError(error: string | null): void {
    this.errorSubject.next(error);
  }
}
