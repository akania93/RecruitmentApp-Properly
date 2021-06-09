import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Settings, SettingsData } from '../../../interfaces/common/settings';
import { SettingsApi } from '../api/settings.api';

@Injectable()
export class SettingsService extends SettingsData {
  constructor(private readonly api: SettingsApi) {
    super();
  }

  getCurrentSetting(): Observable<Settings> {
    return this.api.getCurrent();
  }

  updateCurrent(setting: any): Observable<Settings> {
    return this.api.updateCurrent(setting);
  }
}
