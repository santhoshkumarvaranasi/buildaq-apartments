import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

interface UnitRow {
  unit: string;
  type: string;
  status: 'Occupied' | 'Vacant' | 'Turn';
  rent: number;
  nextAction: string;
}

@Component({
  selector: 'apt-units',
  standalone: false,
  template: `
    <div class="page">
      <div class="hero mat-elevation-z2">
        <div class="hero-text">
          <div class="hero-icon"><svg viewBox="0 0 24 24" class="icon"><path d="M4 10V7l8-4 8 4v3h-2v8h-4v-5h-4v5H6v-8H4Z" fill="currentColor"/></svg></div>
          <div>
            <p class="eyebrow">Assets</p>
            <h1>Units</h1>
            <p class="subtitle">Occupancy, readiness, and rent.</p>
          </div>
        </div>
        <button mat-flat-button color="accent" class="record-btn" (click)="startAdd()">
          <span class="btn-icon"><svg viewBox="0 0 24 24"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z" fill="currentColor"/></svg></span>
          Add Unit
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
          <mat-form-field appearance="fill" class="full-width">
            <mat-label>Search</mat-label>
            <input matInput [(ngModel)]="search" (input)="applyFilters()" placeholder="unit, type, action" />
          </mat-form-field>
          <div class="chip-group">
            <div class="chip-label">Status</div>
            <mat-chip-listbox class="status-chips" [value]="statusFilter" [multiple]="false" (selectionChange)="onStatusChange($event)">
              <mat-chip-option value="all">All</mat-chip-option>
              <mat-chip-option value="Occupied">Occupied</mat-chip-option>
              <mat-chip-option value="Vacant">Vacant</mat-chip-option>
              <mat-chip-option value="Turn">Turn</mat-chip-option>
            </mat-chip-listbox>
          </div>
        </div>
      </mat-card>

      <mat-card class="table-card mat-elevation-z2">
        <div class="table-head">
          <div>
            <mat-card-title>Units</mat-card-title>
            <mat-card-subtitle>Filtered by status</mat-card-subtitle>
          </div>
          <div class="last-updated">Updated just now</div>
        </div>
        <div class="table-wrap desktop-only">
          <table mat-table [dataSource]="dataSource" matSort class="hc-table">
            <ng-container matColumnDef="unit">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Unit</th>
              <td mat-cell *matCellDef="let row">{{ row.unit }}</td>
            </ng-container>
            <ng-container matColumnDef="type">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Type</th>
              <td mat-cell *matCellDef="let row">{{ row.type }}</td>
            </ng-container>
            <ng-container matColumnDef="status">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>
              <td mat-cell *matCellDef="let row"><mat-chip class="status-chip" color="primary" selected>{{ row.status }}</mat-chip></td>
            </ng-container>
            <ng-container matColumnDef="rent">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Rent</th>
              <td mat-cell *matCellDef="let row">{{ row.rent | currency:'USD':'symbol' }}</td>
            </ng-container>
            <ng-container matColumnDef="nextAction">
              <th mat-header-cell *matHeaderCellDef>Next</th>
              <td mat-cell *matCellDef="let row">{{ row.nextAction }}</td>
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
            <tr class="empty-state" *matNoDataRow><td [attr.colspan]="columns.length">No units match your filters.</td></tr>
          </table>
          <mat-paginator [pageSize]="5" [pageSizeOptions]="[5,10,20]"></mat-paginator>
        </div>
      </mat-card>

      <mat-card class="form-card mat-elevation-z2">
        <mat-card-title>{{ editIndex === null ? 'Add Unit' : 'Edit Unit' }}</mat-card-title>
        <div class="form-grid">
          <mat-form-field appearance="fill"><mat-label>Unit</mat-label><input matInput [(ngModel)]="form.unit" /></mat-form-field>
          <mat-form-field appearance="fill"><mat-label>Type</mat-label><input matInput [(ngModel)]="form.type" /></mat-form-field>
          <mat-form-field appearance="fill"><mat-label>Status</mat-label><mat-select [(ngModel)]="form.status"><mat-option value="Occupied">Occupied</mat-option><mat-option value="Vacant">Vacant</mat-option><mat-option value="Turn">Turn</mat-option></mat-select></mat-form-field>
          <mat-form-field appearance="fill"><mat-label>Rent</mat-label><input matInput type="number" [(ngModel)]="form.rent" /></mat-form-field>
          <mat-form-field appearance="fill"><mat-label>Next Action</mat-label><input matInput [(ngModel)]="form.nextAction" /></mat-form-field>
        </div>
        <div class="form-actions"><button mat-stroked-button color="primary" (click)="save()">Save</button><button mat-button (click)="startAdd()">Cancel</button></div>
      </mat-card>
    </div>
  `,
  styles: [`
    :host{display:block;} .page{display:grid;gap:16px;padding:12px;} .hero{display:flex;align-items:center;justify-content:space-between;padding:18px;border-radius:14px;background:linear-gradient(120deg,#0ea5e9,#2563eb);color:#fff;} .hero-text{display:flex;align-items:center;gap:12px;} .hero-icon{width:54px;height:54px;border-radius:50%;background:rgba(255,255,255,0.15);display:grid;place-items:center;} .eyebrow{text-transform:uppercase;letter-spacing:.08em;font-size:12px;margin:0;} h1{margin:2px 0 4px;} .subtitle{margin:0;opacity:.9;} .record-btn{text-transform:none;display:inline-flex;align-items:center;gap:6px;} .btn-icon{display:inline-flex;width:18px;height:18px;} .summary-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;} .metric-card{display:flex;align-items:center;gap:10px;} .metric-icon{width:44px;height:44px;border-radius:10px;display:grid;place-items:center;background:linear-gradient(135deg,#2563eb,#1d4ed8);color:#fff;} .metric-body .metric-label{text-transform:uppercase;font-size:11px;color:#64748b;letter-spacing:.06em;margin:0;} .metric-body .metric-value{margin:0;font-size:22px;font-weight:700;} .metric-body .metric-hint{margin:0;color:#94a3b8;} .filters-card,.table-card,.form-card{padding:12px;} .filter-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;align-items:center;} .chip-group{display:grid;gap:6px;} .chip-label{font-size:12px;text-transform:uppercase;letter-spacing:.04em;color:#475569;} .table-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;} .table-wrap{background:#fff;border-radius:12px;border:1px solid #e2e8f0;overflow:hidden;} table{width:100%;} .cell-title{font-weight:600;} .cell-meta{color:#94a3b8;font-size:12px;} .status-chip{font-weight:600;} .form-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;} .form-actions{display:flex;gap:10px;margin-top:10px;} .action-row{display:flex;gap:6px;justify-content:flex-end;}
  `]
})
export class UnitsComponent implements AfterViewInit {
  rows: UnitRow[] = [
    { unit: '12A', type: '2BR', status: 'Occupied', rent: 2200, nextAction: 'Renewal 02/15' },
    { unit: '8C', type: '1BR', status: 'Occupied', rent: 1800, nextAction: 'Notice to vacate 12/31' },
    { unit: '15D', type: 'Studio', status: 'Vacant', rent: 1500, nextAction: 'Ready - showings' },
    { unit: '5B', type: '2BR', status: 'Turn', rent: 2100, nextAction: 'Paint & clean' }
  ];
  dataSource = new MatTableDataSource<UnitRow>(this.rows);
  columns = ['unit','type','status','rent','nextAction','actions'];
  metrics = [
    { label: 'Total units', value: '0', meta: 'All', icon: 'M4 10V7l8-4 8 4v3h-2v8h-4v-5h-4v5H6v-8H4Z' },
    { label: 'Vacant', value: '0', meta: 'Lease ready', icon: 'M5 4h14l-2 5H7z' },
    { label: 'In turn', value: '0', meta: 'Work in progress', icon: 'M7 4h10l1 2-3 6v6H9v-6L6 6l1-2Z' }
  ];

