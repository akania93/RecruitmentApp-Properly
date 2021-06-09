import { Component, Injector } from '@angular/core';
import { UserPanelBaseComponent } from '@shared';
import { PACKAGE_MENU } from '../packages-menus';

@Component({
  selector: 'ngx-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss'],
})
export class PackagesComponent extends UserPanelBaseComponent {
  constructor(protected injector: Injector) {
    super(injector);
    this.menuLeftService.SetCurrentMenuItems(PACKAGE_MENU);
  }
}
