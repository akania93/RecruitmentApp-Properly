import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments';
import { User } from 'app/@core/interfaces/common/users';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersApi {
  private readonly path_users: string = `${environment.API_BASE_URL}/users`;

  constructor(private readonly http: HttpClient) {}

  list(): Observable<Array<User>> {
    return this.http.get(this.path_users).pipe(
      map((data: any) =>
        data.map(item => {
          const picture = `${this.path_users}/${item.id}/photo`;
          return { ...item, picture };
        })
      )
    );
  }

  getCurrent(): Observable<any> {
    return this.http.get(`${this.path_users}/current`).pipe(
      map((data: any) => {
        const picture = `${this.path_users}/${data.id}/photo`;
        return { ...data, picture };
      })
    );
  }

  getCurrentId1(): Observable<any> {
    return this.http.get(`${this.path_users}/1`).pipe(
      map((data: any) => {
        const picture = `${this.path_users}/${data.id}/photo`;
        return { ...data, picture };
      })
    );
  }

  get(id: number): Observable<any> {
    return this.http.get(`${this.path_users}/${id}`).pipe(
      map((data: any) => {
        const picture = `${this.path_users}/${data.id}/photo`;
        return { ...data, picture };
      })
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.path_users}/${id}`);
  }

  delete2(id: number): Observable<boolean> {
    return this.http.delete(`${this.path_users}/${id}`).pipe(
      map((data: any) => {
        return !!data;
      })
    );
  }

  add(item: any): Observable<any> {
    return this.http.post(this.path_users, item);
  }

  updateCurrent(item: any): Observable<any> {
    return this.http.put(`${this.path_users}/current`, item);
  }

  update(item: any): Observable<any> {
    return this.http.put(`${this.path_users}/${item.id}`, item);
  }
}
