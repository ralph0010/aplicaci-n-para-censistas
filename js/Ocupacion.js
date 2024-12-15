
export class Ocupacion {
    constructor (tipo, nombre){
      this.tipo = tipo;
      this.nombre = nombre;
    }
  }
export const ocupaciones = [new Ocupacion (1, "Dependiente"),
    new Ocupacion (2, "Independiente"),
    new Ocupacion (3, "Estudiante"),
    new Ocupacion (4, "No Trabaja"),];  
  
  