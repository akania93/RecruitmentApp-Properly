import { Injectable, Injector, OnDestroy } from '@angular/core';
import { environment } from '@environments';
import { NbSidebarService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { MenuLeftService } from 'app/shared/services/menu-left.service';

@Injectable({
  providedIn: 'root',
})
export abstract class UserPanelBaseComponent implements OnDestroy {
  public loading = true;
  protected translate: TranslateService;
  protected nbSidebarService: NbSidebarService;
  protected menuLeftService: MenuLeftService;

  constructor(protected injector: Injector) {
    this.translate = injector.get(TranslateService);
    this.nbSidebarService = injector.get(NbSidebarService);
    this.menuLeftService = injector.get(MenuLeftService);

    this.initTranslation();
    this.loading = false; // TODO: disable in every component after load data
  }

  initTranslation(): void {
    this.translate.addLangs(environment.languages);
    this.translate.setDefaultLang(environment.defaultLanguage);

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(environment.browserMatch) ? browserLang : environment.defaultLanguage);
  }

  ngOnDestroy(): void {
    this.nbSidebarService.expand('menu-sidebar');
  }
}
