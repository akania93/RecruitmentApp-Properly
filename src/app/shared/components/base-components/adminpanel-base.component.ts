import { Injectable, Injector, OnDestroy } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { MenuLeftService } from 'app/shared/services/menu-left.service';

@Injectable({
  providedIn: 'root',
})
export abstract class AdminPanelBaseComponent implements OnDestroy {
  public loading = true;
  protected nbSidebarService: NbSidebarService;
  protected menuLeftService: MenuLeftService;

  constructor(protected injector: Injector) {
    this.nbSidebarService = injector.get(NbSidebarService);
    this.menuLeftService = injector.get(MenuLeftService);

    this.loading = false; // TODO: disable in every component after load data
  }

  ngOnDestroy(): void {
    this.nbSidebarService.expand('menu-sidebar');
  }
}
