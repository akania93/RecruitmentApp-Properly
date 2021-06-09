import { AfterViewChecked, Component, Injector } from '@angular/core';
import { AdminPanelBaseComponent } from '@shared';

@Component({
  selector: 'ngx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent extends AdminPanelBaseComponent implements AfterViewChecked {
  constructor(protected injector: Injector) {
    super(injector);
    this.menuLeftService.SetCurrentMenuItems([]);
  }

  ngAfterViewChecked(): void {
    this.nbSidebarService.collapse('menu-sidebar');
  }
}
