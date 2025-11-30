import { Routes } from '@angular/router';
import { AptDashboardComponent } from './features/dashboard/dashboard.component';
import { ResidentsComponent } from './features/residents/residents.component';
import { UnitsComponent } from './features/units/units.component';
import { MaintenanceComponent } from './features/maintenance/maintenance.component';
import { AmenitiesComponent } from './features/amenities/amenities.component';
import { DuesComponent } from './features/dues/dues.component';
import { AnnouncementsComponent } from './features/announcements/announcements.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: AptDashboardComponent },
  { path: 'residents', component: ResidentsComponent },
  { path: 'units', component: UnitsComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'amenities', component: AmenitiesComponent },
  { path: 'dues', component: DuesComponent },
  { path: 'announcements', component: AnnouncementsComponent },
  { path: '**', redirectTo: 'dashboard' }
];
