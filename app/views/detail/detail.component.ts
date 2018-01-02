import { Component, OnInit } from "@angular/core";
import { Page } from "../../models/page";
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
import { NavigationOptions } from "nativescript-angular/router/ns-location-strategy";
import { PageService } from "../../services/page.service";
import "rxjs/add/operator/switchMap";

@Component({
  selector: "detail",
  providers: [ PageService ],
  templateUrl: "views/detail/detail.component.html",
  styleUrls: ["views/detail/detail.component.css"]
})
export class DetailComponent implements OnInit {
  public page: Page;

  constructor( private routerExtensions: RouterExtensions,
               private pageService: PageService,
               private pageRoute: PageRoute) { }


  ngOnInit(): void {
    let id: number;
    
    this.pageRoute.activatedRoute
      .switchMap( activatedRoute => activatedRoute.params )
      .forEach( params =>  id = +params["id"] );

    this.page = this.pageService.getPage( id );
    
    if ( this.page === null ) {
      this.page = <Page>{ Id: id };
    }

  }

  public onDoneTap(): void {
    this.pageService.savePage( this.page );
    
    var options = <NavigationOptions> { clearHistory: true };
    this.routerExtensions.navigate( ["list"], options );
  }

}