  search=''; statusFilter='all'; editIndex:number|null=null;
  form: UnitRow = { unit:'', type:'', status:'Vacant', rent:0, nextAction:'' };

  @ViewChild(MatPaginator) paginator!: MatPaginator; @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void { this.refreshMetrics(); this.dataSource.paginator=this.paginator; this.dataSource.sort=this.sort; }

  applyFilters(): void {
    const term=this.search.trim().toLowerCase();
    const filtered=this.rows.filter(r=>{
      const termOk=!term||r.unit.toLowerCase().includes(term)||r.type.toLowerCase().includes(term)||r.nextAction.toLowerCase().includes(term);
      const statusOk=this.statusFilter==='all'||r.status===this.statusFilter;
      return termOk&&statusOk;
    });
    this.dataSource.data=filtered; this.refreshMetrics(); if(this.paginator) this.paginator.firstPage();
  }
  clearSearch(){this.search=''; this.applyFilters();}
  onStatusChange(evt:any){const val=evt?.value??evt?.source?.value??'all'; this.statusFilter=(val||'all') as string; this.applyFilters();}

  refreshMetrics(){
    const data=this.dataSource.data;
    const vacant=data.filter(r=>r.status==='Vacant').length;
    const turn=data.filter(r=>r.status==='Turn').length;
    this.metrics=[
      { label:'Total units', value:data.length.toString(), meta:'All', icon:'M4 10V7l8-4 8 4v3h-2v8h-4v-5h-4v5H6v-8H4Z' },
      { label:'Vacant', value:vacant.toString(), meta:'Lease ready', icon:'M5 4h14l-2 5H7z' },
      { label:'In turn', value:turn.toString(), meta:'Work in progress', icon:'M7 4h10l1 2-3 6v6H9v-6L6 6l1-2Z' }
    ];
  }

  startAdd(){this.editIndex=null; this.form={unit:'',type:'',status:'Vacant',rent:0,nextAction:''};}
  startEdit(i:number){this.editIndex=i; this.form={...this.dataSource.data[i]};}
  save(){
    if(this.editIndex===null){this.rows=[...this.rows,{...this.form}];}
    else{const target=this.dataSource.data[this.editIndex]; const gi=this.rows.findIndex(r=>r.unit===target.unit); if(gi>=0){const upd=[...this.rows]; upd[gi]={...this.form}; this.rows=upd;}}
    this.dataSource.data=[...this.rows]; this.applyFilters(); this.startAdd();
  }
  delete(i:number){const target=this.dataSource.data[i]; this.rows=this.rows.filter(r=>r.unit!==target.unit); this.dataSource.data=[...this.rows]; this.applyFilters();}
}
