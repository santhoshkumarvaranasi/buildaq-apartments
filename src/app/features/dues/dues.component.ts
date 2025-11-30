import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

interface DueRow {
  resident: string;
  unit: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Late';
  method: 'ACH' | 'Card' | 'Check';
  posted: string;
}

@Component({
  selector: 'apt-dues',
  standalone: false,
  template: `
    <div class="page">
      <div class="hero mat-elevation-z2">
        <div class="hero-text">
          <div class="hero-icon"><svg viewBox="0 0 24 24" class="icon"><path d="M12 3a7 7 0 0 1 7 7c0 5.25-7 11-7 11S5 15.25 5 10a7 7 0 0 1 7-7Zm0 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" fill="currentColor"/></svg></div>
          <div>
            <p class="eyebrow">Finance</p>
            <h1>Dues & Payments</h1>
            <p class="subtitle">Assessments, receipts, and aging.</p>
          </div>
        </div>
        <button mat-flat-button color="accent" class="record-btn" (click)="startAdd()">
          <span class="btn-icon"><svg viewBox="0 0 24 24"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z" fill="currentColor"/></svg></span>
          Add Payment
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
            <input matInput [(ngModel)]="search" (input)="applyFilters()" placeholder="resident, unit" />
          </mat-form-field>
          <div class="chip-group">
            <div class="chip-label">Status</div>
            <mat-chip-listbox class="status-chips" [value]="statusFilter" [multiple]="false" (selectionChange)="onStatusChange($event)">
              <mat-chip-option value="all">All</mat-chip-option>
              <mat-chip-option value="Paid">Paid</mat-chip-option>
              <mat-chip-option value="Pending">Pending</mat-chip-option>
              <mat-chip-option value="Late">Late</mat-chip-option>
            </mat-chip-listbox>
          </div>
          <mat-form-field appearance="fill">
            <mat-label>Method</mat-label>
            <mat-select [(ngModel)]="methodFilter" (selectionChange)="applyFilters()">
              <mat-option value="">All</mat-option>
              <mat-option value="ACH">ACH</mat-option>
              <mat-option value="Card">Card</mat-option>
              <mat-option value="Check">Check</mat-option>
            </mat-select>
          </mat-form-field>
        </div>
      </mat-card>

      <mat-card class="table-card mat-elevation-z2">
        <div class="table-head"><div><mat-card-title>Dues & payments</mat-card-title><mat-card-subtitle>Filtered by status</mat-card-subtitle></div><div class="last-updated">Updated just now</div></div>
        <div class="table-wrap desktop-only">
          <table mat-table [dataSource]="dataSource" matSort class="hc-table">
            <ng-container matColumnDef="resident"><th mat-header-cell *matHeaderCellDef mat-sort-header>Resident</th><td mat-cell *matCellDef="let row"><div class="cell-title">{{ row.resident }}</div><div class="cell-meta">Unit {{ row.unit }}</div></td></ng-container>
            <ng-container matColumnDef="amount"><th mat-header-cell *matHeaderCellDef mat-sort-header>Amount</th><td mat-cell *matCellDef="let row">{{ row.amount | currency:'USD':'symbol' }}</td></ng-container>
            <ng-container matColumnDef="status"><th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th><td mat-cell *matCellDef="let row"><mat-chip class="status-chip" color="primary" selected>{{ row.status }}</mat-chip></td></ng-container>
            <ng-container matColumnDef="method"><th mat-header-cell *matHeaderCellDef mat-sort-header>Method</th><td mat-cell *matCellDef="let row">{{ row.method }}</td></ng-container>
            <ng-container matColumnDef="posted"><th mat-header-cell *matHeaderCellDef mat-sort-header>Posted</th><td mat-cell *matCellDef="let row">{{ row.posted }}</td></ng-container>
            <ng-container matColumnDef="actions"><th mat-header-cell *matHeaderCellDef></th><td mat-cell *matCellDef="let row; let i=index"><div class="action-row"><button mat-icon-button color="accent" (click)="startEdit(i)"><span class="btn-icon"><svg viewBox="0 0 24 24"><path d="M5 19h14M7 14l7.5-7.5a1.06 1.06 0 0 1 1.5 0l1 1a1.06 1.06 0 0 1 0 1.5L9.5 16.5 7 17z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span></button><button mat-icon-button color="warn" (click)="delete(i)"><span class="btn-icon"><svg viewBox="0 0 24 24"><path d="M6 7h12m-9 0v10m6-10v10M9 7l.6-2h4.8l.6 2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span></button></div></td></ng-container>
            <tr mat-header-row *matHeaderRowDef="columns"></tr>
            <tr mat-row *matRowDef="let row; columns: columns;"></tr>
            <tr class="empty-state" *matNoDataRow><td [attr.colspan]="columns.length">No payments match your filters.</td></tr>
          </table>
          <mat-paginator [pageSize]="5" [pageSizeOptions]="[5,10,20]"></mat-paginator>
        </div>
      </mat-card>

      <mat-card class="form-card mat-elevation-z2">
        <mat-card-title>{{ editIndex===null ? 'Add Payment' : 'Edit Payment' }}</mat-card-title>
        <div class="form-grid">
          <mat-form-field appearance="fill"><mat-label>Resident</mat-label><input matInput [(ngModel)]="form.resident" /></mat-form-field>
          <mat-form-field appearance="fill"><mat-label>Unit</mat-label><input matInput [(ngModel)]="form.unit" /></mat-form-field>
          <mat-form-field appearance="fill"><mat-label>Amount</mat-label><input matInput type="number" [(ngModel)]="form.amount" /></mat-form-field>
          <mat-form-field appearance="fill"><mat-label>Status</mat-label><mat-select [(ngModel)]="form.status"><mat-option value="Paid">Paid</mat-option><mat-option value="Pending">Pending</mat-option><mat-option value="Late">Late</mat-option></mat-select></mat-form-field>
          <mat-form-field appearance="fill"><mat-label>Method</mat-label><mat-select [(ngModel)]="form.method"><mat-option value="ACH">ACH</mat-option><mat-option value="Card">Card</mat-option><mat-option value="Check">Check</mat-option></mat-select></mat-form-field>
          <mat-form-field appearance="fill"><mat-label>Posted</mat-label><input matInput [(ngModel)]="form.posted" placeholder="MM/DD" /></mat-form-field>
        </div>
        <div class="form-actions"><button mat-stroked-button color="primary" (click)="save()">Save</button><button mat-button (click)="startAdd()">Cancel</button></div>
      </mat-card>
    </div>
  `,
  styles: [`:host{display:block;} .page{display:grid;gap:16px;padding:12px;} .hero{display:flex;align-items:center;justify-content:space-between;padding:18px;border-radius:14px;background:linear-gradient(120deg,#0ea5e9,#2563eb);color:#fff;} .hero-text{display:flex;align-items:center;gap:12px;} .hero-icon{width:54px;height:54px;border-radius:50%;background:rgba(255,255,255,0.15);display:grid;place-items:center;} .eyebrow{text-transform:uppercase;letter-spacing:.08em;font-size:12px;margin:0;} h1{margin:2px 0 4px;} .subtitle{margin:0;opacity:.9;} .record-btn{text-transform:none;display:inline-flex;align-items:center;gap:6px;} .btn-icon{display:inline-flex;width:18px;height:18px;} .summary-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;} .metric-card{display:flex;align-items:center;gap:10px;} .metric-icon{width:44px;height:44px;border-radius:10px;display:grid;place-items:center;background:linear-gradient(135deg,#0ea5e9,#2563eb);color:#fff;} .metric-body .metric-label{text-transform:uppercase;font-size:11px;color:#64748b;letter-spacing:.06em;margin:0;} .metric-body .metric-value{margin:0;font-size:22px;font-weight:700;} .metric-body .metric-hint{margin:0;color:#94a3b8;} .filters-card,.table-card,.form-card{padding:12px;} .filter-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;align-items:center;} .chip-group{display:grid;gap:6px;} .chip-label{font-size:12px;text-transform:uppercase;letter-spacing:.04em;color:#475569;} .table-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;} .table-wrap{background:#fff;border-radius:12px;border:1px solid #e2e8f0;overflow:hidden;} table{width:100%;} .status-chip{font-weight:600;} .form-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;} .form-actions{display:flex;gap:10px;margin-top:10px;} .action-row{display:flex;gap:6px;justify-content:flex-end;}`]
})
export class DuesComponent implements AfterViewInit {
  rows: DueRow[] = [
    { resident: 'Amira Patel', unit: '12A', amount: 520, status: 'Paid', method: 'ACH', posted: '11/01' },
    { resident: 'John Smith', unit: '8C', amount: 520, status: 'Pending', method: 'Card', posted: 'Due 12/01' },
    { resident: 'Lena Chen', unit: '3B', amount: 520, status: 'Late', method: 'Check', posted: '10/01' }
  ];
  dataSource = new MatTableDataSource<DueRow>(this.rows);
  columns = ['resident','amount','status','method','posted','actions'];
  metrics = [
    { label:'Collected', value:'$0', meta:'This month', icon:'M12 3a7 7 0 0 1 7 7c0 5.25-7 11-7 11S5 15.25 5 10a7 7 0 0 1 7-7Z' },
    { label:'Pending', value:'$0', meta:'Awaiting', icon:'M12 3v18m0 0-4-4m4 4 4-4M5 7h14' },
    { label:'Late', value:'$0', meta:'Follow up', icon:'M12 5.5 5.5 19h13Z' }
  ];

