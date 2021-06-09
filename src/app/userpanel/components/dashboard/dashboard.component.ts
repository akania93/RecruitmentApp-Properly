import { AfterViewChecked, Component, Injector } from '@angular/core';
import { UserPanelBaseComponent } from '@shared';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent extends UserPanelBaseComponent implements AfterViewChecked {
  constructor(protected injector: Injector) {
    super(injector);
  }

  ngAfterViewChecked(): void {
    this.nbSidebarService.collapse('menu-sidebar');
  }
}
