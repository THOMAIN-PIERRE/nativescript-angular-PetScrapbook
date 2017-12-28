import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "my-home",
  templateUrl: "views/home/home.component.html",
  styleUrls: [ "views/home/home.component.css" ]
})
export class HomeComponent {

  constructor( private router: RouterExtensions ) { }
  
  onContinueTap(): void {
     this.router.navigate(["list"]);
  }

  onAboutTap(): void {
    this.router.navigate(["about"]);
  }

}