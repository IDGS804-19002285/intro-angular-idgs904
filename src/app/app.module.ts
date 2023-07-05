import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { escuelaComponent, trabajo } from './escuela/escuela.component';
import { IricComponent } from './escuela/iric/iric.component';
import { MenuComponent } from './escuela/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SumarComponent } from './escuela/formularios/sumar/sumar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasbasComponent} from './escuela/formularios/operasbas/operasbas.component';
import { OperasModule } from './escuela/formularios/operas/operas.module';
import { AlumnosFilterPipe } from './escuela/alumnos-filter.pipe';
import { CalificacionAlumComponent } from './escuela/calificacion-alum/calificacion-alum.component';
import { AlumnoReactiveComponent } from './formularios/alumno-reactive/alumno-reactive.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    escuelaComponent,
    IricComponent,
    trabajo,
    MenuComponent,
    SumarComponent,
    AlumnosFilterPipe,
    CalificacionAlumComponent,
    AlumnoReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
