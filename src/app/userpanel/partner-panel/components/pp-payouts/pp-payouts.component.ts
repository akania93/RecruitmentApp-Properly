import { Component, Injector } from '@angular/core';
import { UserPanelBaseComponent } from '@shared';

@Component({
  selector: 'ngx-pp-payouts',
  templateUrl: './pp-payouts.component.html',
})
export class PpPayoutsComponent extends UserPanelBaseComponent {
  constructor(protected injector: Injector) {
    super(injector);
  }
}
