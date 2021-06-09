import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedAdminModule } from '@shared';
import { FAQApi } from 'app/@core/backend/common/api/faq.api';
import { ThemeModule } from 'app/@theme/theme.module';
import { EditorModule } from 'primeng/editor';
import { ACmsRoutingModule } from './acms-routing.module';
import { ACmsComponent } from './acms.component';
import { ACmsAgreementsComponent } from './components/acms-agreements/cms-agreements.component';
import { ACmsFAQComponent } from './components/acms-faq/acms-faq.component';
import { ACmsKnowledgeComponent } from './components/acms-knowledge/acms-knowledge.component';
import { ACmsNotificationsComponent } from './components/acms-notifications/acms-notifications.component';
import { ACmsPackagesComponent } from './components/acms-packages/acms-packages.component';
import { ACmsStrategiesComponent } from './components/acms-strategies/acms-strategies.component';

@NgModule({
  declarations: [
    ACmsComponent,
    ACmsPackagesComponent,
    ACmsStrategiesComponent,
    ACmsAgreementsComponent,
    ACmsNotificationsComponent,
    ACmsKnowledgeComponent,
    ACmsFAQComponent,
  ],
  imports: [RouterModule, CommonModule, ACmsRoutingModule, ReactiveFormsModule, FormsModule, ThemeModule, SharedAdminModule, EditorModule],
  providers: [FAQApi],
})
export class ACmsModule {}
