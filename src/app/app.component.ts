import { Component, OnDestroy, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InitUserService } from './@theme/services/init-user.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<any> = new Subject<any>();

  constructor(private readonly initUserService: InitUserService, private readonly primengConfig: PrimeNGConfig) {
    this.initUser();
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  initUser() {
    this.initUserService.initCurrentUser().pipe(takeUntil(this.destroy$)).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
