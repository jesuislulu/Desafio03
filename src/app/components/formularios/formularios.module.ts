import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // aquí se declaran los componentes que pertenecen a este módulo
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ],
    
  exports: [
    // aquí se exportan los componentes y módulos que podrán ser utilizados fuera de este módulo
  ]
})
export class FormulariosModule { }
