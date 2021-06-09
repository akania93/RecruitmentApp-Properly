import { Component, Injector } from '@angular/core';
import { UserPanelBaseComponent } from '@shared';

@Component({
  selector: 'ngx-pp-structure',
  templateUrl: './pp-structure.component.html',
})
export class PpStructureComponent extends UserPanelBaseComponent {
  constructor(protected injector: Injector) {
    super(injector);
  }
}
