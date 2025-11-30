import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

interface ResidentRow {
  name: string;
  unit: string;
  vehicles: number;
  status: 'Owner' | 'Renter' | 'Vacant';
  email: string;
}

@Component({
  selector: 'apt-residents',
  standalone: false,
  template: `
    <div class="page">
      <div class="hero mat-elevation-z2">
        <div class="hero-text">
          <div class="hero-icon">
            <svg viewBox="0 0 24 24" class="icon"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm-7 9v-1a6 6 0 0 1 12 0v1Z" fill="currentColor"/></svg>
          </div>
          <div>
            <p class="eyebrow">Directory</p>
            <h1>Residents</h1>
            <p class="subtitle">Contacts, units, vehicles, and status.</p>
          </div>
        </div>
        <button mat-flat-button color="accent" class="record-btn" (click)="startAdd()">
          <span class="btn-icon"><svg viewBox="0 0 24 24"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z" fill="currentColor"/></svg></span>
          Add Resident
        </button>
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

      <mat-card class="filters-card mat-elevation-z2">
        <div class="filter-grid compact">
          <mat-form-field appearance="fill" class="full-width search-field">
            <mat-label>Search</mat-label>
            <input matInput [(ngModel)]="search" (input)="applyFilters()" placeholder="name, email, unit" />
            <button *ngIf="search" matSuffix mat-icon-button aria-label="Clear" (click)="clearSearch()">
              <svg class="icon" viewBox="0 0 24 24"><path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L12 13.41l-4.89 4.9-1.41-1.42L10.59 12 4.29 5.71 5.7 4.29 12 10.59l6.29-6.3z" fill="currentColor"/></svg>
            </button>
          </mat-form-field>

          <div class="chip-group">
            <div class="chip-label">Status</div>
            <mat-chip-listbox class="status-chips" [value]="statusFilter" [multiple]="false" (selectionChange)="onStatusChange($event)">
              <mat-chip-option value="all">All</mat-chip-option>
              <mat-chip-option value="Owner">Owner</mat-chip-option>
              <mat-chip-option value="Renter">Renter</mat-chip-option>
              <mat-chip-option value="Vacant">Vacant</mat-chip-option>
            </mat-chip-listbox>
          </div>
        </div>
      </mat-card>

      <mat-card class="table-card mat-elevation-z2">
        <div class="table-head">
          <div>
            <mat-card-title>Resident directory</mat-card-title>
            <mat-card-subtitle>Filtered by status</mat-card-subtitle>
          </div>
          <div class="last-updated">Updated just now</div>
        </div>
        <div class="table-wrap desktop-only">
          <table mat-table [dataSource]="dataSource" matSort class="hc-table">
            <ng-container matColumnDef="name">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>
              <td mat-cell *matCellDef="let row">
                <div class="cell-title">{{ row.name }}</div>
                <div class="cell-meta">{{ row.email }}</div>
              </td>
            </ng-container>
            <ng-container matColumnDef="unit">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Unit</th>
              <td mat-cell *matCellDef="let row">{{ row.unit }}</td>
            </ng-container>
            <ng-container matColumnDef="status">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>
              <td mat-cell *matCellDef="let row"><mat-chip class="status-chip" color="primary" selected>{{ row.status }}</mat-chip></td>
            </ng-container>
            <ng-container matColumnDef="vehicles">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Vehicles</th>
              <td mat-cell *matCellDef="let row">{{ row.vehicles }}</td>
            </ng-container>
            <ng-container matColumnDef="actions">
              <th mat-header-cell *matHeaderCellDef></th>
              <td mat-cell *matCellDef="let row; let i=index">
                <div class="action-row">
                  <button mat-icon-button color="accent" (click)="startEdit(i)"><span class="btn-icon"><svg viewBox="0 0 24 24"><path d="M5 19h14M7 14l7.5-7.5a1.06 1.06 0 0 1 1.5 0l1 1a1.06 1.06 0 0 1 0 1.5L9.5 16.5 7 17z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span></button>
                  <button mat-icon-button color="warn" (click)="delete(i)"><span class="btn-icon"><svg viewBox="0 0 24 24"><path d="M6 7h12m-9 0v10m6-10v10M9 7l.6-2h4.8l.6 2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span></button>
                </div>
              </td>
            </ng-container>
            <tr mat-header-row *matHeaderRowDef="columns"></tr>
            <tr mat-row *matRowDef="let row; columns: columns;"></tr>
            <tr class="empty-state" *matNoDataRow>
              <td [attr.colspan]="columns.length">No residents match your filters.</td>
            </tr>
          </table>
          <mat-paginator [pageSize]="5" [pageSizeOptions]="[5,10,20]"></mat-paginator>
        </div>
      </mat-card>

      <mat-card class="form-card mat-elevation-z2">
        <mat-card-title>{{ editIndex === null ? 'Add Resident' : 'Edit Resident' }}</mat-card-title>
        <div class="form-grid">
          <mat-form-field appearance="fill">
            <mat-label>Name</mat-label>
            <input matInput [(ngModel)]="form.name" />
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Unit</mat-label>
            <input matInput [(ngModel)]="form.unit" />
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Email</mat-label>
            <input matInput [(ngModel)]="form.email" />
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Vehicles</mat-label>
            <input matInput type="number" [(ngModel)]="form.vehicles" />
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Status</mat-label>
            <mat-select [(ngModel)]="form.status">
              <mat-option value="Owner">Owner</mat-option>
              <mat-option value="Renter">Renter</mat-option>
              <mat-option value="Vacant">Vacant</mat-option>
            </mat-select>
          </mat-form-field>
        </div>
        <div class="form-actions">
          <button mat-stroked-button color="primary" (click)="save()">Save</button>
          <button mat-button (click)="startAdd()">Cancel</button>
        </div>
      </mat-card>
    </div>
  `,
  styles: [`
    :host{display:block;} .page{display:grid;gap:16px;padding:12px;} .hero{display:flex;align-items:center;justify-content:space-between;padding:18px;border-radius:14px;background:linear-gradient(120deg,#1d4ed8,#60a5fa);color:#fff;} .hero-text{display:flex;align-items:center;gap:12px;} .hero-icon{width:54px;height:54px;border-radius:50%;background:rgba(255,255,255,0.15);display:grid;place-items:center;} .eyebrow{text-transform:uppercase;letter-spacing:.08em;font-size:12px;margin:0;} h1{margin:2px 0 4px;} .subtitle{margin:0;opacity:.9;} .record-btn{text-transform:none;display:inline-flex;align-items:center;gap:6px;} .btn-icon{display:inline-flex;width:18px;height:18px;} .summary-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;} .metric-card{display:flex;align-items:center;gap:10px;} .metric-icon{width:44px;height:44px;border-radius:10px;display:grid;place-items:center;background:linear-gradient(135deg,#1d4ed8,#3b82f6);color:#fff;} .metric-body .metric-label{text-transform:uppercase;font-size:11px;color:#64748b;letter-spacing:.06em;margin:0;} .metric-body .metric-value{margin:0;font-size:22px;font-weight:700;} .metric-body .metric-hint{margin:0;color:#94a3b8;} .filters-card,.table-card,.form-card{padding:12px;} .filter-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;align-items:center;} .chip-group{display:grid;gap:6px;} .chip-label{font-size:12px;text-transform:uppercase;letter-spacing:.04em;color:#475569;} .table-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;} .last-updated{color:#94a3b8;font-size:12px;} .table-wrap{background:#fff;border-radius:12px;border:1px solid #e2e8f0;overflow:hidden;} table{width:100%;} .cell-title{font-weight:600;} .cell-meta{color:#94a3b8;font-size:12px;} .status-chip{font-weight:600;} .form-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;} .form-actions{display:flex;gap:10px;margin-top:10px;} .action-row{display:flex;gap:6px;justify-content:flex-end;}
  `]
})
export class ResidentsComponent implements AfterViewInit {
  rows: ResidentRow[] = [
    { name: 'Amira Patel', unit: '12A', vehicles: 1, status: 'Owner', email: 'amira@example.com' },
    { name: 'John Smith', unit: '8C', vehicles: 2, status: 'Renter', email: 'john.smith@example.com' },
    { name: 'Lena Chen', unit: '3B', vehicles: 1, status: 'Renter', email: 'lena@example.com' },
    { name: 'Vacant', unit: '15D', vehicles: 0, status: 'Vacant', email: '' }
  ];
  dataSource = new MatTableDataSource<ResidentRow>(this.rows);
  columns = ['name','unit','status','vehicles','actions'];
  metrics = [
    { label: 'Residents', value: '0', meta: 'Total', icon: 'M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm-7 9v-1a6 6 0 0 1 12 0v1Z' },
    { label: 'Owners', value: '0', meta: 'Owner occupied', icon: 'M4 6h16v12H4z' },
    { label: 'Vacant', value: '0', meta: 'Ready to lease', icon: 'M5 4h14l-2 5H7z' }
  ];

