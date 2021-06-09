import { Component, Injector } from '@angular/core';
import { UserPanelBaseComponent } from '@shared';
import { PACKAGE_MENU } from '../packages-menus';

@Component({
  selector: 'ngx-buy-package',
  templateUrl: './buy-package.component.html',
})
export class BuyPackageComponent extends UserPanelBaseComponent {
  constructor(protected injector: Injector) {
    super(injector);
    this.menuLeftService.SetCurrentMenuItems(PACKAGE_MENU);
  }
}
