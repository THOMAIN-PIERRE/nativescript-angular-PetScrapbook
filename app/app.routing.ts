import { HomeComponent } from "./views/home/home.component";
import { ListComponent } from "./views/list/list.component";
import { AboutComponent } from "./views/about/about.component";
import { DetailComponent } from './views/detail/detail.component';

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