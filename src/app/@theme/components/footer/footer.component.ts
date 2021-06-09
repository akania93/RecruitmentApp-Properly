import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: ` <span class="p-mx-auto">Created by <b>Properly</b> {{ currentYear }}</span> `,
})
export class FooterComponent {
  get currentYear(): number {
    return new Date().getFullYear();
  }
}
