import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { SharedAdminModule } from '@shared';
import { ThemeModule } from 'app/@theme/theme.module';
import { AdminPanelRoutingModule } from './adminpanel-routing.module';
import { AdminPanelComponent } from './adminpanel.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ChatComponent } from './components/chat/chat.component';
import { StrategiesComponent } from './components/strategies/strategies.component';
import { ToAcceptComponent } from './components/to-accept/to-accept.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AdminPanelComponent,
    AdminDashboardComponent,
    UsersComponent,
    TransactionsComponent,
    ToAcceptComponent,
    StrategiesComponent,
    ChatComponent,
    UserDetailsComponent,
  ],
  imports: [CommonModule, AdminPanelRoutingModule, ThemeModule, SharedAdminModule, NbMenuModule],
})
export class AdminPanelModule {}
