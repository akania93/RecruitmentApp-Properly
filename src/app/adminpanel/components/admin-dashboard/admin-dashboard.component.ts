import { AfterViewChecked, Component, Injector } from '@angular/core';
import { AdminPanelBaseComponent } from '@shared';

@Component({
  selector: 'ngx-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent extends AdminPanelBaseComponent implements AfterViewChecked {
  constructor(protected injector: Injector) {
    super(injector);
  }

  ngAfterViewChecked(): void {
    this.nbSidebarService.collapse('menu-sidebar');
  }
}
