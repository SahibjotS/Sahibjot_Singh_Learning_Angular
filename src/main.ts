import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter,Routes} from "@angular/router";
import  {LaptopListComponent} from "./app/laptop-list/laptop-list.component";
import {LaptopListItemComponent} from "./app/laptop-list-item/laptop-list-item.component";
import {ModifyLaptopComponent} from "./app/modify-laptop/modify-laptop.component";
import{PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";

const routes:Routes=[
  {path:'',redirectTo:'/laptop',pathMatch:'full'},
  {path:'laptop',component: LaptopListComponent},
  {path:'laptop/:id',component:LaptopListItemComponent},
  {path:'modify-laptop',component:ModifyLaptopComponent},
  {path:'**',component:PageNotFoundComponent}
]
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
