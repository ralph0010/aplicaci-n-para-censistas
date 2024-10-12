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
}

function validarNombreOApellido(texto) {
  //La idea es que contenga unicamente letras el texto y retorne un true si es verdadero;
  let acceso = false; //Iniciamos la variable en false
  let textoNuevo = ""; //Creamos una variable que le asignamos el valor en el cual le sumaremos más adelante
  for (let i = 0; i < texto.length; i++) { //Recorrida del parametro de texto
    const letra = texto.charCodeAt(i); //Creamos una variable que le asignamos el codigo ASCII en cada letra
    if (
      (letra >= 65 && letra <= 90) || 
      (letra >= 97 && letra <= 122) ||
      letra === 193 ||
      letra === 201 ||
      letra === 205 ||
      letra === 211 ||
      letra === 218 ||
      letra === 225 ||
      letra === 233 ||
      letra === 237 ||
      letra === 243 ||
      letra === 250   
    ) {
      textoNuevo += texto.charAt(i); //Si la letra se encuentra entre las mayúsculas, minúsculas y tildes de la abecedario se le suma la letra de texto a textoNuevo
    }
  }
  if (textoNuevo === texto && isNaN(texto)) {
    acceso = true; //Si en la comparación resulta que son iguales y no está vacío, le asignamos un true a acesso.
  }
  return acceso; //Podemos comprobar si el texto se encuentra de
}

function validarCedulaCumple(cedula) {
  let cedulaValida = false; // En principio la cédula será un false
  let replicarCedula = cedula; // Asignamos a una variable la cedula para poder modificarla después.
  let multiplicador = "2987634"; // Variable que utilizaremos para comprobar si la cédula es válida
  let resultado = 0; //Variable que sumaremos más adelante en la repetitiva
  let digitoVerificador = cedula.charAt(cedula.length - 1); //El valor del ultimo digito de la cédula

  //console.log(digitoVerificador)
  if (cedula.length === 7) {
    replicarCedula = "0" + cedula; //Si la cedula contiene 7 caracteres le sumamos un 0 a la variable
  }

  for (let i = 0; i < multiplicador; i++) {
    //Recorremos las posiciones del multiplicador
    resultado +=
      Number(multiplicador.charAt(i)) * Number(replicarCedula.charAt(i)); //La posición que recibimos como text, lo modificamos a Number
  }

  if (((resultado % 10) + Number(digitoVerificador)) % 10 === 0) {
    // obtenemos el valor del resto y le sumamos al numero verificador, luego obtenemos el resto de dividido 10. Si el valor final es igual a 0 cumple la funcion;
    cedulaValida = true;
  }
  //console.log(resultado % 10 + Number(digitoVerificador))

  if(cedula===""){ //Si la cédula no contiene un valor no será válido
    cedulaValida=false
  }

  return cedulaValida; //Retornamos si cumple o no cumple el parametro llegado como cédula
}


function reEscribirCedula(cedula) {
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


function agregarDepartamentos(slc){ //Recibe como parameto el id del slc
  document.querySelector("#"+slc).innerHTML = `<option value = "-1"> Seleccionar </option>`; //Asignamos el primer valor
  for (let i = 0; i < sistemaDepartamento.departamentos.length; i++){ //Recorremos el array de departamentos en la clase sistemaDepartamento
      const Objdepartamento = sistemaDepartamento.departamentos[i]; //
      document.querySelector("#"+slc).innerHTML += `      
      <option value = "${Objdepartamento.nombre}">${Objdepartamento.nombre}</option>`; //En la repetitiva aumentamos el select con el array de departamentos en el objeto Departamentos
  }
}

function agregarOcupacion(slc){
  document.querySelector("#"+slc).innerHTML = `
  <option value = "-1">Seleccionar</option>` //Asignamos el primer valor en el id a buscar
  for (let i = 0; i < sistemaOcupacion.ocupaciones.length; i++){  //Recorremos el array de ocupaciones en la clase SistemaOcupacion.
      const ocupacion = sistemaOcupacion.ocupaciones[i]; // Le asignamos a ocupacion el valor de la posición "i" del array
      document.querySelector("#"+slc).innerHTML += `
      <option value = "${ocupacion.nombre}">${ocupacion.nombre}</option>` // En la repetitiva sumamos los options  del array
  }
}

function vaciarDatos(clase){
  let datos = document.getElementsByClassName(clase); //Se asigna un array de id, que lo consigue a traves de la clase en el HTML
  for(let i = 0; i < datos.length; i++){
    datos[i].value = ""; //En cada repetitiva del id, el valor asignado es string vacio
  }
  datos[0].focus(); //En el primer array le asignamos que se enfoque en ese valor
  
}

function datosEnSeleccionar(clase){ //toma el valor de la clase 
  let datos = document.getElementsByClassName(clase);
  for(let i = 0; i < datos.length; i++){
    datos[i].value = "-1"
  }
}

