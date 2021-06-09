import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedAdminModule } from '@shared';
import { ThemeModule } from 'app/@theme/theme.module';
import { AdminPartnerPanelRoutingModule } from './admin-partner-panel-routing.module';
import { AdminPartnerPanelComponent } from './admin-partner-panel.component';
import { AppDashboardComponent } from './components/app-dashboard/app-dashboard.component';
import { AppFreePackagesComponent } from './components/app-free-packages/app-free-packages.component';
import { AppRotatorComponent } from './components/app-rotator/app-rotator.component';
import { AppStructureComponent } from './components/app-structure/app-structure.component';

@NgModule({
  declarations: [AdminPartnerPanelComponent, AppDashboardComponent, AppStructureComponent, AppRotatorComponent, AppFreePackagesComponent],
  imports: [CommonModule, AdminPartnerPanelRoutingModule, ThemeModule, SharedAdminModule],
})
export class AdminPartnerPanelModule {}
