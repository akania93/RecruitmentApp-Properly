import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { SharedModule } from 'app/shared/shared.module';
import { AccordionModule } from 'primeng/accordion';
import { BuyPackageComponent } from './components/buy-package/buy-package.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FaqComponent } from './components/faq/faq.component';
import { OffersComponent } from './components/offers/offers.component';
import { PackagesComponent } from './components/packages/packages.component';
import { StrategiesReviewComponent } from './components/strategies-review/strategies-review.component';
import { StrategiesComponent } from './components/strategies/strategies.component';
import { UserPanelRoutingModule } from './userpanel-routing.module';
import { UserPanelComponent } from './userpanel.component';

@NgModule({
  declarations: [
    UserPanelComponent,
    PackagesComponent,
    DashboardComponent,
    BuyPackageComponent,
    StrategiesComponent,
    StrategiesReviewComponent,
    OffersComponent,
    FaqComponent,
  ],
  imports: [UserPanelRoutingModule, ThemeModule, SharedModule, NbMenuModule, AccordionModule],
})
export class UserPanelModule {}
