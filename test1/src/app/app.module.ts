import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Colum1Component } from './colum1/colum1.component';
import { Colum2Component } from './colum2/colum2.component';
import { Colum3Component } from './colum3/colum3.component';

@NgModule({
  declarations: [
    AppComponent,
    Colum1Component,
    Colum2Component,
    Colum3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
