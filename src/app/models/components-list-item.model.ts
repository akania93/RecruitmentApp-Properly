import { Type } from '@angular/core';

export interface ComponentsListItem {
  title: string;
  name: string;
  component: Type<any>;
  data?: { [key: string]: string };
}
