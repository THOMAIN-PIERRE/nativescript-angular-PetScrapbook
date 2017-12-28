import { HomeComponent } from "./views/home/home.component";
import { ListComponent } from "./views/list/list.component";
import { AboutComponent } from "./views/about/about.component";

export const routes: any = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "list", component: ListComponent }
];

export const navigatableComponents: any = [ 
  HomeComponent, 
  ListComponent,
  AboutComponent
];