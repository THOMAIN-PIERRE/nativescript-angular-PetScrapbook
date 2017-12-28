import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from './../app/views/home/home.component';
import { ListComponent } from './../app/views/list/list.component';

@NgModule({
  declarations: [ AppComponent, HomeComponent, ListComponent ],
  bootstrap: [ HomeComponent ],
  imports: [ NativeScriptModule ],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class AppModule {}
