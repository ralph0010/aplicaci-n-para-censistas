document
  .querySelector("#reasignar")
  .addEventListener("click", reasignarParaValidar);

function reasignarParaValidar() { //funcion que reasigna a otro censista
  let cedulaAReasignar = Number(document.querySelector("#pendientesValidar").value);
  let cencistaAReasignar = document.querySelector("#cencistas").value;
  let mensaje;
if(cedulaAReasignar !== -1 && cencistaAReasignar !== "-1"){
  let confirmar = confirm(`¿Está seguro que desea reasignar a ${sistemaPersona.nombreYApellido(cedulaAReasignar)} al censista ${sistema.escribirNombreYApellido(cencistaAReasignar)} (${cencistaAReasignar}?)`)
  if(confirmar){
  for (let i = 0; i < sistema.censistas.length; i++) { //recorre el arreglo censista

    const personasACargo = sistema.censistas[i].personasACargo;

    let posicion = personasACargo.indexOf(cedulaAReasignar);

    if (posicion != -1) {
      personasACargo.splice(posicion, 1); //elimina de su posicion el usuario que reasigno a otro censista
    }
  }

  for (let i = 0; i < sistema.censistas.length; i++) { //recorre el arreglo censista
    const agregarCedula = sistema.censistas[i].usuario;

    if (agregarCedula === cencistaAReasignar) {
      sistema.censistas[i].personasACargo.push(cedulaAReasignar);
    }
  }
  mensaje = "Se reasignó correctamente";
  agregarPendientes();
  mostrarCedulasACargo();
} else {
  mensaje = "Se canceló la reasignación"
}
} else {
  mensaje = "Error, seleccione una opción correcta";
}

document.querySelector("#pMensajeReagsinar").innerHTML = mensaje;
}



function agregarPendientes() { //despliega usuarios pendientes automaticamente
  document.querySelector(
    "#pendientesValidar"
  ).innerHTML = `<option value = "-1"> Seleccionar </option>`;
  for (let i = 0; i < sistema.censistas.length; i++) {
    const objCensista = sistema.censistas[i];

    if (objCensista.usuario.toLowerCase() === usuariologin.toLowerCase()) {
      for (let a = 0; a < objCensista.personasACargo.length; a++) {
        document.querySelector("#pendientesValidar").innerHTML += `
       <option value = "${objCensista.personasACargo[a]}">${objCensista.personasACargo[a]}</option>`;
      }
      break;
    }
  }
}

function agregarCensitas() { //despliega usuarios censistas automaticamente
  document.querySelector(
    "#cencistas"
  ).innerHTML = `<option value = "-1"> Seleccionar </option>`;
  for (let i = 0; i < sistema.censistas.length; i++) {
    const objUsuario = sistema.censistas[i];
    if (objUsuario.usuario.toLowerCase() !== usuariologin.toLowerCase()) {
      //usuariologin se encuentra al inicio de ingresar usuario, es una variable global
      document.querySelector("#cencistas").innerHTML += `
       <option value = "${objUsuario.usuario}">${objUsuario.usuario}</option>`;
    }
  }
}
