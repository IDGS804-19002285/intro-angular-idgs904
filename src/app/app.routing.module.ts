import { RouterModule,Routes } from "@angular/router";
import { Component, NgModule } from "@angular/core";
import { IricComponent } from "./escuela/iric/iric.component";
import { OperasbasComponent } from "./escuela/formularios/operasbas/operasbas.component";
import { AlumnoReactiveComponent } from "./formularios/alumno-reactive/alumno-reactive.component";


const routes:Routes=[
    {path:'',redirectTo:'/home', pathMatch:'full'},
    {path:'Iric', component : IricComponent},
    {path:'Operas', component : OperasbasComponent},
    {path:'Form', component : AlumnoReactiveComponent}

]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

})
export class AppRoutingModule{}