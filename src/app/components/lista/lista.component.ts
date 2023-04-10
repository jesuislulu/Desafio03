import { Component } from '@angular/core';
import { Alumnos } from '../../models/alumnos.model';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  
 
//"Lucía", 'Roma', 'Marta', 'Maria', 'Antonio'

public alumnos: Alumnos[] = [
    new Alumnos (1, 37, 'Lucía', 'Rocha', 'Arquitectura' ),
    new Alumnos (2, 37, 'Roma', 'Martinelli', 'Arquitectura' ),
    new Alumnos (3, 37, 'María', 'Callas', 'Arquitectura' ),
    new Alumnos (4, 37, 'Antonio', 'Banderas', 'Arquitectura' ),
  
  ];

}