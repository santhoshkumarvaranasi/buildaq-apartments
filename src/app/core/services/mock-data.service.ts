import { Injectable } from '@angular/core';

export interface MockStudent {
  id: number;
  firstName: string;
  lastName: string;
  email?: string;
  grade?: string;
  section?: string;
  class?: string;
  enrollmentDate?: string;
  status?: string;
  rollNo?: string;
  schoolId?: number;
  // allow additional flexible fields used by components
  [key: string]: any;
}

export interface MockStaff {
  id: number;
  name: string;
  role: string;
  email?: string;
  phone?: string;
}

export interface BehaviorIncident {
  id: number;
  studentId: number;
  studentName: string;
  class: string;
  date: string;
  type: string;
  severity: 'low' | 'medium' | 'high';
  actionTaken: string;
  staff: string;
  followUpDate?: string;
  parentNotified?: boolean;
}

export interface Announcement {
  id: number;
  title: string;
  audience: 'all' | 'students' | 'teachers';
  priority: 'low' | 'normal' | 'high';
  date: string;
  author: string;
  body: string;
}

export interface LibraryItem {
  id: number;
  title: string;
  author: string;
  category: string;
  status: 'available' | 'checked-out';
  borrower?: string;
  dueDate?: string;
}

export interface TransportRoute {
  id: number;
  routeName: string;
  driver: string;
  capacity: number;
  assigned: number;
  status: 'on-time' | 'delayed' | 'maintenance';
  departure: string;
  returnTime: string;
  notes?: string;
}

export interface Club {
  id: number;
  name: string;
  advisor: string;
  members: number;
  meetingDay: string;
  nextEvent?: string;
  category?: string;
}

export interface ParentContact {
  id: number;
  name: string;
  studentIds: number[];
  email: string;
  phone?: string;
  preferredChannel?: 'email' | 'sms';
  lastContact?: string;
  notes?: string;
}

export interface ApartmentProfile {
  studentId: number;
  allergies?: string;
  medications?: string;
  conditions?: string;
  doctor?: string;
  emergencyContact?: string;
}

export interface ApartmentIncident {
  id: number;
  studentId: number;
  studentName: string;
  date: string;
  symptom: string;
  actionTaken: string;
  notifiedParent?: boolean;
}

export interface AssetItem {
  id: string;
  name: string;
  category: string;
  status: 'available' | 'assigned' | 'maintenance';
  assignedTo?: string;
  assignedType?: 'student' | 'staff';
  location?: string;
  dueDate?: string;
  lastService?: string;
  vendor?: string;
}

export interface EventItem {
  id: number;
  title: string;
  date: string;
  time?: string;
  location?: string;
  audience: 'all' | 'students' | 'teachers' | 'parents';
  category?: string;
  status?: 'upcoming' | 'completed';
  rsvps?: { name: string; role: string; response: 'yes' | 'no' | 'pending' }[];
}

export interface ResourceItem {
  id: number;
  name: string;
  type: 'room' | 'lab' | 'ground';
  capacity: number;
  equipment?: string;
  status?: 'available' | 'in-use' | 'maintenance';
}

export interface BookingItem {
  id: number;
  resourceId: number;
  resourceName: string;
  requester: string;
  purpose: string;
  date: string;
  start: string;
  end: string;
  status: 'approved' | 'pending';
  conflict?: boolean;
}

export interface TeacherGoal {
  id: number;
  teacherId: number;
  teacherName: string;
  title: string;
  dueDate: string;
  status: 'on-track' | 'at-risk' | 'completed';
}

export interface TeacherFeedback {
  id: number;
  teacherId: number;
  teacherName: string;
  date: string;
  observer: string;
  summary: string;
  score?: number;
}

export interface TeacherPd {
  id: number;
  teacherId: number;
  teacherName: string;
  title: string;
  hours: number;
  status: 'planned' | 'in-progress' | 'completed';
  date?: string;
}

export interface CoverageRequest {
  id: number;
  date: string;
  classId: string;
  period: string;
  subject: string;
  requester: string;
  status: 'open' | 'assigned' | 'closed';
  substitute?: string;
}

export interface NotificationItem {
  id: number;
  type: 'fee' | 'attendance' | 'behavior' | 'coverage' | 'event';
  title: string;
  message: string;
  date: string;
  unread?: boolean;
  link?: string;
  priority?: 'low' | 'normal' | 'high';
}

