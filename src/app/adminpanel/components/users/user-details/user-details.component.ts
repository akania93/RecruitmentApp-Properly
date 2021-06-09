import { Location } from '@angular/common';
import { AfterViewChecked, Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminPanelBaseComponent } from '@shared';

@Component({
  selector: 'ngx-user-details',
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent extends AdminPanelBaseComponent implements OnInit, AfterViewChecked, OnDestroy {
  param_userId: number;
  paramsSub: any;

  // tslint:disable-next-line: no-unused-variable
  constructor(protected injector: Injector, private readonly activatedRoute: ActivatedRoute, readonly location: Location) {
    super(injector);
  }

  ngOnInit(): void {
    this.paramsSub = this.activatedRoute.params.subscribe(params => {
      this.param_userId = parseInt(params['id'], 10);
    });
  }

  ngAfterViewChecked(): void {
    this.nbSidebarService.compact('menu-sidebar');
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.paramsSub.unsubscribe();
  }
}
