import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService, ApiResponse } from './api.service';
import { environment } from '../../../environments/environment';

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  dateOfBirth: Date;
  enrollmentDate: Date;
  status: 'active' | 'inactive' | 'graduated' | 'transferred';
  gradeLevel: string;
  gpa?: number;
  emergencyContact?: {
    name: string;
    phone: string;
    relationship: string;
  };
  medicalInfo?: {
    allergies?: string[];
    medications?: string[];
    conditions?: string[];
  };
  academicInfo?: {
    advisor: string;
    major?: string;
    credits: number;
    academicStanding: string;
  };
}

export interface StudentSearchFilters {
  search?: string;
  status?: string;
  gradeLevel?: string;
  advisor?: string;
  academicStanding?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface CreateStudentRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  dateOfBirth: string;
  gradeLevel: string;
  emergencyContact?: {
    name: string;
    phone: string;
    relationship: string;
  };
}

export interface UpdateStudentRequest extends Partial<CreateStudentRequest> {
  id: number;
}

export interface BulkStudentOperation {
  action: 'create' | 'update' | 'delete' | 'status-change';
  students: any[];
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private readonly baseUrl = 'students'; // Simplified for now
  
  constructor(private apiService: ApiService) {}

  /**
   * Get list of students with optional filtering and pagination
   */
  getStudents(filters?: StudentSearchFilters): Observable<ApiResponse<Student[]>> {
    if (this.apiService.shouldUseMockData()) {
      return this.getMockStudents(filters);
    }
    
    return this.apiService.get<Student[]>(this.baseUrl, filters);
  }

  /**
   * Get student by ID
   */
  getStudentById(id: number): Observable<ApiResponse<Student>> {
    if (this.apiService.shouldUseMockData()) {
      return this.getMockStudentById(id);
    }
    
    const endpoint = `${this.baseUrl}/${id}`;
    return this.apiService.get<Student>(endpoint);
  }

  /**
   * Create new student
   */
  createStudent(student: CreateStudentRequest): Observable<ApiResponse<Student>> {
    if (this.apiService.shouldUseMockData()) {
      return this.createMockStudent(student);
    }
    
    return this.apiService.post<Student>(this.baseUrl, student);
  }

  /**
   * Update student
   */
  updateStudent(student: UpdateStudentRequest): Observable<ApiResponse<Student>> {
    if (this.apiService.shouldUseMockData()) {
      return this.updateMockStudent(student);
    }
    
    const endpoint = `${this.baseUrl}/${student.id}`;
    return this.apiService.put<Student>(endpoint, student);
  }

  /**
   * Delete student
   */
  deleteStudent(id: number): Observable<ApiResponse<void>> {
    if (this.apiService.shouldUseMockData()) {
      return this.deleteMockStudent(id);
    }
    
    const endpoint = `${this.baseUrl}/${id}`;
    return this.apiService.delete<void>(endpoint);
  }

  /**
   * Search students
   */
  searchStudents(query: string): Observable<ApiResponse<Student[]>> {
    if (this.apiService.shouldUseMockData()) {
      return this.searchMockStudents(query);
    }
    
    const endpoint = `${this.baseUrl}/search`;
    return this.apiService.get<Student[]>(endpoint, { q: query });
  }

  /**
   * Bulk operations on students
   */
  bulkOperation(operation: BulkStudentOperation): Observable<ApiResponse<any>> {
    if (this.apiService.shouldUseMockData()) {
      return this.bulkMockOperation(operation);
    }
    
    const endpoint = `${this.baseUrl}/bulk`;
    return this.apiService.post<any>(endpoint, operation);
  }

  /**
   * Export students to file
   */
  exportStudents(filters?: StudentSearchFilters, format: 'csv' | 'excel' = 'csv'): Observable<Blob> {
    const endpoint = `${this.baseUrl}/export`;
    const params = { ...filters, format };
    return this.apiService.downloadFile(endpoint, `students.${format}`);
  }

  /**
   * Import students from file
   */
  importStudents(file: File): Observable<ApiResponse<any>> {
    const endpoint = `${this.baseUrl}/import`;
    return this.apiService.uploadFile<any>(endpoint, file);
  }

