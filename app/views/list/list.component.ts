import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { NavigationOptions } from "nativescript-angular/router/ns-location-strategy";
import { ItemEventData } from "ui/list-view";

import { Page } from "../../models/page";
import { PageService } from "../../services/page.service";

@Component({
  selector: "list",
  providers: [ PageService ],
  templateUrl: "views/list/list.component.html",
  styleUrls: ["views/list/list.component.css"]
})
export class ListComponent implements OnInit {
  pages: Array<Page>;
  
  constructor( private pageService: PageService, private router: RouterExtensions ) { }

  ngOnInit(): void {
    this.pages = this.pageService.getPages();
  }

  onAddTap(): void {
    let options: NavigationOptions = { clearHistory: true };
    this.router.navigate( ["detail", this.pages.length], options );
  }

  onItemTap( args: ItemEventData ): void { 
    let id = args.index;
    this.router.navigate( ["detail", id] );
  }

}