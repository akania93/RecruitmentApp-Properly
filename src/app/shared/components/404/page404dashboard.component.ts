import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-page404dashboard',
  template: `
    <h1>Page 404: Not found.</h1>
    <p class="p-mt-3">
      Nie odnaleziono adresu: <code>{{ currentUrl }}</code>
    </p>
  `,
})
export class Page404dashboardComponent implements OnInit {
  currentUrl;

  constructor(private readonly router: Router) {
    this.currentUrl = this.router.url;
  }

  ngOnInit(): void {}
}
