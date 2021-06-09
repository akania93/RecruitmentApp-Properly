import { AfterViewChecked, Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserPanelBaseComponent } from '@shared';
import { FAQApi } from 'app/@core/backend/common/api/faq.api';
import { FAQ } from 'app/@core/interfaces/common/faq';
import { Observable, of } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';

@Component({
  selector: 'ngx-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent extends UserPanelBaseComponent implements AfterViewChecked, OnInit, OnDestroy {
  index: number;
  public FAQ_LIST: Array<FAQ> = [];

  constructor(protected injector: Injector, private readonly api: FAQApi) {
    super(injector);
    this.menuLeftService.SetCurrentMenuItems([]);
  }

  protected translate: TranslateService;

  openNext() {
    this.index = this.index === 2 ? 0 : this.index + 1;
  }

  openPrev() {
    this.index = this.index === 0 ? 2 : this.index - 1;
  }

  ngOnInit(): void {
    this.index = 0;
    this.getFAQData().subscribe();
  }

  ngAfterViewChecked(): void {
    this.nbSidebarService.collapse('menu-sidebar');
  }

  private getFAQData(): Observable<Array<FAQ>> {
    return this.api.getFAQList().pipe(
      take(1),
      tap((result: Array<FAQ>) => {
        if (result) {
          this.FAQ_LIST = result;
        }
      }),
      catchError((error: any) => {
        console.warn(error);
        return of(error);
      })
    );
  }
}
