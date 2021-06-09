import { Injectable } from '@angular/core';
import { NbAuthOAuth2JWTToken, NbAuthService } from '@nebular/auth';
import { NbRoleProvider } from '@nebular/security';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RoleProvider extends NbRoleProvider {
  constructor(private readonly authService: NbAuthService) {
    super();
  }

  getLowerCaseRoles(roles: any): string | Array<string> {
    let _roles;

    if (Array.isArray(roles)) {
      _roles = roles.map(element => {
        return element.toLowerCase();
      });
    } else {
      _roles = roles.toLowerCase();
    }
    return _roles;
  }

  getRole(): Observable<string | Array<string>> {
    return this.authService.getToken().pipe(
      map((token: NbAuthOAuth2JWTToken) => {
        // const payload = token.getAccessTokenPayload();
        const payload = token.getPayload();
        return !!(token.isValid() && payload && payload['role']) ? this.getLowerCaseRoles(payload['role']) : 'guest';
      })
    );
  }
}
