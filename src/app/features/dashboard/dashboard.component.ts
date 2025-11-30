import { Component } from '@angular/core';

@Component({
  selector: 'apt-dashboard',
  standalone: false,
  template: `
    <div class="page">
      <div class="hero mat-elevation-z2">
        <div>
          <p class="eyebrow">Apartment & Association</p>
          <h1>Community Overview</h1>
          <p class="subtitle">Occupancy, dues, maintenance, and amenities at a glance.</p>
          <div class="chip-row">
            <span class="pill">Remote: apartments</span>
            <span class="pill">Mock data</span>
          </div>
        </div>
        <div class="hero-stats">
          <div class="stat" *ngFor="let s of stats">
            <div class="label">{{ s.label }}</div>
            <div class="value">{{ s.value }}</div>
            <div class="meta">{{ s.meta }}</div>
          </div>
        </div>
      </div>

      <div class="card-grid">
        <mat-card class="nav-card" *ngFor="let card of cards">
          <div class="nav-icon" [style.background]="card.bg">
            <svg viewBox="0 0 24 24"><path [attr.d]="card.icon" fill="currentColor"/></svg>
          </div>
          <div class="nav-body">
            <div class="label">{{ card.label }}</div>
            <div class="title">{{ card.title }}</div>
            <div class="meta">{{ card.meta }}</div>
            <a mat-stroked-button color="primary" [routerLink]="card.link">Open</a>
          </div>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .page { display:grid; gap:16px; padding:12px; }
    .hero { background:linear-gradient(120deg,#1d4ed8,#60a5fa); color:#fff; border-radius:14px; padding:18px; display:flex; justify-content:space-between; gap:16px; }
    .hero-stats { display:grid; grid-template-columns: repeat(auto-fit,minmax(150px,1fr)); gap:10px; min-width:280px; }
    .stat { background:rgba(255,255,255,0.12); border-radius:10px; padding:10px; }
    .stat .label { text-transform:uppercase; font-size:11px; letter-spacing:.06em; opacity:.9; }
    .stat .value { font-size:22px; font-weight:700; }
    .stat .meta { opacity:.85; }
    .eyebrow { text-transform:uppercase; letter-spacing:.08em; margin:0; font-size:12px; }
    h1 { margin:2px 0 4px; }
    .subtitle { margin:0 0 8px; opacity:.9; }
    .chip-row { display:flex; gap:8px; flex-wrap:wrap; }
    .pill { background:rgba(255,255,255,0.15); padding:4px 10px; border-radius:999px; font-weight:600; }
    .card-grid { display:grid; grid-template-columns: repeat(auto-fit,minmax(240px,1fr)); gap:12px; }
    .nav-card { display:flex; gap:12px; align-items:flex-start; }
    .nav-icon { width:44px; height:44px; border-radius:10px; display:grid; place-items:center; color:#fff; }
    .nav-body .label { text-transform:uppercase; font-size:11px; letter-spacing:.05em; color:#64748b; }
    .nav-body .title { font-size:18px; font-weight:700; margin:2px 0; }
    .nav-body .meta { color:#94a3b8; margin-bottom:8px; }
  `]
})
export class AptDashboardComponent {
  stats = [
    { label: 'Occupancy', value: '94%', meta: '212 of 225 units' },
    { label: 'Open tickets', value: '18', meta: '5 urgent' },
    { label: 'Dues collected', value: '$182k', meta: 'This month' },
    { label: 'Amenities booked', value: '42', meta: 'Week to date' }
  ];

  cards = [
    { label: 'Directory', title: 'Residents', meta: 'Contacts, vehicles, access', link: '/residents', bg: 'linear-gradient(135deg,#6366f1,#8b5cf6)', icon: 'M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm-7 7.5C5 16.57 8.13 14 12 14s7 2.57 7 5.5V21H5Z' },
    { label: 'Assets', title: 'Units', meta: 'Leases, rent, readiness', link: '/units', bg: 'linear-gradient(135deg,#22c55e,#16a34a)', icon: 'M4 10V7.5L12 3l8 4.5V10h-2v8H6v-8H4Zm4 0h8v6H8v-6Z' },
    { label: 'Operations', title: 'Maintenance', meta: 'Work orders, SLA, vendors', link: '/maintenance', bg: 'linear-gradient(135deg,#f59e0b,#f97316)', icon: 'M7 4h10l1 2-3 6v6H9v-6L6 6l1-2Zm5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z' },
    { label: 'Community', title: 'Amenities', meta: 'Bookings and waitlists', link: '/amenities', bg: 'linear-gradient(135deg,#ec4899,#db2777)', icon: 'M4 6h16v2H4V6Zm0 5h16v2H4v-2Zm0 5h16v2H4v-2Z' },
    { label: 'Finance', title: 'Dues & Payments', meta: 'Assessments, receipts, aging', link: '/dues', bg: 'linear-gradient(135deg,#0ea5e9,#2563eb)', icon: 'M12 3a7 7 0 0 1 7 7c0 5.25-7 11-7 11S5 15.25 5 10a7 7 0 0 1 7-7Zm0 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z' },
    { label: 'Engagement', title: 'Announcements', meta: 'Notices & events', link: '/announcements', bg: 'linear-gradient(135deg,#14b8a6,#0d9488)', icon: 'M5 4h14l-2 5h-3v8l-4-2.5V9H7L5 4Z' }
  ];
}
