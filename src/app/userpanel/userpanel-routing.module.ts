import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404dashboardComponent } from 'app/shared/components/404/page404dashboard.component';
import { BuyPackageComponent } from './components/buy-package/buy-package.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FaqComponent } from './components/faq/faq.component';
import { OffersComponent } from './components/offers/offers.component';
import { PackagesComponent } from './components/packages/packages.component';
import { StrategiesReviewComponent } from './components/strategies-review/strategies-review.component';
import { StrategiesComponent } from './components/strategies/strategies.component';
import { UserPanelComponent } from './userpanel.component';

const routes: Routes = [
  {
    path: '',
    component: UserPanelComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'packages', component: PackagesComponent },
      { path: 'buy-package', component: BuyPackageComponent },
      { path: 'strategies', component: StrategiesComponent },
      { path: 'strategies-review', component: StrategiesReviewComponent },
      { path: 'offers', component: OffersComponent },
      { path: 'pp', loadChildren: () => import('./partner-panel/partner-panel.module').then(m => m.PartnerPanelModule) },
      { path: 'faq', component: FaqComponent },

      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', component: Page404dashboardComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPanelRoutingModule {}
