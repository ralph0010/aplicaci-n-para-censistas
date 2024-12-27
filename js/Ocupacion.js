const valorMinimoOcupacion= 1;
const valorMaxOcupacion =4;
export class Ocupacion {
    constructor (tipo, nombre){
      this.tipo = tipo;
      this.nombre = nombre;
    }
  }
  export function retornarOcupacionPorTipo(tipo){
    tipoEsValido(tipo);
    ocupaciones.forEach(ocupacion => {
      if(ocupacion.tipo === tipo) return ocupacion;
    });
    throw new Error ("Error inesperado, no se encontró la ocupación");
  }
  //Validar el valor ingresado si se encuentra dentro del rango disponible
  function tipoEsValido(tipo){
    if(tipo < valorMinimoOcupacion || tipo> valorMaxOcupacion) throw new Error("Error, el tipo ingresado no es válido")
  }
export const ocupaciones = [new Ocupacion (1, "Dependiente"),
    new Ocupacion (2, "Independiente"),
    new Ocupacion (3, "Estudiante"),
    new Ocupacion (4, "No Trabaja"),];  
  
  