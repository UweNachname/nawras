import { Component, computed, input } from '@angular/core';

import { type MenuItem } from './menu-item.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
})
export class MenuItemComponent {
  menuItem = input.required<MenuItem>();

  imagePath = computed(() => 'menu-items/' + this.menuItem().foto);
}
