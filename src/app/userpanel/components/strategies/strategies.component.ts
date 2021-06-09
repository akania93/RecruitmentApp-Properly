import { Component, Injector } from '@angular/core';
import { UserPanelBaseComponent } from '@shared';
import { STRATEGIES_MENU } from '../packages-menus';

@Component({
  selector: 'ngx-strategies',
  templateUrl: './strategies.component.html',
})
export class StrategiesComponent extends UserPanelBaseComponent {
  constructor(protected injector: Injector) {
    super(injector);
    this.menuLeftService.SetCurrentMenuItems(STRATEGIES_MENU);
  }
}
