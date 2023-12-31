import { Component } from '@angular/core';
import { IAlumnos } from '../alumnosIr';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean =true;
  listFilter:string = '';
  alumnoTitle!:string;

alumnosIric:IAlumnos[]=[
  {
    matricula:1234,
    nombre:'Mario',
    edad:23,
    correo:'mario@gmail.com',
    pago:129.30,
    foto:'',
    calif:4.8
  },
  {
    matricula:1234,
    nombre:'Brandon',
    edad:23,
    correo:'brandon@gmail.com',
    pago:129.30,
    foto:'',
    calif:3.5
    
  },
  {
    matricula:1234,
    nombre:'Juan',
    edad:23,
    correo:'juan@gmail.com',
    pago:129.30,
    foto:'',
    calif:9
  }
]

showImagen():void{
  this.muestraImg = !this.muestraImg;
}

onCalificaClick(message:string){
  this.alumnoTitle= `${message}`;
}

}
