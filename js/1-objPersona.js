class Persona {
  constructor(
    nombre,
    apellido,
    edad,
    cedula,
    departamento,
    ocupacion,
    validado
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cedula = cedula;
    this.departamento = departamento;
    this.ocupacion = ocupacion;
    this.validado = validado;
  }
}

class SistemaPersona {
  constructor() {
    this.personas = [
      new Persona(
        "Nicolás",
        "Martinez",
        46,
        12345754,
        "Durazno",
        "Dependiente",
        true
      ),
      new Persona(
        "Ana",
        "González",
        27,
        23456789,
        "Canelones",
        "Estudiante",
        true
      ),
      new Persona(
        "Luis",
        "Rodríguez",
        55,
        34567890,
        "Maldonado",
        "Independiente",
        true
      ),
      new Persona("María", "García", 67, 45678901, "Salto", "No Trabaja", true),
      new Persona(
        "Pablo",
        "Martínez",
        34,
        56789012,
        "Paysandú",
        "Dependiente",
        true
      ),
      new Persona(
        "Carmen",
        "Fernández",
        48,
        67890123,
        "Rivera",
        "Independiente",
        true
      ),
      new Persona(
        "Diego",
        "López",
        31,
        78901234,
        "Tacuarembó",
        "Estudiante",
        true
      ),
      new Persona(
        "Teresa",
        "Sánchez",
        25,
        89012345,
        "Cerro Largo",
        "Dependiente",
        true
      ),
      new Persona(
        "Sergio",
        "Silva",
        52,
        90123456,
        "Rocha",
        "Independiente",
        true
      ),
      new Persona(
        "Beatriz",
        "Ramírez",
        44,
        23456712,
        "Treinta y Tres",
        "No Trabaja",
        true
      ),
      new Persona(
        "Rodrigo",
        "Mendoza",
        30,
        34567123,
        "Durazno",
        "Independiente",
        true
      ),
      new Persona(
        "Laura",
        "Gutierrez",
        29,
        45671234,
        "Artigas",
        "Estudiante",
        true
      ),
      new Persona(
        "Pedro",
        "Torres",
        60,
        56712345,
        "San José",
        "Independiente",
        true
      ),
      new Persona(
        "Gabriela",
        "Peralta",
        21,
        67123456,
        "Colonia",
        "No Trabaja",
        true
      ),
      new Persona(
        "Ernesto",
        "Vargas",
        73,
        71234567,
        "Soriano",
        "Dependiente",
        true
      ),
      new Persona(
        "Inés",
        "Aguilar",
        45,
        81234568,
        "Río Negro",
        "Independiente",
        false
      ),
      new Persona(
        "Julián",
        "Cordero",
        33,
        91234569,
        "Lavalleja",
        "Estudiante",
        false
      ),
      new Persona(
        "Sofía",
        "Castillo",
        64,
        12345691,
        "Florida",
        "No Trabaja",
        false
      ),
      new Persona(
        "Manuel",
        "Pinto",
        50,
        23456912,
        "Flores",
        "Dependiente",
        false
      ),
      new Persona("Lucía", "Peña", 37, 34569123, "Rocha", "Estudiante", false),
      new Persona(
        "Guillermo",
        "Navarro",
        28,
        45691234,
        "Treinta y Tres",
        "Dependiente",
        false
      ),
      new Persona(
        "Rosa",
        "Lugo",
        22,
        56912345,
        "Canelones",
        "Independiente",
        false
      ),
      new Persona(
        "Rafael",
        "Ríos",
        40,
        69123456,
        "Maldonado",
        "No Trabaja",
        false
      ),
      new Persona(
        "Estela",
        "Palma",
        71,
        91234567,
        "Montevideo",
        "Estudiante",
        false
      ),
      new Persona(
        "Nicolás",
        "Vallejo",
        46,
        12345781,
        "Durazno",
        "Dependiente",
        false
      ),
      new Persona(
        "Mariana",
        "Quintero",
        35,
        23457812,
        "Tacuarembó",
        "Independiente",
        false
      ),
      new Persona(
        "Armando",
        "Zúñiga",
        64,
        34578123,
        "Paysandú",
        "No Trabaja",
        false
      ),
      new Persona(
        "Isabel",
        "Vega",
        23,
        45781234,
        "Rivera",
        "Estudiante",
        false
      ),
      new Persona(
        "Carlos",
        "Yáñez",
        39,
        57812345,
        "Salto",
        "Dependiente",
        false
      ),
      new Persona(
        "Graciela",
        "Ximénez",
        28,
        78123456,
        "Artigas",
        "Independiente",
        false
      ),
    ];
  }
  agregarPersona(objPersona) {
    this.personas.push(objPersona); //Un método que agrega una persona 
  }

