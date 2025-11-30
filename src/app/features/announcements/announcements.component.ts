import { Component } from '@angular/core';

interface Announcement {
  title: string;
  date: string;
  body: string;
}

@Component({
  selector: 'apt-announcements',
  standalone: false,
  template: `
    <div class="page">
      <div class="hero mat-elevation-z2">
        <div>
          <p class="eyebrow">Engagement</p>
          <h1>Announcements</h1>
          <p class="subtitle">Community updates and events.</p>
        </div>
      </div>

      <mat-card class="announcement" *ngFor="let a of announcements">
        <div class="title-row">
          <div>
            <div class="label">{{ a.date }}</div>
            <div class="title">{{ a.title }}</div>
          </div>
          <button mat-stroked-button color="primary">Send</button>
        </div>
        <p class="body">{{ a.body }}</p>
      </mat-card>
    </div>
  `,
  styles: [`:host{display:block;} .page{display:grid;gap:12px;padding:12px;} .hero{padding:16px;border-radius:12px;background:linear-gradient(120deg,#14b8a6,#0d9488);color:#fff;} .eyebrow{text-transform:uppercase;letter-spacing:.08em;font-size:12px;margin:0;} h1{margin:2px 0 4px;} .subtitle{margin:0;} .announcement{padding:14px;} .title-row{display:flex;align-items:center;justify-content:space-between;gap:8px;} .label{text-transform:uppercase;font-size:11px;color:#64748b;} .title{font-size:18px;font-weight:700;} .body{margin:8px 0 0; color:#475569;} `]
})
export class AnnouncementsComponent {
  announcements: Announcement[] = [
    { title: 'Pool maintenance on Friday', date: 'Nov 30', body: 'Pool closed 8am-12pm for cleaning. Please plan accordingly.' },
    { title: 'Holiday party RSVP', date: 'Dec 05', body: 'Join us at the clubhouse Dec 20th 6-9pm. RSVP by Dec 10th.' },
    { title: 'Parking reminders', date: 'Dec 08', body: 'Guest passes required after 6pm. Towing enforced in fire lanes.' }
  ];
}
