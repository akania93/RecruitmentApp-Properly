import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuLeftService {
  public currentMenuItems = new Subject<Array<NbMenuItem>>();

  public SetCurrentMenuItems(itemAarray: Array<NbMenuItem>): void {
    this.currentMenuItems.next(itemAarray);
  }
}
