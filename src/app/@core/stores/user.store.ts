import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';
import { User } from '../interfaces/common/users';

@Injectable({
  providedIn: 'root',
})
export class UserStore {
  private user: User;
  protected userState$ = new BehaviorSubject<User>(undefined);

  getUser(): User {
    return this.user;
  }

  setUser(paramUser: User) {
    this.user = paramUser;
    this.userState$.next(this.user);

    this.changeUserState(paramUser);
  }

  onUserStateChange() {
    return this.userState$.pipe(share());
  }

  changeUserState(paramUser: User) {
    this.userState$.next(paramUser);
  }

  setSetting(themeName: string) {
    if (this.user) {
      if (this.user.settings) {
        this.user.settings.themeName = themeName;
      } else {
        this.user.settings = { themeName };
      }

      this.changeUserState(this.user);
    }
  }
}
