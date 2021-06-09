import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbActionsModule, NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbMenuModule, NbUserModule } from '@nebular/theme';
import { FAQApi } from 'app/@core/backend/common/api/faq.api';
import { CustomFormsModule } from 'ngx-custom-validators';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { Page404adminpanelComponent } from './components/404/page404adminpanel.component';

const MODULES = [FormsModule, ReactiveFormsModule, CustomFormsModule];
const NEBULAR_MODULES = [NbLayoutModule, NbMenuModule, NbCardModule, NbUserModule, NbButtonModule, NbActionsModule, NbIconModule];
const PRIMENG_MODULES = [
  ButtonModule,
  InputTextModule,
  RadioButtonModule,
  DropdownModule,
  InputTextareaModule,
  SidebarModule,
  TableModule,
  InputNumberModule,
  SelectButtonModule,
  RippleModule,
  DialogModule,
  TabViewModule,
  ConfirmPopupModule,
  MultiSelectModule,
];
const COMPONENTS = [Page404adminpanelComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule, ...MODULES, ...NEBULAR_MODULES, ...PRIMENG_MODULES],
  exports: [...MODULES, ...COMPONENTS, ...NEBULAR_MODULES, ...PRIMENG_MODULES],
  providers: [ConfirmationService, FAQApi],
})
export class SharedAdminModule {}
