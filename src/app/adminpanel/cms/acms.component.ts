import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { MenuLeftService } from 'app/shared/services/menu-left.service';

@Component({
  selector: 'ngx-cms',
  template: ` <router-outlet></router-outlet> `,
})
export class ACmsComponent implements OnInit {
  menu: Array<NbMenuItem> = [
    {
      title: 'Pakiety',
      link: '/adminpanel/cms/packages',
      icon: 'folder-outline',
      selected: false,
    },
    {
      title: 'Strategie',
      link: '/adminpanel/cms/strategies',
      icon: 'folder-outline',
    },
    {
      title: 'Umowy',
      link: '/adminpanel/cms/agreements',
      icon: 'folder-outline',
    },
    {
      title: 'Powiadomienia',
      link: '/adminpanel/cms/notifications',
      icon: 'folder-outline',
    },
    {
      title: 'Wiedza',
      link: '/adminpanel/cms/knowledge',
      icon: 'folder-outline',
    },
    {
      title: 'FAQ',
      link: '/adminpanel/cms/faq',
      icon: 'folder-outline',
    },
  ];

  // tslint:disable-next-line: no-unused-variable
  constructor(private readonly menuLeftService: MenuLeftService, readonly location: Location) {
    const setFirstActive = location.path() === '/adminpanel/cms/packages';
    this.menu[0].selected = setFirstActive;

    this.menuLeftService.SetCurrentMenuItems(this.menu);
  }

  ngOnInit(): void {}
}
