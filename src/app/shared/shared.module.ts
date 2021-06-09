import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbActionsModule, NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbSpinnerModule, NbUserModule } from '@nebular/theme';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FAQApi } from 'app/@core/backend/common/api/faq.api';
import { CustomFormsModule } from 'ngx-custom-validators';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { Page404dashboardComponent } from './components/404/page404dashboard.component';
import { NgxFilterByNumberComponent } from './components/custom-smart-table-components/filter-by-number/filter-by-number.component';
import { NgxValidationMessageComponent } from './components/validation-message/validation-message.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

const MODULES = [FormsModule, ReactiveFormsModule, CustomFormsModule];
const NEBULAR_MODULES = [NbLayoutModule, NbCardModule, NbUserModule, NbButtonModule, NbActionsModule, NbIconModule, NbSpinnerModule, InputMaskModule];
const PRIMENG_MODULES = [
  ButtonModule,
  InputTextModule,
  RadioButtonModule,
  DropdownModule,
  InputTextareaModule,
  SidebarModule,
  TableModule,
  SelectButtonModule,
];
const COMPONENTS = [NgxValidationMessageComponent, NgxFilterByNumberComponent, Page404dashboardComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    RouterModule,
    ...MODULES,
    ...NEBULAR_MODULES,
    ...PRIMENG_MODULES,

    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [...MODULES, ...COMPONENTS, ...NEBULAR_MODULES, ...PRIMENG_MODULES, TranslateModule],
  providers: [FAQApi],
})
export class SharedModule {}
