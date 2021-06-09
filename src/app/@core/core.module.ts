import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { NbAuthModule } from '@nebular/auth';
import { SharedModule } from '@shared';
import { InitUserService } from '../@theme/services/init-user.service';
import { CommonBackendModule } from './backend/common/common-backend.module';
import { SettingsService } from './backend/common/services/settings.service';
import { UsersService } from './backend/common/services/users.service';
import { CommonMockModule } from './mock/common/common-mock.module';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { UserStore } from './stores/user.store';

export const NB_CORE_PROVIDERS = [...CommonMockModule.forRoot().providers, ...CommonBackendModule.forRoot().providers];

@NgModule({
  imports: [CommonModule, SharedModule],
  exports: [NbAuthModule],
  declarations: [],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...NB_CORE_PROVIDERS, UserStore, UsersService, InitUserService, SettingsService],
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
