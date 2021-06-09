import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Settings, SettingsData } from '../../interfaces/common/settings';

@Injectable()
export class MockSettingsService extends SettingsData {
  getCurrentSetting(): Observable<Settings> {
    return of({
      themeName: 'properly',
    });
  }

  updateCurrent(setting: any): Observable<Settings> {
    return of({
      themeName: 'properly',
    });
  }
}
