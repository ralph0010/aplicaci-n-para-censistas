

import { Censista, juegoDePruebaCensistas } from "../Censista.js";
import {
  Departamento,
  departamentos,
  obtenerDepartamentoPorValor,
} from "../Departamento.js";
import {
  Ocupacion,
  ocupaciones,
  retornarOcupacionPorTipo,
} from "../Ocupacion.js";
import { Persona } from "../Persona.js"; //juegoPruebasPersonas

class Sistema {
  constructor() {
    this.censistas = [];
    this.departamentos = [];
    this.personas = [];
    this.ocupaciones = [];
    this.agregarArraysAlInicio();
  }
  //agregar todos los datos del sistema al inicio
  agregarArraysAlInicio() {
    this.agregarArray(this.censistas, juegoDePruebaCensistas);
    this.agregarArray(this.departamentos, departamentos);
    // this.agregarArray(this.personas); //juegoPruebasPersonas
  }
  //Agrega datos a un array del sistema
  agregarArray(array, datosArray) {
    for (const element of datosArray) {
      array.push(element);
    }
  }

  //agregara el objeto al array (persona o censista)
  agregarObjeto(objecto, array) {
    array.push(objecto);
  }

  //----------------------------------Viejas funcionalidades
  agregarCensista(objCensista) {
    this.censistas.push(objCensista); //Sirve para agregar un nuevo censista
  }

  loginCensista(nombreUsuario, passUsuario) {
    // for (let i = 0; i < this.censistas.length; i++) {
    //   const censista = this.censistas[i]; //Le asignamos un valor de repetitiva a la variable Usuario, que va ir pasando por cada Cencista
    //   if (
    //     censista.usuario.toLowerCase() === nombreUsuario.toLowerCase() &&
    //     censista.contraseña === passUsuario
    //   ) {
    //     return censista;
    //   }
    // }
    const retorno = this.censistas.find((censista) => {
      censista.usuario.toLowerCase() === nombreUsuario.toLowerCase() &&
        censista.password === passUsuario;
    });
    if(retorno == undefined || retorno =="") throw new Error("Error, usuario y/o contraseña incorrectos");
    return retorno;
  }
  asignarACensista(persona) {
    //metodo que asigna una persona a un censista aleatorio
    let maximo = this.censistas.length; //define un maximo que es el maximo de censistas

    let numero = Math.floor(Math.random() * maximo); //define un numero que se redondea hacia abajo
    //el numero es un numero aleatorio entre 0 y 1 multiplicado por el maximo
    this.censistas[numero].personasACargo.push(persona); //hace un push al arreglo de censista.personasACargo de la cedula de la persona asignada
  }
  agregarPersona(
    nombre,
    apellido,
    edad,
    cedula,
    valorDepartamento,
    valorOcupacion,
    validado
  ) {
    let departamento = obtenerDepartamentoPorValor(valorDepartamento);
    let ocupacion = retornarOcupacionPorTipo(valorOcupacion);
    let nuevaPersona = new Persona(
      nombre,
      apellido,
      edad,
      cedula,
      departamento,
      ocupacion,
      validado
    );
    if (this.existePersona(nuevaPersona.cedula))
      throw new Error("La cédula ya se encuentra registrada en el sistema");
    this.agregarObjeto(nuevaPersona, this.personas);
    if (!validado) this.asignarACensista(nuevaPersona);
  }
  //TO DO
  existePersona(cedulaPersona) {
    // this.personas.forEach(persona => {
    //     if(persona.cedula === cedulaPersona) return true
    // });
    // return false;
    let retorno = this.personas.includes(cedulaPersona);
    return retorno;
  }

  mostrarCensistaAsignado(cedula) {
    //metodo que retorna el nombre del censista asignado
    let nombre;
    for (let i = 0; i < this.censistas.length; i++) {
      //recorre el arreglo censista
      const objCensista = this.censistas[i];
      for (let a = 0; a < objCensista.personasACargo.length; a++) {
        //recorre el arreglo de personas a cargo
        const persACargo = objCensista.personasACargo[a];
        if (persACargo === cedula) {
          //evalua si la cedula de la persona coincide con la cedula a cargo del censista
          nombre = objCensista.nombre + " " + objCensista.apellido; //concatena el nombre y el apellido del censista
          break;
        }
      }
    }

    return nombre; //retorna el nombre del censista asignado
  }

  eliminarUnaPersonaACargo(cedula) {
    //metodo que elimina una persona(cedula) que tiene un censista a cargo

    for (let i = 0; i < this.censistas.length; i++) {
      //recorre el arreglo censista
      const personasACargo = this.censistas[i].personasACargo;

      for (let a = 0; a < personasACargo.length; a++) {
        //recorre el arreglo de personas a cargo
        const unaCedula = personasACargo[a];

        if (cedula === unaCedula) {
          //evalua si la cedula de la persona coincide con la cedula a cargo

          personasACargo.splice(a, 1); //elimina la cedula a cargo del censista
          break;
        }
      }
    }
  }

  escribirNombreYApellido(usuario) {
    //metodo que retorna el nombre y el apellido de un censista
    let nombre;
    for (let i = 0; i < this.censistas.length; i++) {
      //recorre el arreglo censista
      const objCensista = this.censistas[i];
      if (objCensista.usuario.toLowerCase() === usuario.toLowerCase()) {
        //evalua si el nombre del usuario censista en minuscula es igual al usuario
        nombre = objCensista.nombre + " " + objCensista.apellido; //concatena el nombre y el apellido del censista en nombre
        break;
      }
    }
    return nombre;
  }
}

export let sistemaCenso = new Sistema(); // le damos la funcionalidad al sistema
