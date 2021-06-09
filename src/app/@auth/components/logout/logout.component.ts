import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NB_AUTH_OPTIONS, NbAuthResult, NbAuthService } from '@nebular/auth';
import { getDeepFromObject } from '../../helpers';

@Component({
  selector: 'ngx-logout',
  templateUrl: './logout.component.html',
})
export class NgxLogoutComponent implements OnInit {
  redirectDelay: number = this.getConfigValue('forms.logout.redirectDelay');
  strategy: string = this.getConfigValue('forms.logout.strategy');

  constructor(protected service: NbAuthService, @Inject(NB_AUTH_OPTIONS) protected options = {}, protected router: Router) {}

  ngOnInit(): void {
    this.logout(this.strategy);
  }

  logout(strategy: string): void {
    this.service.logout(strategy).subscribe((result: NbAuthResult) => {
      const redirect = result.getRedirect();
      this.logoutDemonstrativeVersion();
      if (redirect) {
        setTimeout(() => {
          return this.router.navigateByUrl(redirect);
        }, this.redirectDelay);
      }
    });
  }

  logoutDemonstrativeVersion(): void {
    localStorage.removeItem('auth_app_refresh_token');
    localStorage.removeItem('auth_app_token');

    this.router.navigate(['/']);
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, undefined);
  }
}
