import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
  selector: "select-gender",
  templateUrl: "views/modals/select-gender/select-gender.component.html",
  styleUrls: ["views/modals/select-gender/select-gender.component.css"]
})
export class SelectGenderComponent implements OnInit {

  public genderIndex: number;
  public incomingStringGender : string;
  public genders: Array<string> = ["Male", "Female", "Other"];

  constructor( private params: ModalDialogParams ) {
    this.incomingStringGender = params.context;
  }

  ngOnInit() {
    const foundGenderIndex = this.genders.findIndex( element => element == this.incomingStringGender );
    console.log('foundGenderIndex: ', foundGenderIndex);
    this.genderIndex = foundGenderIndex != -1 ? foundGenderIndex : 0;
  }

  onDoneTap(): any {

    console.log('this.genderIndex: ', JSON.stringify(this.genderIndex));
    this.params.closeCallback( this.genders[ this.genderIndex ] );
  }

} 