const valorMinimoOcupacion = 1;
const valorMaxOcupacion = 4;
export class Ocupacion {
  constructor(tipo, nombre) {
    this.tipo = tipo;
    this.nombre = nombre;
  }
  obtenerId(){
    return this.tipo;
  }
}
export function retornarOcupacionPorTipo(tipoIngresado) {
  tipoEsValido(tipoIngresado);
  let ocupacionRetorno = null;
  ocupacionRetorno = ocupaciones.find(
    ({ tipo }) => Number(tipo) == Number(tipoIngresado)
  );
  if (ocupacionRetorno === null || ocupacionRetorno === undefined)
    throw new Error("No se encontró la ocupación");
  else return ocupacionRetorno;
}
//Validar el valor ingresado si se encuentra dentro del rango disponible
function tipoEsValido(tipo) {
  if (tipo < valorMinimoOcupacion || tipo > valorMaxOcupacion)
    throw new Error("La ocupación ingresada no es válida");
}
//El array de ocupaciones para poder registrar datos.
export const ocupaciones = [
  new Ocupacion(1, "Dependiente"),
  new Ocupacion(2, "Independiente"),
  new Ocupacion(3, "Estudiante"),
  new Ocupacion(4, "No Trabaja"),
];
export function obtenerOcupacionPorNombre(nombreOcu){
  let retorno = null;
  retorno = ocupaciones.find(({nombre}) =>
  nombre.toLowerCase() === nombreOcu.toLowerCase())
  return retorno;
}
