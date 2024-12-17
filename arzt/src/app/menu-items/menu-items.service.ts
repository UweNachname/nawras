import { Injectable } from '@angular/core';

import { MENU_ITEMS } from '../../menu-items';

@Injectable({
  providedIn: 'root',
})
export class MenuItemsService {
  get menuItems() {
    return MENU_ITEMS;
  }
  menuItem(route: string) {
    return MENU_ITEMS.filter(mi=>"/"+mi.route===route)[0]
  }
}
