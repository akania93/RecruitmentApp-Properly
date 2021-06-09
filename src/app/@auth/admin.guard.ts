import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { NbRoleProvider } from '@nebular/security';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ROLES } from './roles';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private readonly roleProvider: NbRoleProvider) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.roleProvider.getRole().pipe(
      map(role => {
        const roles = role instanceof Array ? role : [role];

        return roles.some(x => x && x.toLowerCase() === ROLES.ADMIN);
      })
    );
  }
}