@Injectable({ providedIn: 'root' })
export class MockDataService {
  students: MockStudent[] = [
    { id: 1, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com', grade: '10', section: 'A', class: '10A', enrollmentDate: '2023-06-01', status: 'active' },
    { id: 2, firstName: 'John', lastName: 'Smith', email: 'john.smith@example.com', grade: '9', section: 'B', class: '9B', enrollmentDate: '2022-08-15', status: 'active' },
    { id: 3, firstName: 'Priya', lastName: 'Kumar', email: 'priya.kumar@example.com', grade: '11', section: 'A', class: '11A', enrollmentDate: '2021-04-10', status: 'inactive' },
    { id: 4, firstName: 'Carlos', lastName: 'Mendez', email: 'carlos.mendez@example.com', grade: '8', section: 'C', class: '8C', enrollmentDate: '2024-02-01', status: 'active' },
    { id: 5, firstName: 'Sara', lastName: 'Lee', email: 'sara.lee@example.com', grade: '9', section: 'A', class: '9A', enrollmentDate: '2024-03-12', status: 'active' }
  ];

  staff: MockStaff[] = [
    { id: 1, name: 'Alice Brown', role: 'Teacher', email: 'alice.brown@example.com', phone: '+1-555-1001' },
    { id: 2, name: 'Robert Green', role: 'Accountant', email: 'robert.green@example.com' },
    { id: 3, name: 'Emily Davis', role: 'Counselor', email: 'emily.davis@example.com' },
    { id: 4, name: 'Daniel Carter', role: 'PE Teacher', email: 'daniel.carter@example.com' }
  ];

  classes = [
    { id: '10A', name: 'Class 10 A', capacity: 40, teacher: 'Alice Brown' },
    { id: '9B', name: 'Class 9 B', capacity: 38, teacher: 'Robert Green' },
    { id: '8C', name: 'Class 8 C', capacity: 35, teacher: 'Emily Davis' }
  ];

  fees = [
    { studentId: 1, balance: 1200, lastPaid: '2025-03-15' },
    { studentId: 2, balance: 0, lastPaid: '2025-06-01' },
    { studentId: 3, balance: 450, lastPaid: '2025-05-20' },
    { studentId: 4, balance: 0, lastPaid: '2025-06-10' },
    { studentId: 5, balance: 300, lastPaid: '2025-06-05' }
  ];
  discounts = [
    { id: 'D-001', studentId: 1, studentName: 'Jane Doe', type: 'Scholarship', amount: 200, reason: 'Merit', validUntil: '2025-12-31', status: 'active' },
    { id: 'D-002', studentId: 2, studentName: 'John Smith', type: 'Sibling', amount: 150, reason: 'Sibling concession', validUntil: '2025-09-30', status: 'active' },
    { id: 'D-003', studentId: 3, studentName: 'Priya Kumar', type: 'Need-based', amount: 250, reason: 'Financial aid', validUntil: '2025-08-31', status: 'active' }
  ];
  receipts = [
    { id: 'R-1001', studentId: 1, studentName: 'Jane Doe', date: '2025-06-01', amount: 1200, method: 'Online' },
    { id: 'R-1002', studentId: 2, studentName: 'John Smith', date: '2025-06-02', amount: 800, method: 'Cash' },
    { id: 'R-1003', studentId: 4, studentName: 'Carlos Mendez', date: '2025-06-11', amount: 500, method: 'Online' }
  ];

  attendance = [
    { id: 1, studentId: 1, date: '2025-11-20', status: 'present' },
    { id: 2, studentId: 2, date: '2025-11-20', status: 'absent' },
    { id: 3, studentId: 4, date: '2025-11-20', status: 'present' },
    { id: 4, studentId: 5, date: '2025-11-20', status: 'present' }
  ];

  // Timetable entries
  timetable = [
    { id: 1, classId: '10A', subject: 'Mathematics', teacher: 'Alice Brown', day: 'Mon', time: '09:00' },
    { id: 2, classId: '9B', subject: 'Science', teacher: 'Robert Green', day: 'Tue', time: '10:00' },
    { id: 3, classId: '8C', subject: 'English', teacher: 'Emily Davis', day: 'Wed', time: '11:00', conflict: false },
    { id: 4, classId: '10A', subject: 'Physics', teacher: 'Daniel Carter', day: 'Mon', time: '09:30', conflict: true, conflictReason: 'Overlaps with Mathematics' }
  ];

  // Exams and marks
  exams = [
    { id: 1, title: 'Midterm 2025', date: '2025-10-15', studentMarks: [{ studentId: 1, marks: 78 }, { studentId: 2, marks: 85 }] }
  ];

  admissions = [
    { id: 1, name: 'Ravi Patel', class: '8A', status: 'new', submitted: '2025-06-10', notes: 'Needs guardian contact' },
    { id: 2, name: 'Sara Lee', class: '9B', status: 'verified', submitted: '2025-06-05', notes: 'All docs uploaded' },
    { id: 3, name: 'Mark Chen', class: '10A', status: 'rejected', submitted: '2025-06-08', notes: 'Incomplete transcript' }
  ];

  behaviorIncidents: BehaviorIncident[] = [
    { id: 1, studentId: 1, studentName: 'Jane Doe', class: '10A', date: '2025-11-10', type: 'Late submission', severity: 'low', actionTaken: 'Reminder sent', staff: 'Alice Brown', followUpDate: '2025-11-20', parentNotified: false },
    { id: 2, studentId: 1, studentName: 'Jane Doe', class: '10A', date: '2025-11-18', type: 'Class disruption', severity: 'medium', actionTaken: 'Counseling scheduled', staff: 'Alice Brown', followUpDate: '2025-11-25', parentNotified: true },
    { id: 3, studentId: 2, studentName: 'John Smith', class: '9B', date: '2025-11-05', type: 'Absence', severity: 'low', actionTaken: 'Called guardian', staff: 'Robert Green', followUpDate: '2025-11-12', parentNotified: true },
    { id: 4, studentId: 3, studentName: 'Priya Kumar', class: '11A', date: '2025-10-28', type: 'Cheating', severity: 'high', actionTaken: 'Incident report filed', staff: 'Robert Green', followUpDate: '2025-11-05', parentNotified: true },
    { id: 5, studentId: 4, studentName: 'Carlos Mendez', class: '8C', date: '2025-11-12', type: 'Bullying', severity: 'medium', actionTaken: 'Parent meeting scheduled', staff: 'Emily Davis', followUpDate: '2025-11-22', parentNotified: true }
  ];

  announcements: Announcement[] = [
    { id: 1, title: 'PTA Meeting', audience: 'all', priority: 'normal', date: '2025-12-05', author: 'Principal', body: 'Parent Teacher meeting at 4 PM in auditorium.' },
    { id: 2, title: 'Exam Schedule', audience: 'students', priority: 'high', date: '2025-12-10', author: 'Exam Cell', body: 'Midterm schedule released. Check Exams page.' },
    { id: 3, title: 'Workshop Invite', audience: 'teachers', priority: 'low', date: '2025-11-28', author: 'Academics', body: 'Teaching with AI tools workshop in Lab 2.' }
  ];

  library: LibraryItem[] = [
    { id: 1, title: 'Algebra Essentials', author: 'K. Sharma', category: 'Mathematics', status: 'available' },
    { id: 2, title: 'World History', author: 'L. Peters', category: 'History', status: 'checked-out', borrower: 'Jane Doe', dueDate: '2025-12-05' },
    { id: 3, title: 'Chemistry Basics', author: 'R. Gupta', category: 'Science', status: 'available' },
    { id: 4, title: 'English Grammar', author: 'S. White', category: 'Language', status: 'checked-out', borrower: 'John Smith', dueDate: '2025-12-02' }
  ];

  transportRoutes: TransportRoute[] = [
    { id: 1, routeName: 'Route A - North', driver: 'Daniel Carter', capacity: 40, assigned: 32, status: 'on-time', departure: '07:30', returnTime: '15:15', notes: 'Stop at Maple Ave closed Friday' },
    { id: 2, routeName: 'Route B - East', driver: 'Emily Davis', capacity: 36, assigned: 30, status: 'delayed', departure: '07:45', returnTime: '15:30', notes: 'Detour near bridge repairs' },
    { id: 3, routeName: 'Route C - South', driver: 'Carlos Ruiz', capacity: 42, assigned: 38, status: 'on-time', departure: '07:25', returnTime: '15:10' },
    { id: 4, routeName: 'Route D - West', driver: 'Sofia Lee', capacity: 30, assigned: 18, status: 'maintenance', departure: '—', returnTime: '—', notes: 'Bus in service bay' }
  ];

  clubs: Club[] = [
    { id: 1, name: 'Robotics Club', advisor: 'Alice Brown', members: 24, meetingDay: 'Wed', nextEvent: 'Regional qualifier', category: 'STEM' },
    { id: 2, name: 'Drama Society', advisor: 'Robert Green', members: 18, meetingDay: 'Fri', nextEvent: 'Winter play auditions', category: 'Arts' },
    { id: 3, name: 'Debate Team', advisor: 'Emily Davis', members: 12, meetingDay: 'Tue', nextEvent: 'Inter-school debate', category: 'Academics' },
    { id: 4, name: 'Eco Club', advisor: 'Carlos Ruiz', members: 15, meetingDay: 'Thu', nextEvent: 'Campus cleanup', category: 'Community' }
  ];

  parents: ParentContact[] = [
    { id: 1, name: 'Anita Doe', studentIds: [1], email: 'anita.doe@example.com', phone: '+1-555-0101', preferredChannel: 'email', lastContact: '2025-11-15', notes: 'Prefers morning calls' },
    { id: 2, name: 'Michael Smith', studentIds: [2], email: 'm.smith@example.com', phone: '+1-555-0102', preferredChannel: 'sms', lastContact: '2025-11-10', notes: 'Works night shifts' },
    { id: 3, name: 'Priya Nair', studentIds: [3], email: 'priya.nair@example.com', phone: '+1-555-0103', preferredChannel: 'email', lastContact: '2025-11-18' },
    { id: 4, name: 'Lucia Mendez', studentIds: [4], email: 'lucia.mendez@example.com', phone: '+1-555-0104', preferredChannel: 'email', lastContact: '2025-11-12' }
  ];

  ApartmentProfiles: ApartmentProfile[] = [
    { studentId: 1, allergies: 'Peanuts', medications: 'EpiPen', conditions: 'Asthma', doctor: 'Dr. Lee', emergencyContact: 'Anita Doe (+1-555-0101)' },
    { studentId: 2, allergies: 'None', medications: 'None', conditions: '', doctor: 'Dr. Patel', emergencyContact: 'Michael Smith (+1-555-0102)' },
    { studentId: 3, allergies: 'Dust', medications: 'Antihistamine', conditions: 'Allergic rhinitis', doctor: 'Dr. Rao', emergencyContact: 'Priya Nair (+1-555-0103)' },
    { studentId: 4, allergies: 'None', medications: 'None', conditions: 'None', doctor: 'Dr. Lee', emergencyContact: 'Lucia Mendez (+1-555-0104)' }
  ];

  ApartmentIncidents: ApartmentIncident[] = [
    { id: 1, studentId: 1, studentName: 'Jane Doe', date: '2025-11-20', symptom: 'Asthma flare', actionTaken: 'Inhaler administered', notifiedParent: true },
    { id: 2, studentId: 2, studentName: 'John Smith', date: '2025-11-18', symptom: 'Fever', actionTaken: 'Sent home', notifiedParent: true },
    { id: 3, studentId: 3, studentName: 'Priya Kumar', date: '2025-11-10', symptom: 'Headache', actionTaken: 'Rested in clinic', notifiedParent: false },
    { id: 4, studentId: 4, studentName: 'Carlos Mendez', date: '2025-11-08', symptom: 'Sprained ankle', actionTaken: 'Ice and rest', notifiedParent: true }
  ];

  assets: AssetItem[] = [
    { id: 'IT-001', name: 'Chromebook A', category: 'IT', status: 'assigned', assignedTo: 'Jane Doe', assignedType: 'student', dueDate: '2025-12-05', location: 'Lab 1', lastService: '2025-10-01' },
    { id: 'IT-002', name: 'Projector', category: 'IT', status: 'maintenance', location: 'Audiovisual', vendor: 'AV Works', lastService: '2025-11-10' },
    { id: 'SCI-010', name: 'Microscope', category: 'Lab', status: 'available', location: 'Science Lab' },
    { id: 'LIB-100', name: 'Kindle', category: 'Library Device', status: 'assigned', assignedTo: 'John Smith', assignedType: 'student', dueDate: '2025-11-30', location: 'Library' },
    { id: 'RM-201', name: 'Smart Board', category: 'IT', status: 'available', location: 'Room 201', lastService: '2025-09-15' }
  ];

  events: EventItem[] = [
    { id: 1, title: 'PTA Meeting', date: '2025-12-05', time: '16:00', location: 'Auditorium', audience: 'parents', category: 'PTA', status: 'upcoming', rsvps: [{ name: 'Anita Doe', role: 'Parent', response: 'yes' }] },
    { id: 2, title: 'Science Fair', date: '2025-12-12', time: '10:00', location: 'Hall A', audience: 'students', category: 'Academics', status: 'upcoming', rsvps: [{ name: 'Jane Doe', role: 'Student', response: 'pending' }] },
    { id: 3, title: 'Teacher Workshop', date: '2025-11-30', time: '14:00', location: 'Lab 2', audience: 'teachers', category: 'Training', status: 'upcoming', rsvps: [{ name: 'Alice Brown', role: 'Teacher', response: 'yes' }] },
    { id: 4, title: 'Sports Day', date: '2025-12-20', time: '09:00', location: 'Ground', audience: 'students', category: 'Sports', status: 'upcoming', rsvps: [{ name: 'Carlos Mendez', role: 'Student', response: 'yes' }] }
  ];

  resources: ResourceItem[] = [
    { id: 1, name: 'Room 101', type: 'room', capacity: 30, equipment: 'Projector', status: 'available' },
    { id: 2, name: 'Physics Lab', type: 'lab', capacity: 24, equipment: 'Lab benches, microscopes', status: 'available' },
    { id: 3, name: 'Soccer Ground', type: 'ground', capacity: 200, equipment: 'Scoreboard', status: 'in-use' },
    { id: 4, name: 'Chemistry Lab', type: 'lab', capacity: 20, equipment: 'Fume hoods', status: 'maintenance' }
  ];

  bookings: BookingItem[] = [
    { id: 1, resourceId: 1, resourceName: 'Room 101', requester: 'Alice Brown', purpose: 'PTA Prep', date: '2025-12-04', start: '14:00', end: '15:30', status: 'approved', conflict: false },
    { id: 2, resourceId: 2, resourceName: 'Physics Lab', requester: 'Science Club', purpose: 'Demo', date: '2025-12-04', start: '10:00', end: '12:00', status: 'pending', conflict: false },
    { id: 3, resourceId: 1, resourceName: 'Room 101', requester: 'Math Dept', purpose: 'Workshop', date: '2025-12-04', start: '15:00', end: '16:00', status: 'pending', conflict: true },
    { id: 4, resourceId: 4, resourceName: 'Chemistry Lab', requester: 'Science Dept', purpose: 'Lab prep', date: '2025-12-05', start: '09:00', end: '11:00', status: 'approved', conflict: false }
  ];

  teacherGoals: TeacherGoal[] = [
    { id: 1, teacherId: 1, teacherName: 'Alice Brown', title: 'Improve math outcomes by 5%', dueDate: '2025-12-31', status: 'on-track' },
    { id: 2, teacherId: 2, teacherName: 'Robert Green', title: 'Integrate project-based learning', dueDate: '2025-11-30', status: 'at-risk' },
    { id: 3, teacherId: 3, teacherName: 'Emily Davis', title: 'Increase parent touchpoints', dueDate: '2025-12-15', status: 'on-track' }
  ];

  teacherFeedback: TeacherFeedback[] = [
    { id: 1, teacherId: 1, teacherName: 'Alice Brown', date: '2025-11-15', observer: 'Principal', summary: 'Engaged class, good pacing', score: 4.5 },
    { id: 2, teacherId: 2, teacherName: 'Robert Green', date: '2025-11-10', observer: 'Vice Principal', summary: 'Needs more checks for understanding', score: 3.5 },
    { id: 3, teacherId: 3, teacherName: 'Emily Davis', date: '2025-11-12', observer: 'Principal', summary: 'Great rapport with students', score: 4.7 }
  ];

  teacherPd: TeacherPd[] = [
    { id: 1, teacherId: 1, teacherName: 'Alice Brown', title: 'STEM Workshop', hours: 6, status: 'completed', date: '2025-11-05' },
    { id: 2, teacherId: 2, teacherName: 'Robert Green', title: 'Classroom management', hours: 4, status: 'in-progress' },
    { id: 3, teacherId: 3, teacherName: 'Emily Davis', title: 'Counseling best practices', hours: 5, status: 'planned' }
  ];

  coverageRequests: CoverageRequest[] = [
    { id: 1, date: '2025-12-02', classId: '10A', period: '09:00-10:00', subject: 'Math', requester: 'Alice Brown', status: 'open' },
    { id: 2, date: '2025-12-02', classId: '9B', period: '11:00-12:00', subject: 'Science', requester: 'Robert Green', status: 'assigned', substitute: 'Emily Davis' },
    { id: 3, date: '2025-12-03', classId: '8C', period: '10:00-11:00', subject: 'English', requester: 'Emily Davis', status: 'open' }
  ];

  notifications: NotificationItem[] = [
    { id: 1, type: 'fee', title: 'Overdue fee', message: 'Jane Doe has $1,200 outstanding', date: '2025-11-25', unread: true, priority: 'high', link: '/fees' },
    { id: 2, type: 'attendance', title: 'Absence recorded', message: 'John Smith absent today', date: '2025-11-26', unread: true, priority: 'normal', link: '/attendance' },
    { id: 3, type: 'behavior', title: 'Follow-up due', message: 'Asthma flare follow-up for Jane Doe', date: '2025-11-27', unread: false, priority: 'high', link: '/behavior' },
    { id: 4, type: 'coverage', title: 'Coverage needed', message: '8C English needs substitute', date: '2025-11-28', unread: true, priority: 'high', link: '/resources' },
    { id: 5, type: 'event', title: 'PTA Meeting', message: 'PTA meeting on 2025-12-05', date: '2025-11-29', unread: false, priority: 'low', link: '/events' }
  ];

  getStudents() { return this.students; }
  getStaff() { return this.staff; }
  getClasses() { return this.classes; }
  getFees() { return this.fees; }
  getAttendance() { return this.attendance; }
  getTimetable() { return this.timetable; }
  getExams() { return this.exams; }
  getDiscounts() { return this.discounts; }
  getReceipts() { return this.receipts; }
  getBehaviorIncidents(): (BehaviorIncident & { isRepeat: boolean })[] {
    const counts: Record<number, number> = {};
    this.behaviorIncidents.forEach(b => { counts[b.studentId] = (counts[b.studentId] || 0) + 1; });
    return this.behaviorIncidents.map(b => Object.assign({}, b, { isRepeat: (counts[b.studentId] || 0) > 1 }));
  }
  addBehaviorIncident(entry: Partial<BehaviorIncident>) {
    const nextId = (this.behaviorIncidents.reduce((m, i) => Math.max(m, i.id), 0) || 0) + 1;
    const student = this.students.find(s => s.id === entry.studentId);
    const created: BehaviorIncident = Object.assign({
      id: nextId,
      studentId: entry.studentId || 0,
      studentName: entry.studentName || (student ? `${student.firstName} ${student.lastName}` : 'Unknown'),
      class: entry.class || (student ? student.class || '' : ''),
      date: entry.date || new Date().toISOString().slice(0, 10),
      type: entry.type || 'General',
      severity: (entry.severity as any) || 'medium',
      actionTaken: entry.actionTaken || 'Logged',
      staff: entry.staff || 'Counselor',
      followUpDate: entry.followUpDate,
      parentNotified: !!entry.parentNotified
    });
    this.behaviorIncidents.unshift(created);
    return created;
  }
  getAnnouncements() { return this.announcements; }
  addAnnouncement(entry: Partial<Announcement>) {
    const nextId = (this.announcements.reduce((m, a) => Math.max(m, a.id), 0) || 0) + 1;
    const created: Announcement = Object.assign({
      id: nextId,
      title: entry.title || 'Untitled',
      audience: (entry.audience as any) || 'all',
      priority: (entry.priority as any) || 'normal',
      date: entry.date || new Date().toISOString().slice(0, 10),
      author: entry.author || 'Admin',
      body: entry.body || ''
    });
    this.announcements.unshift(created);
    return created;
  }
  getLibraryItems() { return this.library; }
  checkoutBook(id: number, borrower: string, dueDate: string) {
    const item = this.library.find(b => b.id === id);
    if (!item) return null;
    item.status = 'checked-out';
    item.borrower = borrower;
    item.dueDate = dueDate;
    return item;
  }
  returnBook(id: number) {
    const item = this.library.find(b => b.id === id);
    if (!item) return null;
    item.status = 'available';
    item.borrower = undefined;
    item.dueDate = undefined;
    return item;
  }
  getTransportRoutes() { return this.transportRoutes; }
  updateRouteStatus(id: number, status: TransportRoute['status']) {
    const route = this.transportRoutes.find(r => r.id === id);
    if (!route) return null;
    route.status = status;
    return route;
  }
  getClubs() { return this.clubs; }
  addClub(entry: Partial<Club>) {
    const nextId = (this.clubs.reduce((m, c) => Math.max(m, c.id), 0) || 0) + 1;
    const created: Club = Object.assign({
      id: nextId,
      name: 'New Club',
      advisor: 'Advisor',
      members: 0,
      meetingDay: 'Mon',
      category: 'General'
    }, entry);
    this.clubs.unshift(created);
    return created;
  }
  getParents() { return this.parents; }
  addParent(entry: Partial<ParentContact>) {
    const nextId = (this.parents.reduce((m, p) => Math.max(m, p.id), 0) || 0) + 1;
    const created: ParentContact = Object.assign({
      id: nextId,
      name: 'New Parent',
      studentIds: [],
      email: '',
      preferredChannel: 'email'
    }, entry);
    this.parents.unshift(created);
    return created;
  }
  getApartmentProfiles() { return this.ApartmentProfiles; }
  getApartmentIncidents() { return this.ApartmentIncidents; }
  addApartmentIncident(entry: Partial<ApartmentIncident>) {
    const nextId = (this.ApartmentIncidents.reduce((m, h) => Math.max(m, h.id), 0) || 0) + 1;
    const created: ApartmentIncident = Object.assign({
      id: nextId,
      studentId: entry.studentId || 0,
      studentName: entry.studentName || 'Student',
      date: entry.date || new Date().toISOString().slice(0,10),
      symptom: entry.symptom || 'Symptom',
      actionTaken: entry.actionTaken || 'Logged',
      notifiedParent: !!entry.notifiedParent
    });
    this.ApartmentIncidents.unshift(created);
    return created;
  }
  getAssets() { return this.assets; }
  updateAsset(id: string, changes: Partial<AssetItem>) {
    const idx = this.assets.findIndex(a => a.id === id);
    if (idx === -1) return null;
    this.assets[idx] = Object.assign({}, this.assets[idx], changes);
    return this.assets[idx];
  }
  addAsset(entry: Partial<AssetItem>) {
    const created: AssetItem = Object.assign({
      id: `AST-${(this.assets.length + 1).toString().padStart(3,'0')}`,
      name: 'New Asset',
      category: 'General',
      status: 'available',
      location: 'Store'
    }, entry);
    this.assets.unshift(created);
    return created;
  }
  getEvents() { return this.events; }
  addEvent(entry: Partial<EventItem>) {
    const nextId = (this.events.reduce((m, e) => Math.max(m, e.id), 0) || 0) + 1;
    const created: EventItem = Object.assign({
      id: nextId,
      title: 'New Event',
      date: new Date().toISOString().slice(0,10),
      audience: 'all',
      status: 'upcoming',
      rsvps: []
    }, entry);
    this.events.unshift(created);
    return created;
  }
  getResources() { return this.resources; }
  getBookings() { return this.bookings; }
  addBooking(entry: Partial<BookingItem>) {
    const nextId = (this.bookings.reduce((m, b) => Math.max(m, b.id), 0) || 0) + 1;
    const created: BookingItem = Object.assign({
      id: nextId,
      resourceId: entry.resourceId || 0,
      resourceName: entry.resourceName || 'Resource',
      requester: entry.requester || 'Requester',
      purpose: entry.purpose || 'Purpose',
      date: entry.date || new Date().toISOString().slice(0, 10),
      start: entry.start || '09:00',
      end: entry.end || '10:00',
      status: entry.status || 'pending',
      conflict: !!entry.conflict
    });
    this.bookings.unshift(created);
    return created;
  }
  updateBooking(id: number, changes: Partial<BookingItem>) {
    const idx = this.bookings.findIndex(b => b.id === id);
    if (idx === -1) return null;
    this.bookings[idx] = Object.assign({}, this.bookings[idx], changes);
    return this.bookings[idx];
  }
  getTeacherGoals() { return this.teacherGoals; }
  getTeacherFeedback() { return this.teacherFeedback; }
  getTeacherPd() { return this.teacherPd; }
  getCoverageRequests() { return this.coverageRequests; }
  updateCoverage(id: number, changes: Partial<CoverageRequest>) {
    const idx = this.coverageRequests.findIndex(c => c.id === id);
    if (idx === -1) return null;
    this.coverageRequests[idx] = Object.assign({}, this.coverageRequests[idx], changes);
    return this.coverageRequests[idx];
  }
  getNotifications() { return this.notifications; }
  updateNotification(id: number, changes: Partial<NotificationItem>) {
    const idx = this.notifications.findIndex(n => n.id === id);
    if (idx === -1) return null;
    this.notifications[idx] = Object.assign({}, this.notifications[idx], changes);
    return this.notifications[idx];
  }
  addDiscount(entry: any) {
    const created = Object.assign({ id: `D-${(this.discounts.length + 1).toString().padStart(3,'0')}`, status: 'active' }, entry);
    this.discounts.unshift(created);
    return created;
  }
  updateDiscountStatus(id: string, status: string) {
    const idx = this.discounts.findIndex(d => d.id === id);
    if (idx === -1) return null;
    this.discounts[idx].status = status;
    return this.discounts[idx];
  }
  getAdmissions() { return this.admissions; }
  updateAdmission(id: number, status: string) {
    const idx = this.admissions.findIndex(a => a.id === id);
    if (idx === -1) return null;
    this.admissions[idx].status = status;
    return this.admissions[idx];
  }

  // Create a new student in-memory and return it
  createStudent(payload: Partial<MockStudent>): MockStudent {
    const nextId = (this.students.reduce((m, s) => Math.max(m, s.id), 0) || 0) + 1;
    const created: MockStudent = Object.assign({ id: nextId, status: 'active' }, payload) as MockStudent;
    // ensure strings
    created.firstName = created.firstName || '';
    created.lastName = created.lastName || '';
    this.students.unshift(created);
    return created;
  }

  updateStudent(id: number, changes: Partial<MockStudent>): MockStudent | null {
    const idx = this.students.findIndex(s => s.id === id);
    if (idx === -1) return null;
    const updated = Object.assign({}, this.students[idx], changes);
    this.students[idx] = updated;
    return updated;
  }

  deleteStudent(id: number): boolean {
    const idx = this.students.findIndex(s => s.id === id);
    if (idx === -1) return false;
    this.students.splice(idx, 1);
    return true;
  }

  // Staff CRUD
  createStaff(payload: Partial<MockStaff>): MockStaff {
    const nextId = (this.staff.reduce((m, s) => Math.max(m, s.id), 0) || 0) + 1;
    const created: MockStaff = Object.assign({ id: nextId }, payload) as MockStaff;
    created.name = created.name || '';
    this.staff.unshift(created);
    return created;
  }

  updateStaff(id: number, changes: Partial<MockStaff>): MockStaff | null {
    const idx = this.staff.findIndex(s => s.id === id);
    if (idx === -1) return null;
    const updated = Object.assign({}, this.staff[idx], changes);
    this.staff[idx] = updated;
    return updated;
  }

  deleteStaff(id: number): boolean {
    const idx = this.staff.findIndex(s => s.id === id);
    if (idx === -1) return false;
    this.staff.splice(idx, 1);
    return true;
  }

  // Attendance helpers
  addAttendance(studentId: number, date: string, status: string) {
    const nextId = (this.attendance.reduce((m, a) => Math.max(m, a.id), 0) || 0) + 1;
    const entry = { id: nextId, studentId, date, status } as any;
    this.attendance.unshift(entry);
    return entry;
  }

  updateAttendanceStatus(id: number, status: string) {
    const idx = this.attendance.findIndex(a => a.id === id);
    if (idx === -1) return null;
    this.attendance[idx].status = status;
    return this.attendance[idx];
  }

  // Fees helpers: apply a payment to a student's balance
  payFee(studentId: number, amount: number, date: string) {
    const idx = this.fees.findIndex(x => x.studentId === studentId);
    if (idx === -1) {
      const f = { studentId, balance: Math.max(0, 0 - amount), lastPaid: date } as any;
      this.fees.unshift(f);
      return f;
    }
    const f = this.fees[idx] as any;
    f.balance = Math.max(0, (f.balance || 0) - amount);
    f.lastPaid = date;
    return f;
  }

  // Timetable helpers
  addTimetableEntry(entry: any) {
    const nextId = (this.timetable.reduce((m, t) => Math.max(m, t.id), 0) || 0) + 1;
    const created = Object.assign({ id: nextId }, entry);
    this.timetable.unshift(created);
    return created;
  }

  deleteTimetableEntry(id: number) {
    const idx = this.timetable.findIndex(t => t.id === id);
    if (idx === -1) return false;
    this.timetable.splice(idx, 1);
    return true;
  }

  // Exams helpers
  createExam(title: string, date: string, studentIds: number[]) {
    const nextId = (this.exams.reduce((m, e) => Math.max(m, e.id), 0) || 0) + 1;
    const studentMarks = studentIds.map(id => ({ studentId: id, marks: null }));
    const created = { id: nextId, title, date, studentMarks } as any;
    this.exams.unshift(created);
    return created;
  }

  recordMarks(examId: number, marks: { studentId: number; marks: number }[]) {
    const ex = this.exams.find(e => e.id === examId);
    if (!ex) return null;
    marks.forEach(m => {
      const sm = ex.studentMarks.find((s: any) => s.studentId === m.studentId);
      if (sm) sm.marks = m.marks; else ex.studentMarks.push({ studentId: m.studentId, marks: m.marks });
    });
    return ex;
  }
}
