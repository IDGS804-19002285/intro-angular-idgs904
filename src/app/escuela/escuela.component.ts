import { Component } from "@angular/core";

@Component({
    selector: `app-escuela`,
    template: `
    <form>
    <label>nombre: </label>
    <input type="text" value="">
    <button class="btn btn-primary" > Ingresar </button>
    </form>.
    `
})
export class escuelaComponent{
    constructor(){}
}

@Component({
    selector: `app-trabajo`,
    template: `
    <h4>Alumno IDGS-904</h4>
  <div>
    <b>Matricula:</b>{{Alumno.matricula}}
  </div>
  <div>
    <b>Nombre:</b>{{Alumno.nombre}}
  </div>
  <div>
    <b>Fecha de nacimiento:</b>{{Alumno.fechaNacimiento | date}} 
  </div>
  <div>
    <b>Pago:</b>{{Alumno.pagoIns | currency}} 
  </div>
   
    `
})

export class trabajo{
    constructor(){}

    Alumno = {
        matricula:567,
        nombre:' Juan',
        fechaNacimiento: new Date(),
        pagoIns:2729.23
    
      };
}

