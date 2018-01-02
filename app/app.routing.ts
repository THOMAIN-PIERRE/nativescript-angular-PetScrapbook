import { HomeComponent } from "./views/home/home.component";
import { ListComponent } from "./views/list/list.component";
import { AboutComponent } from "./views/about/about.component";
import { DetailComponent } from './views/detail/detail.component';

import { SelectDateComponent } from "./views/modals/select-date/select-date.component";
import { SelectGenderComponent } from "./views/modals/select-gender/select-gender.component";

export const routes: any = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "list", component: ListComponent },
  { path: "detail/:id", component: DetailComponent }
];

export const navigatableComponents: any = [ 
  HomeComponent, 
  ListComponent,
  AboutComponent,
  DetailComponent
];

export const entryComponents: any = [
  SelectDateComponent,
  SelectGenderComponent
];