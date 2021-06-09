import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404adminpanelComponent } from 'app/shared/components/404/page404adminpanel.component';
import { AdminPanelComponent } from './adminpanel.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ChatComponent } from './components/chat/chat.component';
import { StrategiesComponent } from './components/strategies/strategies.component';
import { ToAcceptComponent } from './components/to-accept/to-accept.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
    children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'to-accept', component: ToAcceptComponent },
      { path: 'users', component: UsersComponent },
      { path: 'user-details/:id', component: UserDetailsComponent },
      { path: 'cms', loadChildren: () => import('./cms/acms.module').then(m => m.ACmsModule) },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'pp', loadChildren: () => import('./partner-panel/admin-partner-panel.module').then(m => m.AdminPartnerPanelModule) },
      { path: 'strategies', component: StrategiesComponent }, // TODO: to prowadzić będzie do widoku Strategii z panelu usera
      { path: 'chat', component: ChatComponent },

      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', component: Page404adminpanelComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPanelRoutingModule {}
