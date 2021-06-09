import { Component } from '@angular/core';
import { MENU_ITEMS } from './menu-account';

@Component({
  selector: 'ngx-account',
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class AccountComponent {
  menu = MENU_ITEMS;
}
