import { obtenerDepartamentoPorNombre } from "./Departamento.js";
import { biblioteca } from "./biblioteca.js";
import { obtenerOcupacionPorNombre } from "./Ocupacion.js";
export class Persona {
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
    this.cedula = reEscribirCedula(cedula);
    this.departamento = departamento;
    this.ocupacion = ocupacion;
    this.validado = validado;
    this.validarPersonas(nombre, apellido, edad, cedula);
  }
  validarPersonas(nombre, apellido, edad, cedula) {
    if (!biblioteca.stringValidator(nombre))
      throw new Error(
        "Nombre inválido, revise que los carácteres sean correctos"
      );
    else if (!biblioteca.stringValidator(apellido))
      throw new Error(
        "Apellido inválido, revise que los carácteres sean correctos"
      );
    else if (!this.#cumpleEdad(edad))
      throw new Error(
        "La edad ingresada es incorrecta, ingrese un número del 0 hasta 130"
      );
    this.#validarCedula(cedula);
  }

  //verifica si la edad es un valor valido
  #cumpleEdad(edad) {
    if (!isNaN(edad) && edad >= 0 && edad <= 130) {
      return true;
    }
    return false;
  }

  #validarCedula(cedula) {
    this.#validarCantidadDigitosCedulas(cedula);
    if (!cedulaEsValida(cedula))
      throw new Error("La cédula ingresada no es válidad");
  }

  #validarCantidadDigitosCedulas(cedula) {
    if (cedula.length < 7 || cedula.length > 8)
      throw new Error("Error, la cédula debe contener entre 7 y 8 dígitos");
  }

  agregarPersonaADepartamento() {
    this.departamento.agregarPersonaCensada(this.ocupacion.tipo, this.edad);
  }
}

export function reEscribirCedula(cedula) {
  //Nos va servir para reescribir la cedula
  let cedulaReescrita = ""; //Variable con un valor nulo
  for (let i = 0; i < cedula.length; i++) {
    //Recorremos el array del parametro
    if (cedula.charCodeAt(i) >= 48 && cedula.charCodeAt(i) <= 57) {
      //Preguntamos si en la posicion de "i" se encuentra dentro del codigo ASCII
      cedulaReescrita += cedula.charAt(i); // En caso afirmativo lo agregamos a la variable
    }
  }
  return cedulaReescrita; //Retornamos los caracteres de los números al final
}
// console.log(generarIdsValidos());

function generarCedulasAleatorias() {
  let idsValidos = [];
  while (idsValidos.length < 30) {
    // Generar un ID de 8 dígitos al azar
    let id = Array.from({ length: 8 }, () =>
      Math.floor(Math.random() * 10)
    ).join("");

    // Validar el ID
    if (cedulaEsValida(id)) {
      idsValidos.push(id); // Añadimos el ID si es válido
    }
  }
  return idsValidos;
}

export function cedulaEsValida(cedula) {
  let replicarCedula = "" + cedula; // Asignamos a una variable la cedula para poder modificarla después.
  let multiplicador = "2987634"; // Variable que utilizaremos para comprobar si la cédula es válida
  let resultado = 0; //Variable que sumaremos más adelante en la repetitiva
  let digitoVerificador = replicarCedula.charAt(replicarCedula.length - 1); //El valor del ultimo digito de la cédula

  //console.log(digitoVerificador)
  if (cedula.length === 7) {
    replicarCedula = "0" + cedula; //Si la cedula contiene 7 caracteres le sumamos un 0 a la variable
  }

  for (let i = 0; i < multiplicador.length; i++) {
    //Recorremos las posiciones del multiplicador
    resultado +=
      Number(multiplicador.charAt(i)) * Number(replicarCedula.charAt(i)); //La posición que recibimos como text, lo modificamos a Number
  }

  if (((resultado % 10) + Number(digitoVerificador)) % 10 === 0) {
    // obtenemos el valor del resto y le sumamos al numero verificador, luego obtenemos el resto de dividido 10. Si el valor final es igual a 0 cumple la funcion;
    return true;
  }
  //console.log(resultado % 10 + Number(digitoVerificador))

  return false; //Retornamos si cumple o no cumple el parametro llegado como cédula
}

