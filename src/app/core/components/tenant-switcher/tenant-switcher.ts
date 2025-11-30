import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TenantService } from '../../services/tenant.service';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-tenant-switcher',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModule],
  templateUrl: './tenant-switcher.html',
  styleUrls: ['./tenant-switcher.scss']
})
export class TenantSwitcherComponent {
  plans = ['free', 'basic', 'premium', 'enterprise'] as const;
  currentPlan: string = 'enterprise';
  features: any = {};

  constructor(public tenant: TenantService) {
    const t = this.tenant.getCurrentTenant();
    this.currentPlan = t?.subscription?.plan ?? 'enterprise';
    this.features = Object.assign({}, t?.features || {});
  }

  setPlan(plan: any) {
    this.currentPlan = plan;
    this.tenant.setPlan(plan);
    const t = this.tenant.getCurrentTenant();
    this.features = Object.assign({}, t?.features || {});
  }

  toggleFeature(key: string) {
    this.features[key] = !this.features[key];
    const partial: any = {};
    partial[key] = this.features[key];
    this.tenant.updateFeatures(partial);
  }

  get keys() {
    return Object.keys(this.features || {});
  }
}