  // Mock data methods for development
  private getMockStudents(filters?: StudentSearchFilters): Observable<ApiResponse<Student[]>> {
    const mockStudents: Student[] = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Smith',
        email: 'john.smith@example.com',
        phone: '(555) 123-4567',
        dateOfBirth: new Date('2000-01-15'),
        enrollmentDate: new Date('2023-09-01'),
        status: 'active',
        gradeLevel: '12th Grade',
        gpa: 3.8,
        academicInfo: {
          advisor: 'Dr. Sarah Johnson',
          major: 'Computer Science',
          credits: 32,
          academicStanding: 'Good Standing'
        }
      },
      {
        id: 2,
        firstName: 'Emma',
        lastName: 'Johnson',
        email: 'emma.johnson@example.com',
        phone: '(555) 234-5678',
        dateOfBirth: new Date('1999-05-20'),
        enrollmentDate: new Date('2023-09-01'),
        status: 'active',
        gradeLevel: '11th Grade',
        gpa: 3.9,
        academicInfo: {
          advisor: 'Dr. Michael Brown',
          major: 'Mathematics',
          credits: 28,
          academicStanding: 'Good Standing'
        }
      },
      {
        id: 3,
        firstName: 'Michael',
        lastName: 'Davis',
        email: 'michael.davis@example.com',
        phone: '(555) 345-6789',
        dateOfBirth: new Date('2001-03-10'),
        enrollmentDate: new Date('2023-09-01'),
        status: 'active',
        gradeLevel: '10th Grade',
        gpa: 3.5,
        academicInfo: {
          advisor: 'Dr. Lisa Wilson',
          major: 'English',
          credits: 24,
          academicStanding: 'Good Standing'
        }
      }
    ];

    return new Observable(observer => {
      setTimeout(() => {
        observer.next({
          success: true,
          data: mockStudents,
          metadata: {
            total: mockStudents.length,
            page: 1,
            limit: 20,
            hasNext: false,
            hasPrev: false
          }
        });
        observer.complete();
      }, 500);
    });
  }

  private getMockStudentById(id: number): Observable<ApiResponse<Student>> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next({
          success: true,
          data: {
            id: id,
            firstName: 'John',
            lastName: 'Smith',
            email: 'john.smith@example.com',
            phone: '(555) 123-4567',
            dateOfBirth: new Date('2000-01-15'),
            enrollmentDate: new Date('2023-09-01'),
            status: 'active',
            gradeLevel: '12th Grade',
            gpa: 3.8
          }
        });
        observer.complete();
      }, 300);
    });
  }

  private createMockStudent(student: CreateStudentRequest): Observable<ApiResponse<Student>> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next({
          success: true,
          data: {
            id: Math.floor(Math.random() * 10000),
            ...student,
            dateOfBirth: new Date(student.dateOfBirth),
            enrollmentDate: new Date(),
            status: 'active',
            gpa: 0
          } as Student
        });
        observer.complete();
      }, 800);
    });
  }

  private updateMockStudent(student: UpdateStudentRequest): Observable<ApiResponse<Student>> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next({
          success: true,
          data: {
            ...student,
            dateOfBirth: student.dateOfBirth ? new Date(student.dateOfBirth) : new Date(),
            enrollmentDate: new Date(),
            status: 'active'
          } as Student
        });
        observer.complete();
      }, 600);
    });
  }

  private deleteMockStudent(id: number): Observable<ApiResponse<void>> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next({
          success: true,
          data: undefined,
          message: `Student ${id} deleted successfully`
        });
        observer.complete();
      }, 400);
    });
  }

  private searchMockStudents(query: string): Observable<ApiResponse<Student[]>> {
    return this.getMockStudents({ search: query });
  }

  private bulkMockOperation(operation: BulkStudentOperation): Observable<ApiResponse<any>> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next({
          success: true,
          data: {
            processedCount: operation.students.length,
            successCount: operation.students.length,
            errorCount: 0,
            errors: []
          },
          message: `Bulk ${operation.action} completed successfully`
        });
        observer.complete();
      }, 1200);
    });
  }
}