  existePersona(cedulaPersona) { 
    let existe = false;

    for (let i = 0; i < this.personas.length; i++) { //recorre el arreglo persona
      const objCedula = this.personas[i].cedula; 
      if (cedulaPersona === objCedula) { //evalua si la cedula de la persona coincide con la cedula ingresada
        existe = true;
        break; 
      }
    }

    return existe; //retorna true si coincide con una cedula, false en caso de no encontrar una cedula que coincida
  }
  contadorOcupacion(departamento, ocupacion) {
    let contador = 0;
    for (let i = 0; i < this.personas.length; i++) { //recorre el arreglo personas
      const objPersona = this.personas[i];
      if ( 
        departamento === objPersona.departamento && //evalua si el departamento ingresado coincide con un departamento en el arreglo departamento
        objPersona.ocupacion === ocupacion //a la vez, evalua si la ocupacion ingresada coincide con la ocupacion de esa persona
      ) { 
        contador++; //en caso de coincidir, el contador suma 1
      }
    }
    return contador; //retorna una cantidad
  }

  porcentajeDepartamento(departamento) { //metodo que retorna el porcentaje de personas por departamento
    let contador = 0;
    for (let i = 0; i < this.personas.length; i++) {
      const objPersona = this.personas[i];
      if (departamento === objPersona.departamento) {
        contador++;
      }
    }

    let porcentaje = Math.round((contador * 100) / this.personas.length);
    return porcentaje;
  }

  contadorPendientesAValidar() { //retorna el porcentaje de personas por departamento
    let contador = 0;
    for (let i = 0; i < this.personas.length; i++) {
      const objPersona = this.personas[i];
      if (objPersona.validado === false) {
        contador++;
      }
    }
    let porcentaje = Math.round((contador * 100) / this.personas.length);

    return porcentaje;
  }

  contadorEdadDepartamento(departamento, minimo, maximo) { //retorna el porcentaje de edad por departamento
    let contador = 0;
    let contadorTotal = 0;
    for (let a = 0; a < this.personas.length; a++) {
      const objContar = this.personas[a];
      if (objContar.departamento === departamento) {
        contadorTotal++;
      }
    }

    for (let i = 0; i < this.personas.length; i++) {
      const objPersona = this.personas[i];
      if (
        departamento === objPersona.departamento &&
        objPersona.edad < maximo &&
        objPersona.edad >= minimo
      ) {
        contador++;
      }
    }

    let porcentaje = Math.round((contador * 100) / contadorTotal);
    return porcentaje;
  }

  contadorPersonasDepartamento(departamento) { //retorna la cantidad de personas por departamento
    let contador = 0;
    for (let i = 0; i < this.personas.length; i++) {
      const objPersona = this.personas[i];
      if (objPersona.departamento === departamento) {
        contador++;
      }
    }
    return contador;
  }

  modificarPersona(cedula, nombre, apellido, edad, departamento, ocupacion) { //modifica una persona 
    for (let i = 0; i < this.personas.length; i++) {
      const unaPersona = this.personas[i];

      if (cedula === unaPersona.cedula) {
        unaPersona.nombre = nombre;
        unaPersona.apellido = apellido;
        unaPersona.edad = edad;
        unaPersona.departamento = departamento;
        unaPersona.ocupacion = ocupacion;
       
        break;
      }
    }
  }

  nombreYApellido(cedula){// dada una cedula, devuelve el nombre y el apellido de la persona
    let nombre;
    for(let i = 0; i < this.personas.length; i++){
      const objPersona = this.personas[i];
      if(objPersona.cedula === cedula){
        nombre = objPersona.nombre + " " + objPersona.apellido;
        break;
      }
    }

    return nombre;
  }
}

let sistemaPersona = new SistemaPersona();

let personasSinValidar = [];
agregarArregloPersonasSinValidar();
agregarSinValidarACensistas();

function agregarSinValidarACensistas(){ //asigna personas sin validar a censista
  for (let a = 0; a < personasSinValidar.length; a++){
    sistema.asignarACensista(personasSinValidar[a]);
  }
}

function agregarArregloPersonasSinValidar(){ //agrega personas sin validar al arreglo personas sin validar
  for (let i = 0; i < sistemaPersona.personas.length; i++){
    const objPersona = sistemaPersona.personas[i];
    if(objPersona.validado === false){
      if(!verificarArray(personasSinValidar, objPersona.cedula)){
      personasSinValidar.push(objPersona.cedula);
    }
    }
    
  }
}


  function verificarArray(array, cedula){ //verifica si existe la cedula en el arreglo
    let existe = false;
    for(let i = 0; i < array.length; i++){
      if(cedula === array[i]){
        existe = true;
        break;
      }
    }
    return existe
  }
  
  
  function eliminarPersonaDelArray(cedula) { //elimina una cedula del arreglo personas sin validar
    let cedulaNumber = Number(cedula);
    for (let i = 0; i < personasSinValidar.length; i++) {
      if (personasSinValidar[i] === cedulaNumber) {
        personasSinValidar.splice(i, 1);
        break;
      }
    }
  }
