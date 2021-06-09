import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, UserData } from '../../../interfaces/common/users';
import { UsersApi } from '../api/users.api';

@Injectable()
export class UsersService extends UserData {
  constructor(private readonly api: UsersApi) {
    super();
  }

  list(): Observable<Array<User>> {
    return this.api.list();
  }

  getCurrentUser(): Observable<User> {
    return this.api.getCurrentId1().pipe(
      map(u => {
        if (u && !u.setting) {
          u.setting = {};
        }
        return u;
      })
    );
  }

  get(id: number): Observable<User> {
    return this.api.get(id);
  }

  create(user: any): Observable<User> {
    return this.api.add(user);
  }

  update(user: any): Observable<User> {
    return this.api.update(user);
  }

  updateCurrent(user: any): Observable<User> {
    return this.api.updateCurrent(user);
  }

  delete(id: number): Observable<boolean> {
    return this.api.delete(id);
  }

  delete2(id: number): Observable<boolean> {
    return this.api.delete2(id);
  }
}
