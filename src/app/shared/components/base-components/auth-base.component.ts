import { Injectable, Injector } from '@angular/core';
import { environment } from '@environments';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export abstract class AuthBaseComponent {
  protected translate: TranslateService;

  constructor(protected injector: Injector) {
    this.translate = injector.get(TranslateService);
    this.initTranslation();
  }

  initTranslation(): void {
    this.translate.addLangs(environment.languages);
    this.translate.setDefaultLang(environment.defaultLanguage);

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(environment.browserMatch) ? browserLang : environment.defaultLanguage);
  }
}
