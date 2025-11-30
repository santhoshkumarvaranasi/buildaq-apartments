import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

interface WorkOrder {
  ticket: string;
  unit: string;
  category: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Open' | 'In Progress' | 'Closed';
  target: string;
}

@Component({
  selector: 'apt-maintenance',
  standalone: false,
  template: `
    <div class="page">
      <div class="hero mat-elevation-z2">
        <div class="hero-text">
          <div class="hero-icon"><svg viewBox="0 0 24 24" class="icon"><path d="M7 4h10l1 2-3 6v6H9v-6L6 6l1-2Zm5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="currentColor"/></svg></div>
          <div>
            <p class="eyebrow">Operations</p>
            <h1>Maintenance</h1>
            <p class="subtitle">Work orders, SLA, and priorities.</p>
          </div>
        </div>
        <button mat-flat-button color="accent" class="record-btn" (click)="startAdd()">
          <span class="btn-icon"><svg viewBox="0 0 24 24"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z" fill="currentColor"/></svg></span>
          Add Work Order
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
            <input matInput [(ngModel)]="search" (input)="applyFilters()" placeholder="ticket, unit, category" />
          </mat-form-field>
          <div class="chip-group">
            <div class="chip-label">Status</div>
            <mat-chip-listbox class="status-chips" [value]="statusFilter" [multiple]="false" (selectionChange)="onStatusChange($event)">
              <mat-chip-option value="all">All</mat-chip-option>
              <mat-chip-option value="Open">Open</mat-chip-option>
              <mat-chip-option value="In Progress">In Progress</mat-chip-option>
              <mat-chip-option value="Closed">Closed</mat-chip-option>
            </mat-chip-listbox>
          </div>
        </div>
      </mat-card>

      <mat-card class="table-card mat-elevation-z2">
        <div class="table-head"><div><mat-card-title>Work orders</mat-card-title><mat-card-subtitle>Filtered by status</mat-card-subtitle></div><div class="last-updated">Updated just now</div></div>
        <div class="table-wrap desktop-only">
          <table mat-table [dataSource]="dataSource" matSort class="hc-table">
            <ng-container matColumnDef="ticket"><th mat-header-cell *matHeaderCellDef mat-sort-header>Ticket</th><td mat-cell *matCellDef="let row">{{ row.ticket }}</td></ng-container>
            <ng-container matColumnDef="unit"><th mat-header-cell *matHeaderCellDef mat-sort-header>Unit</th><td mat-cell *matCellDef="let row">{{ row.unit }}</td></ng-container>
            <ng-container matColumnDef="category"><th mat-header-cell *matHeaderCellDef mat-sort-header>Category</th><td mat-cell *matCellDef="let row">{{ row.category }}</td></ng-container>
            <ng-container matColumnDef="priority"><th mat-header-cell *matHeaderCellDef mat-sort-header>Priority</th><td mat-cell *matCellDef="let row">{{ row.priority }}</td></ng-container>
            <ng-container matColumnDef="status"><th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th><td mat-cell *matCellDef="let row"><mat-chip class="status-chip" color="primary" selected>{{ row.status }}</mat-chip></td></ng-container>
            <ng-container matColumnDef="target"><th mat-header-cell *matHeaderCellDef>Target</th><td mat-cell *matCellDef="let row">{{ row.target }}</td></ng-container>
            <ng-container matColumnDef="actions"><th mat-header-cell *matHeaderCellDef></th><td mat-cell *matCellDef="let row; let i=index"><div class="action-row"><button mat-icon-button color="accent" (click)="startEdit(i)"><span class="btn-icon"><svg viewBox="0 0 24 24"><path d="M5 19h14M7 14l7.5-7.5a1.06 1.06 0 0 1 1.5 0l1 1a1.06 1.06 0 0 1 0 1.5L9.5 16.5 7 17z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span></button><button mat-icon-button color="warn" (click)="delete(i)"><span class="btn-icon"><svg viewBox="0 0 24 24"><path d="M6 7h12m-9 0v10m6-10v10M9 7l.6-2h4.8l.6 2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span></button></div></td></ng-container>
            <tr mat-header-row *matHeaderRowDef="columns"></tr>
            <tr mat-row *matRowDef="let row; columns: columns;"></tr>
            <tr class="empty-state" *matNoDataRow><td [attr.colspan]="columns.length">No work orders match your filters.</td></tr>
          </table>
          <mat-paginator [pageSize]="5" [pageSizeOptions]="[5,10,20]"></mat-paginator>
        </div>
      </mat-card>

      <mat-card class="form-card mat-elevation-z2">
        <mat-card-title>{{ editIndex===null ? 'Add Work Order' : 'Edit Work Order' }}</mat-card-title>
        <div class="form-grid">
          <mat-form-field appearance="fill"><mat-label>Ticket</mat-label><input matInput [(ngModel)]="form.ticket" /></mat-form-field>
          <mat-form-field appearance="fill"><mat-label>Unit</mat-label><input matInput [(ngModel)]="form.unit" /></mat-form-field>
          <mat-form-field appearance="fill"><mat-label>Category</mat-label><input matInput [(ngModel)]="form.category" /></mat-form-field>
          <mat-form-field appearance="fill"><mat-label>Priority</mat-label><mat-select [(ngModel)]="form.priority"><mat-option value="Low">Low</mat-option><mat-option value="Medium">Medium</mat-option><mat-option value="High">High</mat-option></mat-select></mat-form-field>
          <mat-form-field appearance="fill"><mat-label>Status</mat-label><mat-select [(ngModel)]="form.status"><mat-option value="Open">Open</mat-option><mat-option value="In Progress">In Progress</mat-option><mat-option value="Closed">Closed</mat-option></mat-select></mat-form-field>
          <mat-form-field appearance="fill"><mat-label>Target</mat-label><input matInput [(ngModel)]="form.target" /></mat-form-field>
        </div>
        <div class="form-actions"><button mat-stroked-button color="primary" (click)="save()">Save</button><button mat-button (click)="startAdd()">Cancel</button></div>
      </mat-card>
    </div>
  `,
  styles: [`:host{display:block;} .page{display:grid;gap:16px;padding:12px;} .hero{display:flex;align-items:center;justify-content:space-between;padding:18px;border-radius:14px;background:linear-gradient(120deg,#f59e0b,#f97316);color:#fff;} .hero-text{display:flex;align-items:center;gap:12px;} .hero-icon{width:54px;height:54px;border-radius:50%;background:rgba(255,255,255,0.15);display:grid;place-items:center;} .eyebrow{text-transform:uppercase;letter-spacing:.08em;font-size:12px;margin:0;} h1{margin:2px 0 4px;} .subtitle{margin:0;opacity:.9;} .record-btn{text-transform:none;display:inline-flex;align-items:center;gap:6px;} .btn-icon{display:inline-flex;width:18px;height:18px;} .summary-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;} .metric-card{display:flex;align-items:center;gap:10px;} .metric-icon{width:44px;height:44px;border-radius:10px;display:grid;place-items:center;background:linear-gradient(135deg,#f59e0b,#f97316);color:#fff;} .metric-body .metric-label{text-transform:uppercase;font-size:11px;color:#64748b;letter-spacing:.06em;margin:0;} .metric-body .metric-value{margin:0;font-size:22px;font-weight:700;} .metric-body .metric-hint{margin:0;color:#94a3b8;} .filters-card,.table-card,.form-card{padding:12px;} .filter-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;align-items:center;} .chip-group{display:grid;gap:6px;} .chip-label{font-size:12px;text-transform:uppercase;letter-spacing:.04em;color:#475569;} .table-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;} .table-wrap{background:#fff;border-radius:12px;border:1px solid #e2e8f0;overflow:hidden;} table{width:100%;} .status-chip{font-weight:600;} .form-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;} .form-actions{display:flex;gap:10px;margin-top:10px;} .action-row{display:flex;gap:6px;justify-content:flex-end;}`]
})
export class MaintenanceComponent implements AfterViewInit {
  rows: WorkOrder[] = [
    { ticket: 'WO-1023', unit: '12A', category: 'Plumbing', priority: 'High', status: 'In Progress', target: 'Today EOD' },
    { ticket: 'WO-1044', unit: '8C', category: 'HVAC', priority: 'Medium', status: 'Open', target: 'Tomorrow' },
    { ticket: 'WO-1050', unit: '5B', category: 'Paint', priority: 'Low', status: 'Closed', target: 'Completed' }
  ];
  dataSource = new MatTableDataSource<WorkOrder>(this.rows);
  columns = ['ticket','unit','category','priority','status','target','actions'];
  metrics = [
    { label:'Open', value:'0', meta:'Awaiting assignment', icon:'M7 4h10l1 2-3 6v6H9v-6L6 6l1-2Z' },
    { label:'In progress', value:'0', meta:'Technician active', icon:'M12 3v18m0 0-4-4m4 4 4-4M5 7h14' },
    { label:'Closed', value:'0', meta:'Completed', icon:'M5 13l4 4L19 7' }
  ];
  search=''; statusFilter='all'; editIndex:number|null=null;
  form: WorkOrder = { ticket:'', unit:'', category:'', priority:'Medium', status:'Open', target:'' };

