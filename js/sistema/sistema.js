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
import { Persona, juegoPruebasPersonas } from "../Persona.js"; //juegoPruebasPersonas
class Sistema {
  constructor() {
    this.censistas = [];
    this.departamentos = [];
    this.personas = [];
    this.ocupaciones = [];
    this.agregarArraysAlInicio();
    console.log(this.censistas)
    console.log(departamentos);
  }
  //agregar todos los datos del sistema al inicio
  agregarArraysAlInicio() {
    this.agregarArray(this.censistas, juegoDePruebaCensistas);
    this.agregarArray(this.departamentos, departamentos);
    this.agregarPersonasAPersonasArray();
  }
  //Agrega datos a un array del sistema
  agregarArray(array, datosArray) {
    for (const element of datosArray) {
      array.push(element);
    }
  }

  //Lo creo para que cada dato creado con IA de personas puedan ser destinados a censistas en caso que no esten validados
  agregarPersonasAPersonasArray(){
    juegoPruebasPersonas.forEach((persona)=>{
      this.personas.push(persona);
      if(!persona.validado) this.asignarACensista(persona);
      persona.agregarPersonaADepartamento();
    });
  }
  //agregara el objeto al array (persona o censista)
  agregarObjeto(objecto, array) {
    array.push(objecto);
  }
  //Realiza el logueo del censista
  loginCensista(nombreUsuario, passUsuario) {
    let retorno = this.censistas.find(
      (censista) =>
        censista.usuario.toLowerCase() === nombreUsuario.toLowerCase() &&
      censista.password === passUsuario
    );
    if (retorno == undefined || retorno == "")
      throw new Error("Error, usuario y/o contraseña incorrectos");
    return retorno;
  }
  
  registrarCensista(nombre, apellido, usuario, password){
    let nuevoCensista = new Censista(nombre, apellido, usuario, password);
    if(this.existeCensista(usuario)) throw new Error("El nombre de usuario ya existe en el sistema");
    this.censistas.push(nuevoCensista);  
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
    if (!validado) {
      this.asignarACensista(nuevaPersona);}
    nuevaPersona.agregarPersonaADepartamento();
  }
  existePersona(cedulaPersona) {
    let retorno = this.personas.some(
      (persona) => persona.cedula === cedulaPersona
    );
    return retorno;
  }
  existeCensista(userCensista) {
    let retorno = this.censistas.some(
      (censista) =>
        censista.usuario.toLowerCase() === userCensista.toLowerCase()
    );
    
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

console.log(sistemaCenso.personas)