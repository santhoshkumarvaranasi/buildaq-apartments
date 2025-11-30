import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface ResidentSummary {
  name: string;
  unit: string;
  status: 'Owner' | 'Renter';
}

export interface UnitSummary {
  unit: string;
  status: 'Occupied' | 'Vacant' | 'Turn';
  nextAction: string;
}

export interface DashboardMetrics {
  occupancy: string;
  openTickets: number;
  duesCollected: string;
  amenitiesBooked: number;
}

@Injectable({ providedIn: 'root' })
export class ApartmentsService {
  getResidents() {
    return of<ResidentSummary[]>([
      { name: 'Amira Patel', unit: '12A', status: 'Owner' },
      { name: 'John Smith', unit: '8C', status: 'Renter' },
      { name: 'Lena Chen', unit: '3B', status: 'Renter' }
    ]);
  }

  getUnits() {
    return of<UnitSummary[]>([
      { unit: '12A', status: 'Occupied', nextAction: 'Renewal 02/15' },
      { unit: '15D', status: 'Vacant', nextAction: 'Showings open' },
      { unit: '5B', status: 'Turn', nextAction: 'Paint & clean' }
    ]);
  }

  getDashboardMetrics() {
    return of<DashboardMetrics>({
      occupancy: '94%',
      openTickets: 18,
      duesCollected: '$182k',
      amenitiesBooked: 42
    });
  }
}