export const juegoPruebasPersonas = [
  new Persona(
    "Nicolás",
    "Martinez",
    46,
    "73958145",
    obtenerDepartamentoPorNombre("Durazno"),
    obtenerOcupacionPorNombre("Dependiente"),
    true
  ),
  new Persona(
    "Ana",
    "González",
    27,
    "88464123",
    obtenerDepartamentoPorNombre("Canelones"),
    obtenerOcupacionPorNombre("Estudiante"),
    true
  ),
  new Persona(
    "Luis",
    "Rodríguez",
    11,
    "64517423",
    obtenerDepartamentoPorNombre("Maldonado"),
    obtenerOcupacionPorNombre("Independiente"),
    true
  ),
  new Persona(
    "María",
    "García",
    17,
    "23810359",
    obtenerDepartamentoPorNombre("Salto"),
    obtenerOcupacionPorNombre("No Trabaja"),
    true
  ),
  new Persona(
    "Pablo",
    "Martínez",
    34,
    "66417768",
    obtenerDepartamentoPorNombre("Paysandú"),
    obtenerOcupacionPorNombre("Dependiente"),
    true
  ),
  new Persona(
    "Carmen",
    "Fernández",
    48,
    "99991351",
    obtenerDepartamentoPorNombre("Rivera"),
    obtenerOcupacionPorNombre("Independiente"),
    true
  ),
  new Persona(
    "Diego",
    "López",
    31,
    "72352370",
    obtenerDepartamentoPorNombre("Tacuarembó"),
    obtenerOcupacionPorNombre("Estudiante"),
    true
  ),
  new Persona(
    "Teresa",
    "Sánchez",
    25,
    "33299822",
    obtenerDepartamentoPorNombre("Cerro Largo"),
    obtenerOcupacionPorNombre("Dependiente"),
    true
  ),
  new Persona(
    "Sergio",
    "Silva",
    52,
    "60988858",
    obtenerDepartamentoPorNombre("Rocha"),
    obtenerOcupacionPorNombre("Independiente"),
    true
  ),
  new Persona(
    "Beatriz",
    "Ramírez",
    44,
    "31325994",
    obtenerDepartamentoPorNombre("Treinta y Tres"),
    obtenerOcupacionPorNombre("No Trabaja"),
    true
  ),
  new Persona(
    "Rodrigo",
    "Mendoza",
    30,
    "13580691",
    obtenerDepartamentoPorNombre("Durazno"),
    obtenerOcupacionPorNombre("Independiente"),
    true
  ),
  new Persona(
    "Laura",
    "Gutierrez",
    29,
    "67276662",
    obtenerDepartamentoPorNombre("Artigas"),
    obtenerOcupacionPorNombre("Estudiante"),
    true
  ),
  new Persona(
    "Pedro",
    "Torres",
    60,
    "57898701",
    obtenerDepartamentoPorNombre("San José"),
    obtenerOcupacionPorNombre("Independiente"),
    true
  ),
  new Persona(
    "Gabriela",
    "Peralta",
    21,
    "10150942",
    obtenerDepartamentoPorNombre("Colonia"),
    obtenerOcupacionPorNombre("No Trabaja"),
    true
  ),
  new Persona(
    "Ernesto",
    "Vargas",
    73,
    "20660454",
    obtenerDepartamentoPorNombre("Soriano"),
    obtenerOcupacionPorNombre("Dependiente"),
    true
  ),
  new Persona(
    "Inés",
    "Aguilar",
    45,
    "14460296",
    obtenerDepartamentoPorNombre("Río Negro"),
    obtenerOcupacionPorNombre("Independiente"),
    false
  ),
  new Persona(
    "Julián",
    "Cordero",
    33,
    "12679009",
    obtenerDepartamentoPorNombre("Lavalleja"),
    obtenerOcupacionPorNombre("Estudiante"),
    false
  ),
  new Persona(
    "Sofía",
    "Castillo",
    64,
    "10688147",
    obtenerDepartamentoPorNombre("Florida"),
    obtenerOcupacionPorNombre("No Trabaja"),
    false
  ),
  new Persona(
    "Manuel",
    "Pinto",
    50,
    "74469212",
    obtenerDepartamentoPorNombre("Flores"),
    obtenerOcupacionPorNombre("Dependiente"),
    false
  ),
  new Persona(
    "Lucía",
    "Penha",
    14,
    "44677853",
    obtenerDepartamentoPorNombre("Rocha"),
    obtenerOcupacionPorNombre("Estudiante"),
    false
  ),
  new Persona(
    "Guillermo",
    "Navarro",
    28,
    "19840011",
    obtenerDepartamentoPorNombre("Treinta y Tres"),
    obtenerOcupacionPorNombre("Dependiente"),
    false
  ),
  new Persona(
    "Rosa",
    "Lugo",
    22,
    "70994552",
    obtenerDepartamentoPorNombre("Canelones"),
    obtenerOcupacionPorNombre("Independiente"),
    false
  ),
  new Persona(
    "Rafael",
    "Ríos",
    40,
    "67647364",
    obtenerDepartamentoPorNombre("Maldonado"),
    obtenerOcupacionPorNombre("No Trabaja"),
    false
  ),
  new Persona(
    "Estela",
    "Palma",
    71,
    "20900292",
    obtenerDepartamentoPorNombre("Montevideo"),
    obtenerOcupacionPorNombre("Estudiante"),
    false
  ),
  new Persona(
    "Nicolás",
    "Vallejo",
    46,
    "98665367",
    obtenerDepartamentoPorNombre("Maldonado"),
    obtenerOcupacionPorNombre("Dependiente"),
    false
  ),
  new Persona(
    "Mariana",
    "Quintero",
    35,
    "77050553",
    obtenerDepartamentoPorNombre("Tacuarembó"),
    obtenerOcupacionPorNombre("Independiente"),
    false
  ),
  new Persona(
    "Armando",
    "Zúnhiga",
    64,
    "23813715",
    obtenerDepartamentoPorNombre("Paysandú"),
    obtenerOcupacionPorNombre("No Trabaja"),
    false
  ),
  new Persona(
    "Isabel",
    "Vega",
    23,
    "47190741",
    obtenerDepartamentoPorNombre("Rivera"),
    obtenerOcupacionPorNombre("Estudiante"),
    false
  ),
  new Persona(
    "Carlos",
    "Yánhez",
    39,
    "87559347",
    obtenerDepartamentoPorNombre("Salto"),
    obtenerOcupacionPorNombre("Dependiente"),
    false
  ),
  new Persona(
    "Graciela",
    "Ximénez",
    28,
    "70626672",
    obtenerDepartamentoPorNombre("Artigas"),
    obtenerOcupacionPorNombre("Independiente"),
    false
  ),
];






