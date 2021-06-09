import { Component, Injector } from '@angular/core';
import { UserPanelBaseComponent } from '@shared';

@Component({
  selector: 'ngx-pp-dashboard',
  templateUrl: './pp-dashboard.component.html',
})
export class PpDashboardComponent extends UserPanelBaseComponent {
  constructor(protected injector: Injector) {
    super(injector);
  }
}
