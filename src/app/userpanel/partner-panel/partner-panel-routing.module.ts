import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404dashboardComponent } from 'app/shared/components/404/page404dashboard.component';
import { PpBadgesComponent } from './components/pp-badges/pp-badges.component';
import { PpDashboardComponent } from './components/pp-dashboard/pp-dashboard.component';
import { PpPayoutsComponent } from './components/pp-payouts/pp-payouts.component';
import { PpSellHistoryComponent } from './components/pp-sell-history/pp-sell-history.component';
import { PpStructureComponent } from './components/pp-structure/pp-structure.component';
import { PartnerPanelComponent } from './partner-panel.component';

const routes: Routes = [
  {
    path: '',
    component: PartnerPanelComponent,
    children: [
      { path: '', component: PpDashboardComponent },
      { path: 'structure', component: PpStructureComponent },
      { path: 'sell-history', component: PpSellHistoryComponent },
      { path: 'payouts', component: PpPayoutsComponent },
      { path: 'badges', component: PpBadgesComponent },

      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', component: Page404dashboardComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnerPanelRoutingModule {}
