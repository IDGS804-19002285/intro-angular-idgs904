import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { escuelaComponent, trabajo } from './escuela/escuela.component';
import { IricComponent } from './escuela/iric/iric.component';

@NgModule({
  declarations: [
    AppComponent,
    escuelaComponent,
    IricComponent,
    trabajo
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }