import { AfterViewChecked, Component, Injector } from '@angular/core';
import { UserPanelBaseComponent } from '@shared';

@Component({
  selector: 'ngx-offers',
  templateUrl: './offers.component.html',
})
export class OffersComponent extends UserPanelBaseComponent implements AfterViewChecked {
  constructor(protected injector: Injector) {
    super(injector);
    this.menuLeftService.SetCurrentMenuItems([]);
  }

  ngAfterViewChecked(): void {
    this.nbSidebarService.collapse('menu-sidebar');
  }
}
