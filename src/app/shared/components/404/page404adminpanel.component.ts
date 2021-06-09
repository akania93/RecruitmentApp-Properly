import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-page404adminpanel',
  template: `
    <h1>Page 404: Not found. (adminpanel)</h1>
    Próbowałeś wejść do: <code>{{ currentUrl }}</code>
  `,
})
export class Page404adminpanelComponent implements OnInit {
  currentUrl;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.currentUrl = this.router.url;
  }
}
