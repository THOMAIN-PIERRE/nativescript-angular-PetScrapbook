import { Component } from "@angular/core";
import { Page } from "../../models/page";

@Component({
  selector: "list",
  templateUrl: "views/list/list.component.html",
  styleUrls: ["views/list/list.component.css"]
})
export class ListComponent {
  pages: Array<Page>;
  
  constructor() { }

}