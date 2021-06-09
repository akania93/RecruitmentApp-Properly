import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { MenuLeftService } from 'app/shared/services/menu-left.service';

@Component({
  selector: 'ngx-partner-panel',
  template: ` <router-outlet></router-outlet> `,
})
export class PartnerPanelComponent {
  menu: Array<NbMenuItem> = [
    {
      title: 'Pulpit',
      link: '/userpanel/pp',
      icon: 'folder-outline',
      selected: false,
    },
    {
      title: 'Struktura',
      link: '/userpanel/pp/structure',
      icon: 'folder-outline',
    },
    {
      title: 'Historia sprzedaży',
      link: '/userpanel/pp/sell-history',
      icon: 'folder-outline',
    },
    {
      title: 'Wypłata prowizji',
      link: '/userpanel/pp/payouts',
      icon: 'folder-outline',
    },
    {
      title: 'Odznaki',
      link: '/userpanel/pp/badges',
      icon: 'folder-outline',
    },
  ];

  // tslint:disable-next-line: no-unused-variable
  constructor(private readonly menuLeftService: MenuLeftService, readonly location: Location) {
    const setFirstActive = location.path() === '/userpanel/pp/dashboard';
    this.menu[0].selected = setFirstActive;

    this.menuLeftService.SetCurrentMenuItems(this.menu);
  }
}
