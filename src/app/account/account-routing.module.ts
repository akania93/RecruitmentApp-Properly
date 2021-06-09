import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { UserPasswordChangeComponent } from './components/user-password-change/user-password-change.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const accountRoutes: Routes = [
  {
    path: '',
    component: AccountComponent,
    // canActivateChild: [AuthGuard],
    children: [
      {
        path: 'user-profile',
        component: UserProfileComponent,
      },
      {
        path: 'change-password',
        component: UserPasswordChangeComponent,
      },
      {
        path: '',
        redirectTo: 'user-profile',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(accountRoutes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
