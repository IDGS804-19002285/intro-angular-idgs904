import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { escuelaComponent, trabajo } from './escuela/escuela.component';
import { IricComponent } from './escuela/iric/iric.component';
import { MenuComponent } from './escuela/menu/menu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    escuelaComponent,
    IricComponent,
    trabajo,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
