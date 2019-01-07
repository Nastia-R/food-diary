import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule }   from './app-routing.module';
import { AppComponent }       from './app.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DishComponent }      from "./dish/dish.component";
import { DishEpics }          from "./dish/store/epic";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DishComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ DishEpics ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
