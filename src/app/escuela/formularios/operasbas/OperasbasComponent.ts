import { Component } from '@angular/core';


@Component({
  selector: 'app-operasbas',
  templateUrl: './operasbas.component.html',
  styleUrls: ['./operasbas.component.css']
})
export class OperasbasComponent {

  num1!: number;
  num2!: number;
  resultado!: number;
  operacionSeleccionada: string = 'suma';
  tipoOperaciones = [
    'suma',
    'resta',
    'multiplicacion',
    'division'
  ];

  calcular() {
    switch ((this, this.operacionSeleccionada)) {
      case 'suma': this.resultado = this.num1 + this.num2;
        break;
    }
  }

}
