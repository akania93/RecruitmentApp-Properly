import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments';
import { Observable } from 'rxjs';

@Injectable()
export class SettingsApi {
  private readonly path_settings: string = `${environment.API_BASE_URL}/settings`;

  constructor(private readonly http: HttpClient) {}

  getCurrent(): Observable<any> {
    return this.http.get(`${this.path_settings}/current`);
  }

  updateCurrent(item: any): Observable<any> {
    return this.http.put(`${this.path_settings}/current`, item);
  }
}
