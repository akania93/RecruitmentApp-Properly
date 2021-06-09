import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { MenuLeftService } from 'app/shared/services/menu-left.service';

@Component({
  selector: 'ngx-partner-panel',
  template: ` <router-outlet></router-outlet> `,
})
export class AdminPartnerPanelComponent {
  menu: Array<NbMenuItem> = [
    {
      title: 'Pulpit',
      link: '/adminpanel/pp',
      icon: 'folder-outline',
      selected: false,
    },
    {
      title: 'Struktura',
      link: '/adminpanel/pp/structure',
      icon: 'folder-outline',
    },
    {
      title: 'Rotator',
      link: '/adminpanel/pp/rotator',
      icon: 'folder-outline',
    },
    {
      title: 'Darmowe pakiety',
      link: '/adminpanel/pp/free-packages',
      icon: 'folder-outline',
    },
  ];

  // tslint:disable-next-line: no-unused-variable
  constructor(private readonly menuLeftService: MenuLeftService, readonly location: Location) {
    const setFirstActive = location.path() === '/adminpanel/pp/dashboard';
    this.menu[0].selected = setFirstActive;

    this.menuLeftService.SetCurrentMenuItems(this.menu);
  }
}
