import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404adminpanelComponent } from 'app/shared/components/404/page404adminpanel.component';
import { ACmsComponent } from './acms.component';
import { ACmsAgreementsComponent } from './components/acms-agreements/cms-agreements.component';
import { ACmsFAQComponent } from './components/acms-faq/acms-faq.component';
import { ACmsKnowledgeComponent } from './components/acms-knowledge/acms-knowledge.component';
import { ACmsNotificationsComponent } from './components/acms-notifications/acms-notifications.component';
import { ACmsPackagesComponent } from './components/acms-packages/acms-packages.component';
import { ACmsStrategiesComponent } from './components/acms-strategies/acms-strategies.component';

const routes: Routes = [
  {
    path: '',
    component: ACmsComponent,
    children: [
      { path: 'packages', component: ACmsPackagesComponent },
      { path: 'strategies', component: ACmsStrategiesComponent },
      { path: 'agreements', component: ACmsAgreementsComponent },
      { path: 'notifications', component: ACmsNotificationsComponent },
      { path: 'knowledge', component: ACmsKnowledgeComponent },
      { path: 'faq', component: ACmsFAQComponent },

      { path: '', redirectTo: 'packages', pathMatch: 'full' },
      { path: '**', component: Page404adminpanelComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ACmsRoutingModule {}
