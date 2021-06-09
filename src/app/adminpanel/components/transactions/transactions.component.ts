import { Component, Injector } from '@angular/core';
import { AdminPanelBaseComponent } from '@shared';

@Component({
  selector: 'ngx-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent extends AdminPanelBaseComponent {
  constructor(protected injector: Injector) {
    super(injector);
    this.menuLeftService.SetCurrentMenuItems([]);
  }
}
