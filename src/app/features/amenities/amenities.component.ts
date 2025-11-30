import { Component } from '@angular/core';

interface AmenityBooking {
  amenity: string;
  date: string;
  slot: string;
  resident: string;
  status: 'Reserved' | 'Waitlist' | 'Released';
}

@Component({
  selector: 'apt-amenities',
  standalone: false,
  template: `
    <div class="page">
      <div class="hero mat-elevation-z2">
        <div class="hero-text">
          <div class="hero-icon"><svg viewBox="0 0 24 24" class="icon"><path d="M4 6h16v2H4V6Zm0 5h16v2H4v-2Zm0 5h16v2H4v-2Z" fill="currentColor"/></svg></div>
          <div>
            <p class="eyebrow">Community</p>
            <h1>Amenities</h1>
            <p class="subtitle">Bookings, waitlists, and rules.</p>
          </div>
        </div>
      </div>

      <div class="summary-grid">
        <mat-card class="metric-card mat-elevation-z2" *ngFor="let m of metrics">
          <div class="metric-icon"><svg viewBox="0 0 24 24" class="icon"><path [attr.d]="m.icon" fill="currentColor"/></svg></div>
          <div class="metric-body">
            <div class="metric-label">{{ m.label }}</div>
            <div class="metric-value">{{ m.value }}</div>
            <div class="metric-hint">{{ m.meta }}</div>
          </div>
        </mat-card>
      </div>

      <mat-card class="table-card mat-elevation-z2">
        <div class="table-head"><div><mat-card-title>Upcoming bookings</mat-card-title><mat-card-subtitle>Week to date</mat-card-subtitle></div><div class="last-updated">Updated just now</div></div>
        <table class="simple">
          <thead><tr><th>Amenity</th><th>Date</th><th>Slot</th><th>Resident</th><th>Status</th></tr></thead>
          <tbody>
            <tr *ngFor="let b of bookings">
              <td>{{ b.amenity }}</td><td>{{ b.date }}</td><td>{{ b.slot }}</td><td>{{ b.resident }}</td><td>{{ b.status }}</td>
            </tr>
          </tbody>
        </table>
      </mat-card>

      <mat-card class="table-card mat-elevation-z2">
        <mat-card-title>Rules & availability</mat-card-title>
        <ul class="bullets">
          <li>Gym: 6am - 10pm, 1-hour slots.</li>
          <li>Pool: 9am - 9pm, guest limit 2.</li>
          <li>Clubhouse: Reservation required, $100 deposit.</li>
        </ul>
      </mat-card>
    </div>
  `,
  styles: [`:host{display:block;} .page{display:grid;gap:16px;padding:12px;} .hero{display:flex;align-items:center;justify-content:space-between;padding:18px;border-radius:14px;background:linear-gradient(120deg,#ec4899,#db2777);color:#fff;} .hero-text{display:flex;align-items:center;gap:12px;} .hero-icon{width:54px;height:54px;border-radius:50%;background:rgba(255,255,255,0.15);display:grid;place-items:center;} .eyebrow{text-transform:uppercase;letter-spacing:.08em;font-size:12px;margin:0;} h1{margin:2px 0 4px;} .subtitle{margin:0;opacity:.9;} .summary-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;} .metric-card{display:flex;align-items:center;gap:10px;padding:12px;} .metric-icon{width:44px;height:44px;border-radius:10px;display:grid;place-items:center;background:linear-gradient(135deg,#ec4899,#db2777);color:#fff;} .metric-body .metric-label{text-transform:uppercase;font-size:11px;color:#64748b;letter-spacing:.06em;margin:0;} .metric-body .metric-value{margin:0;font-size:22px;font-weight:700;} .metric-body .metric-hint{margin:0;color:#94a3b8;} .table-card{padding:12px;} table.simple{width:100%;border-collapse:collapse;} table.simple th,table.simple td{padding:8px;border-bottom:1px solid #e2e8f0;text-align:left;} .bullets{margin:0; padding-left:18px;} .bullets li{margin:6px 0;}
  `]
})
export class AmenitiesComponent {
  metrics = [
    { label:'Bookings', value:'42', meta:'This week', icon:'M4 6h16v2H4V6Zm0 5h16v2H4v-2Zm0 5h16v2H4v-2Z' },
    { label:'Waitlist', value:'6', meta:'Clubhouse', icon:'M12 3v18m0 0-4-4m4 4 4-4M5 7h14' },
    { label:'Deposits held', value:'$1.4k', meta:'Clubhouse', icon:'M12 21c4.97 0 9-3.58 9-8s-4.03-8-9-8-9 3.58-9 8 4.03 8 9 8Z' }
  ];

  bookings: AmenityBooking[] = [
    { amenity: 'Clubhouse', date: '12/02', slot: '6-9pm', resident: 'Amira Patel', status: 'Reserved' },
    { amenity: 'Pool', date: '12/01', slot: '4-5pm', resident: 'John Smith', status: 'Reserved' },
    { amenity: 'Clubhouse', date: '12/03', slot: '1-3pm', resident: 'Lena Chen', status: 'Waitlist' }
  ];
}