//   contadorPendientesAValidar() {
//     //retorna el porcentaje de personas por departamento
//     let contador = 0;
//     for (let i = 0; i < this.personas.length; i++) {
//       const objPersona = this.personas[i];
//       if (objPersona.validado === false) {
//         contador++;
//       }
//     }
//     let porcentaje = Math.round((contador * 100) / this.personas.length);

//     return porcentaje;
//   }

//   contadorEdadDepartamento(departamento, minimo, maximo) {
//     //retorna el porcentaje de edad por departamento
//     let contador = 0;
//     let contadorTotal = 0;
//     for (let a = 0; a < this.personas.length; a++) {
//       const objContar = this.personas[a];
//       if (objContar.departamento === departamento) {
//         contadorTotal++;
//       }
//     }

//     for (let i = 0; i < this.personas.length; i++) {
//       const objPersona = this.personas[i];
//       if (
//         departamento === objPersona.departamento &&
//         objPersona.edad < maximo &&
//         objPersona.edad >= minimo
//       ) {
//         contador++;
//       }
//     }

//     let porcentaje = Math.round((contador * 100) / contadorTotal);
//     return porcentaje;
//   }

//   contadorPersonasDepartamento(departamento) {
//     //retorna la cantidad de personas por departamento
//     let contador = 0;
//     for (let i = 0; i < this.personas.length; i++) {
//       const objPersona = this.personas[i];
//       if (objPersona.departamento === departamento) {
//         contador++;
//       }
//     }
//     return contador;
//   }

//   modificarPersona(cedula, nombre, apellido, edad, departamento, ocupacion) {
//     //modifica una persona
//     for (let i = 0; i < this.personas.length; i++) {
//       const unaPersona = this.personas[i];

//       if (cedula === unaPersona.cedula) {
//         unaPersona.nombre = nombre;
//         unaPersona.apellido = apellido;
//         unaPersona.edad = edad;
//         unaPersona.departamento = departamento;
//         unaPersona.ocupacion = ocupacion;

//         break;
//       }
//     }
//   }

//   nombreYApellido(cedula) {
//     // dada una cedula, devuelve el nombre y el apellido de la persona
//     let nombre;
//     for (let i = 0; i < this.personas.length; i++) {
//       const objPersona = this.personas[i];
//       if (objPersona.cedula === cedula) {
//         nombre = objPersona.nombre + " " + objPersona.apellido;
//         break;
//       }
//     }

//     return nombre;
//   }
// }

// let sistemaPersona = new SistemaPersona();

// let personasSinValidar = [];
// agregarArregloPersonasSinValidar();
// agregarSinValidarACensistas();

// function agregarSinValidarACensistas() {
//   //asigna personas sin validar a censista
//   for (let a = 0; a < personasSinValidar.length; a++) {
//     sistema.asignarACensista(personasSinValidar[a]);
//   }
// }

// function agregarArregloPersonasSinValidar() {
//   //agrega personas sin validar al arreglo personas sin validar
//   for (let i = 0; i < sistemaPersona.personas.length; i++) {
//     const objPersona = sistemaPersona.personas[i];
//     if (objPersona.validado === false) {
//       if (!verificarArray(personasSinValidar, objPersona.cedula)) {
//         personasSinValidar.push(objPersona.cedula);
//       }
//     }
//   }
// }

// function verificarArray(array, cedula) {
//   //verifica si existe la cedula en el arreglo
//   let existe = false;
//   for (let i = 0; i < array.length; i++) {
//     if (cedula === array[i]) {
//       existe = true;
//       break;
//     }
//   }
//   return existe;
// }

// function eliminarPersonaDelArray(cedula) {
//   //elimina una cedula del arreglo personas sin validar
//   let cedulaNumber = Number(cedula);
//   for (let i = 0; i < personasSinValidar.length; i++) {
//     if (personasSinValidar[i] === cedulaNumber) {
//       personasSinValidar.splice(i, 1);
//       break;
//     }
//   }
// }
