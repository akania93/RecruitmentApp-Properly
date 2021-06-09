import { Component, Injector } from '@angular/core';
import { AdminPanelBaseComponent } from '@shared';

@Component({
  selector: 'ngx-to-accept',
  templateUrl: './to-accept.component.html',
  styleUrls: ['./to-accept.component.scss'],
})
export class ToAcceptComponent extends AdminPanelBaseComponent {
  constructor(protected injector: Injector) {
    super(injector);
    this.menuLeftService.SetCurrentMenuItems([]);
  }
}
