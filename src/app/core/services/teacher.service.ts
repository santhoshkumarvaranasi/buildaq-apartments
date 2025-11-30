import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { ApiService } from './api.service';

export interface Teacher {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  subjects: Subject[];
  qualification: string;
  experience: number;
  hireDate: string;
  salary: number;
  status: 'active' | 'inactive' | 'on-leave';
  avatar?: string;
  address?: string;
  emergencyContact?: string;
  bio?: string;
}

export interface Subject {
  id: number;
  code: string;
  name: string;
  credits: number;
}

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private mockTeachers: Teacher[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Smith',
      email: 'john.smith@school.com',
      phone: '+1-555-0101',
      department: 'Mathematics',
      subjects: [
        { id: 1, code: 'MATH101', name: 'Algebra', credits: 3 },
        { id: 2, code: 'MATH102', name: 'Geometry', credits: 3 }
      ],
      qualification: 'M.Sc Mathematics, B.Ed',
      experience: 8,
      hireDate: '2016-09-01',
      salary: 65000,
      status: 'active',
      address: '123 Oak Street, Springfield, IL',
      emergencyContact: '+1-555-0102',
      bio: 'Passionate mathematics teacher with 8 years of experience in secondary education.'
    },
    {
      id: 2,
      firstName: 'Emily',
      lastName: 'Johnson',
      email: 'emily.johnson@school.com',
      phone: '+1-555-0201',
      department: 'English',
      subjects: [
        { id: 3, code: 'ENG101', name: 'English Literature', credits: 4 },
        { id: 4, code: 'ENG102', name: 'Creative Writing', credits: 3 }
      ],
      qualification: 'M.A English Literature, B.Ed',
      experience: 12,
      hireDate: '2012-08-15',
      salary: 72000,
      status: 'active',
      address: '456 Maple Avenue, Springfield, IL',
      emergencyContact: '+1-555-0202',
      bio: 'Award-winning English teacher specializing in literature and creative writing.'
    },
    {
      id: 3,
      firstName: 'Michael',
      lastName: 'Brown',
      email: 'michael.brown@school.com',
      phone: '+1-555-0301',
      department: 'Science',
      subjects: [
        { id: 5, code: 'PHY101', name: 'Physics', credits: 4 },
        { id: 6, code: 'CHE101', name: 'Chemistry', credits: 4 }
      ],
      qualification: 'M.Sc Physics, B.Ed',
      experience: 6,
      hireDate: '2018-01-10',
      salary: 68000,
      status: 'active',
      address: '789 Pine Road, Springfield, IL',
      emergencyContact: '+1-555-0302',
      bio: 'Innovative science teacher passionate about hands-on learning and experiments.'
    },
    {
      id: 4,
      firstName: 'Sarah',
      lastName: 'Davis',
      email: 'sarah.davis@school.com',
      phone: '+1-555-0401',
      department: 'History',
      subjects: [
        { id: 7, code: 'HIS101', name: 'World History', credits: 3 },
        { id: 8, code: 'HIS102', name: 'American History', credits: 3 }
      ],
      qualification: 'M.A History, B.Ed',
      experience: 10,
      hireDate: '2014-09-01',
      salary: 70000,
      status: 'active',
      address: '321 Elm Street, Springfield, IL',
      emergencyContact: '+1-555-0402',
      bio: 'History enthusiast with a talent for making the past come alive for students.'
    },
    {
      id: 5,
      firstName: 'David',
      lastName: 'Wilson',
      email: 'david.wilson@school.com',
      phone: '+1-555-0501',
      department: 'Physical Education',
      subjects: [
        { id: 9, code: 'PE101', name: 'Physical Education', credits: 2 },
        { id: 10, code: 'SPO101', name: 'Sports Science', credits: 3 }
      ],
      qualification: 'B.Sc Sports Science, B.Ed',
      experience: 5,
      hireDate: '2019-08-20',
      salary: 58000,
      status: 'active',
      address: '654 Cedar Lane, Springfield, IL',
      emergencyContact: '+1-555-0502',
      bio: 'Former professional athlete turned educator, promoting fitness and wellness.'
    },
    {
      id: 6,
      firstName: 'Lisa',
      lastName: 'Garcia',
      email: 'lisa.garcia@school.com',
      phone: '+1-555-0601',
      department: 'Art',
      subjects: [
        { id: 11, code: 'ART101', name: 'Visual Arts', credits: 3 },
        { id: 12, code: 'ART102', name: 'Art History', credits: 2 }
      ],
      qualification: 'M.F.A Fine Arts, B.Ed',
      experience: 7,
      hireDate: '2017-01-15',
      salary: 62000,
      status: 'on-leave',
      address: '987 Birch Street, Springfield, IL',
      emergencyContact: '+1-555-0602',
      bio: 'Creative artist and educator fostering artistic expression in young minds.'
    },
    {
      id: 7,
      firstName: 'Robert',
      lastName: 'Martinez',
      email: 'robert.martinez@school.com',
      phone: '+1-555-0701',
      department: 'Music',
      subjects: [
        { id: 13, code: 'MUS101', name: 'Music Theory', credits: 3 },
        { id: 14, code: 'MUS102', name: 'Choir', credits: 2 }
      ],
      qualification: 'M.Mus Music Performance, B.Ed',
      experience: 15,
      hireDate: '2009-09-01',
      salary: 74000,
      status: 'active',
      address: '147 Willow Drive, Springfield, IL',
      emergencyContact: '+1-555-0702',
      bio: 'Professional musician and choir director with extensive performance experience.'
    },
    {
      id: 8,
      firstName: 'Jennifer',
      lastName: 'Taylor',
      email: 'jennifer.taylor@school.com',
      phone: '+1-555-0801',
      department: 'Computer Science',
      subjects: [
        { id: 15, code: 'CS101', name: 'Programming', credits: 4 },
        { id: 16, code: 'CS102', name: 'Web Development', credits: 3 }
      ],
      qualification: 'M.Sc Computer Science, B.Ed',
      experience: 4,
      hireDate: '2020-08-01',
      salary: 75000,
      status: 'active',
      address: '258 Spruce Avenue, Springfield, IL',
      emergencyContact: '+1-555-0802',
      bio: 'Tech-savvy educator preparing students for the digital future.'
    },
    {
      id: 9,
      firstName: 'Christopher',
      lastName: 'Anderson',
      email: 'chris.anderson@school.com',
      phone: '+1-555-0901',
      department: 'Social Studies',
      subjects: [
        { id: 17, code: 'SOC101', name: 'Sociology', credits: 3 },
        { id: 18, code: 'PSY101', name: 'Psychology', credits: 3 }
      ],
      qualification: 'M.A Social Sciences, B.Ed',
      experience: 9,
      hireDate: '2015-01-12',
      salary: 69000,
      status: 'active',
      address: '369 Poplar Street, Springfield, IL',
      emergencyContact: '+1-555-0902',
      bio: 'Social studies teacher focused on developing critical thinking and civic engagement.'
    },
    {
      id: 10,
      firstName: 'Amanda',
      lastName: 'Thomas',
      email: 'amanda.thomas@school.com',
      phone: '+1-555-1001',
      department: 'Foreign Languages',
      subjects: [
        { id: 19, code: 'SPA101', name: 'Spanish I', credits: 3 },
        { id: 20, code: 'SPA102', name: 'Spanish II', credits: 3 }
      ],
      qualification: 'M.A Spanish Literature, B.Ed',
      experience: 11,
      hireDate: '2013-08-26',
      salary: 71000,
      status: 'inactive',
      address: '741 Chestnut Road, Springfield, IL',
      emergencyContact: '+1-555-1002',
      bio: 'Bilingual educator passionate about cultural exchange and language learning.'
    }
  ];

  constructor(private apiService: ApiService) {}

  // Get all teachers
  getAllTeachers(): Observable<Teacher[]> {
    // In real app, this would call apiService.get<Teacher[]>('/teachers')
    return of(this.mockTeachers).pipe(delay(300));
  }

  // Get teacher by ID
  getTeacherById(id: number): Observable<Teacher | undefined> {
    const teacher = this.mockTeachers.find(t => t.id === id);
    return of(teacher).pipe(delay(200));
  }

  // Search teachers
  searchTeachers(searchTerm: string): Observable<Teacher[]> {
    const filtered = this.mockTeachers.filter(teacher =>
      teacher.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.subjects.some(subject => 
        subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        subject.code.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    return of(filtered).pipe(delay(250));
  }

  // Filter teachers
  filterTeachers(filters: {
    department?: string;
    status?: string;
    experience?: { min: number; max: number };
    salary?: { min: number; max: number };
  }): Observable<Teacher[]> {
    let filtered = [...this.mockTeachers];

    if (filters.department) {
      filtered = filtered.filter(teacher => teacher.department === filters.department);
    }

    if (filters.status) {
      filtered = filtered.filter(teacher => teacher.status === filters.status);
    }

    if (filters.experience) {
      filtered = filtered.filter(teacher => 
        teacher.experience >= filters.experience!.min && 
        teacher.experience <= filters.experience!.max
      );
    }

    if (filters.salary) {
      filtered = filtered.filter(teacher => 
        teacher.salary >= filters.salary!.min && 
        teacher.salary <= filters.salary!.max
      );
    }

    return of(filtered).pipe(delay(200));
  }

  // Get all departments
  getDepartments(): Observable<string[]> {
    const departments = [...new Set(this.mockTeachers.map(teacher => teacher.department))];
    return of(departments.sort()).pipe(delay(100));
  }

  // Get all subjects
  getAllSubjects(): Observable<Subject[]> {
    const subjects: Subject[] = [];
    this.mockTeachers.forEach(teacher => {
      teacher.subjects.forEach(subject => {
        if (!subjects.find(s => s.id === subject.id)) {
          subjects.push(subject);
        }
      });
    });
    return of(subjects.sort((a, b) => a.code.localeCompare(b.code))).pipe(delay(100));
  }

  // Add new teacher
  addTeacher(teacher: Omit<Teacher, 'id'>): Observable<Teacher> {
    const newId = Math.max(...this.mockTeachers.map(t => t.id)) + 1;
    const newTeacher: Teacher = { ...teacher, id: newId };
    this.mockTeachers.push(newTeacher);
    return of(newTeacher).pipe(delay(400));
  }

  // Update teacher
  updateTeacher(teacher: Teacher): Observable<Teacher> {
    const index = this.mockTeachers.findIndex(t => t.id === teacher.id);
    if (index !== -1) {
      this.mockTeachers[index] = { ...teacher };
      return of(this.mockTeachers[index]).pipe(delay(400));
    }
    throw new Error('Teacher not found');
  }

  // Delete teacher
  deleteTeacher(id: number): Observable<boolean> {
    const index = this.mockTeachers.findIndex(t => t.id === id);
    if (index !== -1) {
      this.mockTeachers.splice(index, 1);
      return of(true).pipe(delay(300));
    }
    return of(false).pipe(delay(300));
  }

  // Bulk operations
  bulkUpdateTeachers(teachers: Teacher[]): Observable<Teacher[]> {
    teachers.forEach(teacher => {
      const index = this.mockTeachers.findIndex(t => t.id === teacher.id);
      if (index !== -1) {
        this.mockTeachers[index] = { ...teacher };
      }
    });
    return of(teachers).pipe(delay(600));
  }

  bulkDeleteTeachers(ids: number[]): Observable<boolean> {
    ids.forEach(id => {
      const index = this.mockTeachers.findIndex(t => t.id === id);
      if (index !== -1) {
        this.mockTeachers.splice(index, 1);
      }
    });
    return of(true).pipe(delay(500));
  }

  // Export/Import functionality
  exportTeachers(): Observable<Blob> {
    const data = JSON.stringify(this.mockTeachers, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    return of(blob).pipe(delay(200));
  }

  importTeachers(file: File): Observable<Teacher[]> {
    return new Observable(observer => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const teachers = JSON.parse(e.target?.result as string) as Teacher[];
          // Validate and process imported data
          const validTeachers = teachers.filter(teacher => 
            teacher.firstName && teacher.lastName && teacher.email && teacher.department
          );
          setTimeout(() => {
            observer.next(validTeachers);
            observer.complete();
          }, 800);
        } catch (error) {
          observer.error(new Error('Invalid file format'));
        }
      };
      reader.onerror = () => observer.error(new Error('Failed to read file'));
      reader.readAsText(file);
    });
  }

  // Statistics
  getTeacherStatistics(): Observable<{
    total: number;
    active: number;
    inactive: number;
    onLeave: number;
    departments: { name: string; count: number }[];
    averageExperience: number;
    averageSalary: number;
  }> {
    const stats = {
      total: this.mockTeachers.length,
      active: this.mockTeachers.filter(t => t.status === 'active').length,
      inactive: this.mockTeachers.filter(t => t.status === 'inactive').length,
      onLeave: this.mockTeachers.filter(t => t.status === 'on-leave').length,
      departments: this.getDepartmentStats(),
      averageExperience: this.mockTeachers.reduce((sum, t) => sum + t.experience, 0) / this.mockTeachers.length,
      averageSalary: this.mockTeachers.reduce((sum, t) => sum + t.salary, 0) / this.mockTeachers.length
    };
    return of(stats).pipe(delay(200));
  }

  private getDepartmentStats(): { name: string; count: number }[] {
    const deptCount: { [key: string]: number } = {};
    this.mockTeachers.forEach(teacher => {
      deptCount[teacher.department] = (deptCount[teacher.department] || 0) + 1;
    });
    return Object.entries(deptCount).map(([name, count]) => ({ name, count }));
  }
}
