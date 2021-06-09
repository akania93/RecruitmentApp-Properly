import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NbAuthModule } from '@nebular/auth';
import { SettingsData } from '../../interfaces/common/settings';
import { UserData } from '../../interfaces/common/users';
import { SettingsApi } from './api/settings.api';
import { UsersApi } from './api/users.api';
import { SettingsService } from './services/settings.service';
import { UsersService } from './services/users.service';

const API = [UsersApi, SettingsApi];

const SERVICES = [
  { provide: UserData, useClass: UsersService },
  { provide: SettingsData, useClass: SettingsService },
];

@NgModule({
  imports: [CommonModule, NbAuthModule],
})
export class CommonBackendModule {
  static forRoot(): ModuleWithProviders<CommonBackendModule> {
    return {
      ngModule: CommonBackendModule,
      providers: [...API, ...SERVICES],
    };
  }
}
