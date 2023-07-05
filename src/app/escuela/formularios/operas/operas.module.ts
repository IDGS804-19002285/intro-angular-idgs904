import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperasbasComponent } from '../operasbas/operasbas.component';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [OperasbasComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRadioModule,
    MatIconModule,
    MatInputModule
    
  ],
  exports:[

    OperasbasComponent

  ] 
})
export class OperasModule { }
