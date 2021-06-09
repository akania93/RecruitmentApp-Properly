import { Component, Injector } from '@angular/core';
import { UserPanelBaseComponent } from '@shared';

@Component({
  selector: 'ngx-pp-badges',
  templateUrl: './pp-badges.component.html',
})
export class PpBadgesComponent extends UserPanelBaseComponent {
  constructor(protected injector: Injector) {
    super(injector);
  }
}
