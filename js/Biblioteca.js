import { departamentos } from "./Departamento.js";
import { ocupaciones } from "./Ocupacion.js";
class Biblioteca {
  constructor() {}
  stringValidator(texto) {
    if(texto === undefined || texto.length === 0) return false;
    for (let i = 0; i < texto.length; i++) {
      //Recorrida del parametro de texto
      let letra = texto.charCodeAt(i); //Creamos una variable que le asignamos el codigo ASCII en cada letra
      if (
        (letra < 65 || letra > 90) &&
        (letra < 97 || letra > 122) &&
        letra !== 193 &&
        letra !== 201 &&
        letra !== 205 &&
        letra !== 211 &&
        letra !== 218 &&
        letra !== 225 &&
        letra !== 233 &&
        letra !== 237 &&
        letra !== 243 &&
        letra !== 250
      ) {
        return false;
      }
    }
    return true;
  }
  agregarDepartamentos(slc) {
    //Recibe como parameto el id del slc
    document.querySelector(
      "#" + slc
    ).innerHTML = `<option value = "-1"> Seleccionar </option>`;
    departamentos.forEach((depart) => {
      document.querySelector("#" + slc).innerHTML += `      
        <option value = "${depart.valor}">${depart.nombre}</option>`; //En la repetitiva aumentamos el select con el array de departamentos en el objeto Departamentos
    });
    
  }
  agregarOcupacion(slc) {
    document.querySelector("#" + slc).innerHTML = `
    <option value = "-1">Seleccionar</option>`; //Asignamos el primer valor en el id a buscar
    ocupaciones.forEach((ocupa)=> {
      document.querySelector("#"+slc).innerHTML += `
        <option value = "${ocupa.tipo}">${ocupa.nombre}</option>`;
    })
  }
  verificarEdadNoVacia(edad){
    if(edad == "" || edad == undefined) return -1;
    else return Number(edad);
  }

}
export let biblioteca = new Biblioteca();

function contraseñaValida(contraseña) {
  let acceso = false; //Inicio la variable con un false para menor codigo

  let mayuscula = 0; //Lo usaremos como contador
  let minuscula = 0; //Lo usaremos como contador
  let numero = 0; //Lo usaremos como contador
  let numeros = "0123456789"; //Lo usaremos para recorrer en una repetitiva para ver si contiene numeros

  for (let i = 0; i < contraseña.length; i++) {
    //recorremos la variable llegada de contraseña
    for (let a = 0; a < numeros.length; a++) {
      //recorremos la variable numeros
      if (contraseña.charAt(i) === numeros.charAt(a)) {
        //Comparamos si la recorridas de numeros coincide con la posicion de la contraseña.
        numero++; //Si coincide se suma +1 a la variable números
      }
    }

    if (contraseña.charCodeAt(i) >= 65 && contraseña.charCodeAt(i) <= 90) {
      //codigo ascci letras mayusculas
      mayuscula++; // Si coincide el charCode en la repetitiva se suma +1;
    } else if (
      contraseña.charCodeAt(i) >= 97 &&
      contraseña.charCodeAt(i) <= 122
    ) {
      //codigo ASCII letras minusculas
      minuscula++; //Si coincide el charCode en la repetitiva se suma +1
    }
  }
  if (mayuscula > 0 && minuscula > 0 && numero > 0 && contraseña.length >= 5) {
    //Verificamos que los contadores mayuscula, minuscula, numero contenga minimo 1. Y
    acceso = true;
  }
  return acceso; //Retornamos el acesso si es true o false
  //agrega datos a la slc del inner html, pasando por parametor el id
}


function vaciarDatos(clase) {
  let datos = document.getElementsByClassName(clase); //Se asigna un array de id, que lo consigue a traves de la clase en el HTML
  for (let i = 0; i < datos.length; i++) {
    datos[i].value = ""; //En cada repetitiva del id, el valor asignado es string vacio
  }
  datos[0].focus(); //En el primer array le asignamos que se enfoque en ese valor
}

function datosEnSeleccionar(clase) {
  //toma el valor de la clase
  let datos = document.getElementsByClassName(clase);
  for (let i = 0; i < datos.length; i++) {
    datos[i].value = "-1";
  }
}
