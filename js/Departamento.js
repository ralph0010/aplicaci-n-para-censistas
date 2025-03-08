
const valorMinimoDepartamento = 1;
const valorMaximoDepartamento = 19;

export class Departamento {
  constructor(nombre, valor) {
    this.nombre = nombre;
    this.valor = valor;
    this.cantidadTotalCensados = 0;
    this.cantidadEstudiantes=0;
    this.cantNoTrabajan=0;
    this.cantDependientesYIndepen =0;
  }

  agregarPersonaCensada(ocupacion){
    this.cantidadTotalCensados++;
    if(ocupacion ===  1 || ocupacion === 2) this.cantDependientesYIndepen++;
    else if(ocupacion === 3) this.cantidadEstudiantes++;
    else if(ocupacion === 4) this.cantNoTrabajan++; 
  }

  calcularPorcentaje(total){
    let retorno = Math.round((this.cantidadTotalCensados * 100) / total);
    return retorno;
  }
  
}
export function obtenerDepartamentoPorNombre(nombreDepartamento) {
  for (const departamento of departamentos) {
    if (departamento.nombre.toLowerCase() == nombreDepartamento.toLowerCase())
      return departamento;
  }
  return null;
}
export function obtenerDepartamentoPorValor(valorDepartamento) {
  validarDepartamento(valorDepartamento);
  let departamentoRetorno = null; 
  departamentoRetorno = departamentos.find(({valor}) => 
    Number(valor) == Number(valorDepartamento)
  );

  if(departamentoRetorno === null || departamentoRetorno === undefined) throw new Error("No se encontró el departamento");
  else{
    return departamentoRetorno;
  }
}
function validarDepartamento(departamento) {
  if (
    departamento < valorMinimoDepartamento ||
    departamento > valorMaximoDepartamento
  ) {
    throw new Error("El departamento seleccionado no es correcto");
  }
}
export const departamentos = [
  new Departamento("Artigas", 1),//0
  new Departamento("Canelones", 2),//1
  new Departamento("Cerro Largo", 3),//2
  new Departamento("Colonia", 4),//3
  new Departamento("Durazno", 5),//4
  new Departamento("Flores", 6),//5
  new Departamento("Florida", 7),//6
  new Departamento("Lavalleja", 8),//7
  new Departamento("Maldonado", 9),//8
  new Departamento("Montevideo", 10),//9
  new Departamento("Paysandú", 11),//10
  new Departamento("Río Negro", 12),//11
  new Departamento("Rivera", 13),
  new Departamento("Rocha", 14),
  new Departamento("Salto", 15),
  new Departamento("San José", 16),
  new Departamento("Soriano", 17),
  new Departamento("Tacuarembó", 18),
  new Departamento("Treinta y Tres", 19),
];
