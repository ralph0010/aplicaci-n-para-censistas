const valorMinimoDepartamento = 1;
const valorMaximoDepartamento =19;
export class Departamento {
  constructor(nombre, valor)
   {
    this.nombre = nombre;
    this.valor = valor;
  }
  
  obtenerDepartamento(nombreDepartamento){
    for (const departamento of departamentos) {
      if(departamento.nombre.toLowerCase()== nombreDepartamento.toLowerCase()) return departamento;
    }
    return null;
  }
}
export function obtenerDepartamentoPorValor(valorDepartamento){
  validarDepartamento(valorDepartamento);
  departamentos.forEach(departArray => {
    if(departArray.valor === valorDepartamento) return departamento;
  });
  throw new Error ("Error, no se encontró el departamento"); 
}
function validarDepartamento(departamento){
  if(departamento.valor <valorMinimoDepartamento || departamento.valor > valorMaximoDepartamento){
    throw new Error("Error, el departamento seleccionado no es correcto");
  }
}
export const departamentos = [new Departamento("Artigas", 1),
  new Departamento("Canelones", 2),
  new Departamento("Cerro Largo", 3),
  new Departamento("Colonia", 4),
  new Departamento("Durazno", 5),
  new Departamento("Flores", 6),
  new Departamento("Florida", 7),
  new Departamento("Lavalleja", 8),
  new Departamento("Maldonado", 9),
  new Departamento("Montevideo", 10),
  new Departamento("Paysandú", 11),
  new Departamento("Río Negro", 12),
  new Departamento("Rivera", 13),
  new Departamento("Rocha", 14),
  new Departamento("Salto", 15),
  new Departamento("San José", 16),
  new Departamento("Soriano", 17),
  new Departamento("Tacuarembó", 18),
  new Departamento("Treinta y Tres", 19)];


