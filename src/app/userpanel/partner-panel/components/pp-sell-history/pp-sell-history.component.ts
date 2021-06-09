import { Component, Injector } from '@angular/core';
import { UserPanelBaseComponent } from '@shared';

@Component({
  selector: 'ngx-pp-sell-history',
  templateUrl: './pp-sell-history.component.html',
})
export class PpSellHistoryComponent extends UserPanelBaseComponent {
  constructor(protected injector: Injector) {
    super(injector);
  }
}
