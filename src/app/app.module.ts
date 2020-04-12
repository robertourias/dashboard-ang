
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DashboardModule, DashboardComponent } from './dashboard';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    DashboardComponent
  ]
})
export class AppModule { }
