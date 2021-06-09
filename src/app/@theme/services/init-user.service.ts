import { Injectable } from '@angular/core';
import { NbJSThemesRegistry, NbThemeService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User, UserData } from '../../@core/interfaces/common/users';
import { UserStore } from '../../@core/stores/user.store';

@Injectable()
export class InitUserService {
  constructor(
    protected userStore: UserStore,
    protected usersService: UserData,
    protected jsThemes: NbJSThemesRegistry,
    protected themeService: NbThemeService
  ) {}

  initCurrentUser(): Observable<User> {
    return this.usersService.getCurrentUser().pipe(
      tap((user: User) => {
        if (user) {
          this.userStore.setUser(user);

          if (user.settings && user.settings.themeName) {
            if (this.jsThemes.has(user.settings.themeName) && !!this.jsThemes.get(user.settings.themeName).variables.initialized) {
              this.themeService.changeTheme(user.settings.themeName);
            }
          }
        }
      })
    );
  }
}
