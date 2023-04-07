export class Alumnos {
    id: number;
    edad: number;
    nombre: string;
    apellido: string;
    carrera: string;
    
    constructor(id: number, edad: number, nombre: string, apellido: string, carrera: string) {
      this.id = id;
      this.edad = edad;
      this.nombre = nombre;
      this.apellido = apellido;
      this.carrera = carrera;
    }
  }
  