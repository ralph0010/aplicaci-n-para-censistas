class Departamento {
  constructor(nombre, valor)
   {
    this.nombre = nombre;
    this.valor = valor;
  }
}
class SistemaDepartamento {
  constructor() {
    this.departamentos = [
      new Departamento("Artigas", 1),
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
      new Departamento("Treinta y Tres", 19)
    ];
  }

}
let sistemaDepartamento = new SistemaDepartamento();

class Ocupacion {
  constructor (tipo, nombre){
    this.tipo = tipo;
    this.nombre = nombre;
  }
}

class SistemaOcupacion {
  constructor(){
    this.ocupaciones = [
      new Ocupacion (1, "Dependiente"),
      new Ocupacion (2, "Independiente"),
      new Ocupacion (3, "Estudiante"),
      new Ocupacion (4, "No Trabaja"),
    ]
  }
}

let sistemaOcupacion = new SistemaOcupacion;