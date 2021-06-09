import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { MenuLeftService } from 'app/shared/services/menu-left.service';

@Component({
  selector: 'ngx-adminpanel',
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class AdminPanelComponent implements OnInit {
  menu: Array<NbMenuItem> = [];

  constructor(private readonly menuLeftService: MenuLeftService) {
    this.menuLeftService.currentMenuItems.subscribe((result: Array<NbMenuItem>) => {
      this.menu = result;
    });
  }

  ngOnInit(): void {}
}
