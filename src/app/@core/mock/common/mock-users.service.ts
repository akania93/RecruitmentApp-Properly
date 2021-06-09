import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RolesEnum, User, UserData } from '../../interfaces/common/users';

@Injectable()
export class MockUsersService extends UserData {
  private data: Array<User> = [
    {
      id: 1,
      roles: [RolesEnum.User, RolesEnum.Partner],
      firstName: 'Mark',
      lastName: 'Walmart',
      type: 'person',
      email: 'mdo@gmail.com',
      picture: '',
      settings: {
        themeName: 'properly',
      },
    },
  ];

  getCurrentUser(): Observable<User> {
    return of(this.data[0]);
  }

  list(): Observable<Array<User>> {
    return of(this.data);
  }

  get(id: number): Observable<User> {
    return of(this.data.find(x => x.id === id));
  }

  updateCurrent(user: User): Observable<User> {
    this.data[0] = user;

    return of(user);
  }

  update(user: User): Observable<User> {
    const i = this.data.indexOf(this.data.find(x => x.id === user.id));
    if (i >= 0) {
      this.data[i] = user;
    }
    return of(user);
  }

  create(user: User): Observable<User> {
    user.id = Math.max(...this.data.map(x => x.id)) + 1;
    this.data.push(user);
    return of(user);
  }

  delete(id: number): Observable<boolean> {
    this.data = [...this.data.filter(x => x.id !== id)];
    return of();
  }
}
