import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404adminpanelComponent } from 'app/shared/components/404/page404adminpanel.component';
import { AdminPartnerPanelComponent } from './admin-partner-panel.component';
import { AppDashboardComponent } from './components/app-dashboard/app-dashboard.component';
import { AppFreePackagesComponent } from './components/app-free-packages/app-free-packages.component';
import { AppRotatorComponent } from './components/app-rotator/app-rotator.component';
import { AppStructureComponent } from './components/app-structure/app-structure.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPartnerPanelComponent,
    children: [
      { path: '', component: AppDashboardComponent },
      { path: 'structure', component: AppStructureComponent },
      { path: 'rotator', component: AppRotatorComponent },
      { path: 'free-packages', component: AppFreePackagesComponent },

      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', component: Page404adminpanelComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPartnerPanelRoutingModule {}
