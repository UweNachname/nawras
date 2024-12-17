import { Component, inject, OnInit } from "@angular/core";
import { MenuItem } from "../../menu-items/menu-item/menu-item.model";
import { Router } from "@angular/router";
import { MenuItemsService } from "../../menu-items/menu-items.service";

@Component({
    template:''
})
export abstract class CommonComponent implements OnInit {
    private menuItem?: MenuItem
    private router: Router = inject(Router)
    private menuItemService: MenuItemsService = inject(MenuItemsService)
    ngOnInit(): void {
       this.menuItem=this.menuItemService.menuItem(this.router.url)
    }
    get foto (){
        return "menu-items/" +this.menuItem?.foto
    }
    get title() {
        return this.menuItem?.title
    }
    get id() {
        return this.menuItem?.id
    }
}