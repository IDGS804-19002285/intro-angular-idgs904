import { Component } from '@angular/core';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {

alumnos:any[]=[
  {
    "matricula":1234,
    "nombre":'Mario',
    "edad":23,
    "correo":'mario@gmail.com',
    "pago":129.30,
    "foto":""
  },
  {
    "matricula":1234,
    "nombre":'Brandon',
    "edad":23,
    "correo":'brandon@gmail.com',
    "pago":129.30,
    "foto":""
  },
  {
    "matricula":1234,
    "nombre":'Juan',
    "edad":23,
    "correo":'juan@gmail.com',
    "pago":129.30,
    "foto":""
  }
]


}
