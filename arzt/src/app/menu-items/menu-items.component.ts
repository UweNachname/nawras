import { Component, inject } from '@angular/core';

import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuItemsService } from './menu-items.service'

@Component({
  selector: 'app-menu-items',
  standalone: true,
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.css',
  imports: [MenuItemComponent],
})
export class MenuItemsComponent {
  private menuItemsService = inject(MenuItemsService);
  menuItems = this.menuItemsService.menuItems;
}
