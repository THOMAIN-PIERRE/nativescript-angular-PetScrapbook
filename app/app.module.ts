import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { routes, navigatableComponents, entryComponents } from "./app.routing";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [ 
    AppComponent,
    ...navigatableComponents
  ],
  
  entryComponents: [
    ...entryComponents
  ],

  bootstrap: [ AppComponent ],
  
  imports: [ 
    NativeScriptModule, 
    NativeScriptRouterModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule.forRoot( routes ) 
  ],
  
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class AppModule {}