  search = '';
  statusFilter = 'all';
  editIndex: number | null = null;
  form: ResidentRow = { name: '', unit: '', vehicles: 0, status: 'Owner', email: '' };

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.refreshMetrics();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilters(): void {
    const term = this.search.trim().toLowerCase();
    const filtered = this.rows.filter(r => {
      const matchesTerm = !term || r.name.toLowerCase().includes(term) || r.email.toLowerCase().includes(term) || r.unit.toLowerCase().includes(term);
      const matchesStatus = this.statusFilter === 'all' || r.status === this.statusFilter;
      return matchesTerm && matchesStatus;
    });
    this.dataSource.data = filtered;
    this.refreshMetrics();
    if (this.paginator) this.paginator.firstPage();
  }

  clearSearch(): void { this.search=''; this.applyFilters(); }

  onStatusChange(evt: any) {
    const val = evt?.value ?? evt?.source?.value ?? 'all';
    this.statusFilter = (val || 'all') as string;
    this.applyFilters();
  }

  refreshMetrics(): void {
    const data = this.dataSource.data;
    const owners = data.filter(r => r.status === 'Owner').length;
    const vacant = data.filter(r => r.status === 'Vacant').length;
    this.metrics = [
      { label: 'Residents', value: data.length.toString(), meta: 'Total', icon: 'M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm-7 9v-1a6 6 0 0 1 12 0v1Z' },
      { label: 'Owners', value: owners.toString(), meta: 'Owner occupied', icon: 'M4 6h16v12H4z' },
      { label: 'Vacant', value: vacant.toString(), meta: 'Ready to lease', icon: 'M5 4h14l-2 5H7z' }
    ];
  }

  startAdd(): void {
    this.editIndex = null;
    this.form = { name: '', unit: '', vehicles: 0, status: 'Owner', email: '' };
  }

  startEdit(index: number): void {
    this.editIndex = index;
    this.form = { ...this.dataSource.data[index] };
  }

  save(): void {
    if (this.editIndex === null) {
      this.rows = [...this.rows, { ...this.form }];
    } else {
      const target = this.dataSource.data[this.editIndex];
      const globalIndex = this.rows.findIndex(r => r.name === target.name && r.unit === target.unit);
      if (globalIndex >= 0) {
        const updated = [...this.rows];
        updated[globalIndex] = { ...this.form };
        this.rows = updated;
      }
    }
    this.dataSource.data = [...this.rows];
    this.applyFilters();
    this.startAdd();
  }

  delete(index: number): void {
    const target = this.dataSource.data[index];
    this.rows = this.rows.filter(r => !(r.name === target.name && r.unit === target.unit));
    this.dataSource.data = [...this.rows];
    this.applyFilters();
  }
}
