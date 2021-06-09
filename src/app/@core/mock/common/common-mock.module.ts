import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { SettingsData } from '../../interfaces/common/settings';
import { UserData } from '../../interfaces/common/users';
import { MockSettingsService } from './mock-settings.service';
import { MockUsersService } from './mock-users.service';

const SERVICES = [
  { provide: UserData, useClass: MockUsersService },
  { provide: SettingsData, useClass: MockSettingsService },
];

@NgModule({
  imports: [CommonModule],
})
export class CommonMockModule {
  static forRoot(): ModuleWithProviders<CommonMockModule> {
    return {
      ngModule: CommonMockModule,
      providers: [...SERVICES],
    };
  }
}