  @ViewChild(MatPaginator) paginator!: MatPaginator; @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(){ this.refreshMetrics(); this.dataSource.paginator=this.paginator; this.dataSource.sort=this.sort; }

  applyFilters(){
    const term=this.search.trim().toLowerCase();
    const filtered=this.rows.filter(r=>{
      const termOk=!term||r.ticket.toLowerCase().includes(term)||r.unit.toLowerCase().includes(term)||r.category.toLowerCase().includes(term);
      const statusOk=this.statusFilter==='all'||r.status===this.statusFilter;
      return termOk&&statusOk;
    });
    this.dataSource.data=filtered; this.refreshMetrics(); if(this.paginator) this.paginator.firstPage();
  }
  clearSearch(){this.search=''; this.applyFilters();}
  onStatusChange(evt:any){const val=evt?.value??evt?.source?.value??'all'; this.statusFilter=(val||'all') as string; this.applyFilters();}

  refreshMetrics(){
    const data=this.dataSource.data;
    const open=data.filter(r=>r.status==='Open').length;
    const prog=data.filter(r=>r.status==='In Progress').length;
    const closed=data.filter(r=>r.status==='Closed').length;
    this.metrics=[
      { label:'Open', value:open.toString(), meta:'Awaiting assignment', icon:'M7 4h10l1 2-3 6v6H9v-6L6 6l1-2Z' },
      { label:'In progress', value:prog.toString(), meta:'Technician active', icon:'M12 3v18m0 0-4-4m4 4 4-4M5 7h14' },
      { label:'Closed', value:closed.toString(), meta:'Completed', icon:'M5 13l4 4L19 7' }
    ];
  }

  startAdd(){this.editIndex=null; this.form={ ticket:'', unit:'', category:'', priority:'Medium', status:'Open', target:'' };}
  startEdit(i:number){this.editIndex=i; this.form={...this.dataSource.data[i]};}
  save(){
    if(this.editIndex===null){this.rows=[...this.rows,{...this.form}];}
    else { const target=this.dataSource.data[this.editIndex]; const gi=this.rows.findIndex(r=>r.ticket===target.ticket); if(gi>=0){const upd=[...this.rows]; upd[gi]={...this.form}; this.rows=upd;} }
    this.dataSource.data=[...this.rows]; this.applyFilters(); this.startAdd();
  }
  delete(i:number){const target=this.dataSource.data[i]; this.rows=this.rows.filter(r=>r.ticket!==target.ticket); this.dataSource.data=[...this.rows]; this.applyFilters();}
}