  search=''; statusFilter='all'; methodFilter=''; editIndex:number|null=null;
  form: DueRow = { resident:'', unit:'', amount:0, status:'Pending', method:'ACH', posted:'' };

  @ViewChild(MatPaginator) paginator!: MatPaginator; @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(){ this.refreshMetrics(); this.dataSource.paginator=this.paginator; this.dataSource.sort=this.sort; }

  applyFilters(){
    const term=this.search.trim().toLowerCase();
    const filtered=this.rows.filter(r=>{
      const termOk=!term||r.resident.toLowerCase().includes(term)||r.unit.toLowerCase().includes(term);
      const statusOk=this.statusFilter==='all'||r.status===this.statusFilter;
      const methodOk=!this.methodFilter||r.method===this.methodFilter;
      return termOk&&statusOk&&methodOk;
    });
    this.dataSource.data=filtered; this.refreshMetrics(); if(this.paginator) this.paginator.firstPage();
  }
  clearSearch(){this.search=''; this.applyFilters();}
  onStatusChange(evt:any){const val=evt?.value??evt?.source?.value??'all'; this.statusFilter=(val||'all') as string; this.applyFilters();}

  refreshMetrics(){
    const data=this.dataSource.data;
    const collected=data.filter(r=>r.status==='Paid').reduce((s,r)=>s+r.amount,0);
    const pending=data.filter(r=>r.status==='Pending').reduce((s,r)=>s+r.amount,0);
    const late=data.filter(r=>r.status==='Late').reduce((s,r)=>s+r.amount,0);
    this.metrics=[
      { label:'Collected', value:this.format(collected), meta:'This month', icon:'M12 3a7 7 0 0 1 7 7c0 5.25-7 11-7 11S5 15.25 5 10a7 7 0 0 1 7-7Z' },
      { label:'Pending', value:this.format(pending), meta:'Awaiting', icon:'M12 3v18m0 0-4-4m4 4 4-4M5 7h14' },
      { label:'Late', value:this.format(late), meta:'Follow up', icon:'M12 5.5 5.5 19h13Z' }
    ];
  }
  format(v:number){return v.toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0});}

  startAdd(){this.editIndex=null; this.form={resident:'',unit:'',amount:0,status:'Pending',method:'ACH',posted:''};}
  startEdit(i:number){this.editIndex=i; this.form={...this.dataSource.data[i]};}
  save(){
    if(this.editIndex===null){this.rows=[...this.rows,{...this.form}];}
    else { const target=this.dataSource.data[this.editIndex]; const gi=this.rows.findIndex(r=>r.resident===target.resident&&r.unit===target.unit); if(gi>=0){const upd=[...this.rows]; upd[gi]={...this.form}; this.rows=upd;} }
    this.dataSource.data=[...this.rows]; this.applyFilters(); this.startAdd();
  }
  delete(i:number){const target=this.dataSource.data[i]; this.rows=this.rows.filter(r=>!(r.resident===target.resident&&r.unit===target.unit)); this.dataSource.data=[...this.rows]; this.applyFilters();}
}
