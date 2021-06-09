import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './@auth/auth.guard';
import { Page404adminpanelComponent } from './shared/components/404/page404adminpanel.component';

const routes: Routes = [
  {
    path: 'userpanel',
    canActivate: [AuthGuard],
    loadChildren: () => import('app/userpanel/userpanel.module').then(m => m.UserPanelModule),
  },
  {
    path: 'account',
    canActivate: [AuthGuard],
    loadChildren: () => import('app/account/account.module').then(m => m.AccountModule),
  },
  {
    path: 'adminpanel',
    canActivate: [AuthGuard],
    loadChildren: () => import('app/adminpanel/adminpanel.module').then(m => m.AdminPanelModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('app/@auth/auth.module').then(m => m.AuthModule),
  },
  { path: '', redirectTo: 'userpanel', pathMatch: 'full' },
  // { path: '**', redirectTo: 'dashboard' },
  { path: '**', component: Page404adminpanelComponent },
];

const config: ExtraOptions = {
  useHash: false,
  // enableTracing: true, // <-- debugging purposes only
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
