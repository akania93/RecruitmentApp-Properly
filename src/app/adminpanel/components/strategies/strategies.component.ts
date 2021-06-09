import { Component, Injector } from '@angular/core';
import { AdminPanelBaseComponent } from '@shared';

@Component({
  selector: 'ngx-strategies',
  templateUrl: './strategies.component.html',
  styleUrls: ['./strategies.component.scss'],
})
export class StrategiesComponent extends AdminPanelBaseComponent {
  constructor(protected injector: Injector) {
    super(injector);
    this.menuLeftService.SetCurrentMenuItems([]);
  }
}
