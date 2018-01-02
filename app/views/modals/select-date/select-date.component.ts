import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
  selector: "select-date",
  templateUrl: "views/modals/select-date/select-date.component.html",
  styleUrls: ["views/modals/select-date/select-date.component.css"]
})

export class SelectDateComponent {
  public date: Date;
  
  constructor( private params: ModalDialogParams ) {
    this.date = new Date( params.context );
  }

  onDoneTap(): any {
    this.params.closeCallback( this.date.toLocaleDateString() );
  }

}