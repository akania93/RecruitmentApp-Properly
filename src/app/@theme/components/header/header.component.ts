import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuItem, NbSidebarService, NbThemeService } from '@nebular/theme';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { SettingsData } from '../../../@core/interfaces/common/settings';
import { User } from '../../../@core/interfaces/common/users';
import { UserStore } from '../../../@core/stores/user.store';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  public readonly materialTheme$: Observable<boolean>;
  userPictureOnly = false;
  showTopMenu = false;
  user: User;

  currentTheme = 'properly';
  userMenu = this.getMenuItems();
  selectedMenu = 1;

  admin_topMenuItems: Array<NbMenuItem> = [
    {
      title: 'Pulpit',
      link: '/adminpanel',
      pathMatch: 'full',
    },
    {
      title: 'Do akceptacji',
      link: '/adminpanel/to-accept',
      pathMatch: 'prefix',
    },
    {
      title: 'Użytkownicy',
      link: '/adminpanel/users',
      pathMatch: 'prefix',
    },
    {
      title: 'CMS',
      link: '/adminpanel/cms',
      pathMatch: 'prefix',
    },
    {
      title: 'Transakcje',
      link: '/adminpanel/transactions',
      pathMatch: 'prefix',
    },
    {
      title: 'Panel Partnera',
      link: '/adminpanel/pp',
      pathMatch: 'prefix',
    },
    {
      title: 'Strategie',
      link: '/adminpanel/strategies',
      pathMatch: 'prefix',
    },
    {
      title: 'Czat',
      link: '/adminpanel/chat',
      pathMatch: 'prefix',
    },
  ];

  user_topMenuItems: Array<NbMenuItem> = [
    {
      title: 'Pulpit',
      link: '/userpanel',
      pathMatch: 'full',
    },
    {
      title: 'Pakiety',
      link: '/userpanel/packages',
      pathMatch: 'prefix',
    },
    {
      title: 'Strategie',
      link: '/userpanel/strategies',
      pathMatch: 'prefix',
    },
    {
      title: 'Oferty',
      link: '/userpanel/offers',
      pathMatch: 'prefix',
    },
    {
      title: 'Panel Partnera',
      link: '/userpanel/pp',
      pathMatch: 'prefix',
    },
    {
      title: 'Obsługa klienta',
      link: '/userpanel/customer-service',
      pathMatch: 'prefix',
    },
    {
      title: 'FAQ',
      link: '/userpanel/faq',
      pathMatch: 'prefix',
    },
  ];

  private readonly destroy$: Subject<any> = new Subject<any>();

  constructor(
    private readonly nbSidebarService: NbSidebarService,
    private readonly themeService: NbThemeService,
    private readonly userStore: UserStore,
    private readonly settingsService: SettingsData,
    private readonly breakpointService: NbMediaBreakpointsService
  ) {
    this.materialTheme$ = this.themeService.onThemeChange().pipe(
      map(theme => {
        const themeName: string = (theme && theme.name) || '';

        return themeName.startsWith('material');
      })
    );
  }

  getMenuItems() {
    const userLink = this.user ? '/pages/users/current/' : '';

    return [
      { title: 'Profile', link: userLink, queryParams: { profile: true } },
      { title: 'Log out', link: '/auth/logout' },
    ];
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;

    this.userStore
      .onUserStateChange()
      .pipe(takeUntil(this.destroy$))
      .subscribe((user: User) => {
        this.user = user;
        this.userMenu = this.getMenuItems();
      });

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService
      .onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$)
      )
      .subscribe((isLessThanXl: boolean) => (this.userPictureOnly = false));

    this.themeService
      .onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$)
      )
      .subscribe(themeName => {
        this.currentTheme = themeName;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.userStore.setSetting(themeName);
    this.settingsService.updateCurrent(this.userStore.getUser().settings).pipe(takeUntil(this.destroy$)).subscribe();

    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.nbSidebarService.toggle(true, 'menu-sidebar');

    return false;
  }
}
