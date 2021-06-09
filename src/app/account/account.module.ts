import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { SharedModule } from '@shared';
import { ThemeModule } from 'app/@theme/theme.module';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { UserPasswordChangeComponent } from './components/user-password-change/user-password-change.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const PRIMENG_MODULES = [InputTextModule, InputNumberModule, ButtonModule, SelectButtonModule, RippleModule];

@NgModule({
  declarations: [AccountComponent, UserProfileComponent, UserPasswordChangeComponent],
  imports: [AccountRoutingModule, ThemeModule, SharedModule, NbMenuModule, ...PRIMENG_MODULES],
})
export class AccountModule {}
