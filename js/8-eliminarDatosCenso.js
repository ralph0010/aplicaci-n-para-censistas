document
  .querySelector("#eliminarPersona")
  .addEventListener("click", eliminarDatosCenso);

function eliminarDatosCenso() {
  let cedulaEliminar = document.querySelector("#cedulaAEliminar").value;

  if (cedulaEliminar === "") {
    document.querySelector("#pMensajeEliminarDatos").innerHTML =
      "La cedula no puede ser vacio";
  } else {
    //invocar a la funcion reescribir cedula para que retorne solo numeros
    cedulaEliminar = Number(reEscribirCedula(cedulaEliminar));

    existeCedula = false;

    for (let i = 0; i < sistemaPersona.personas.length; i++) {
      //recorro el arreglo personas
      const unaPersona = sistemaPersona.personas[i];

      if (unaPersona.cedula === cedulaEliminar) {
        //verifico si la cedula encontrada de una persona es la cedula a eliminar

        existeCedula = true; //si llega a esta instancia, la persona existe

        if (unaPersona.validado === false) {
          //verifico que la persona no haya sido validada para eliminar

          let confirmacion = confirm(
            `¿Está segura/o que desea eliminar a ${unaPersona.nombre} ${unaPersona.apellido} del censo`
          );

          if (confirmacion) {
            sistemaPersona.personas.splice(i, 1); //elimino la persona
            document.querySelector("#pMensajeEliminarDatos").innerHTML =
              "La persona fue eliminada correctamente";

            sistema.eliminarUnaPersonaACargo(cedulaEliminar);
            eliminarPersonaDelArray(cedulaEliminar); //Elimino la persona del array personasSinValidar (se encuentra objPersonas)
            agregarPendientes();
          } else{
            document.querySelector("#pMensajeEliminarDatos").innerHTML = "Se canceló el proceso de eliminación"
          }

          console.log(sistemaPersona.personas);
          break;
        } else {
          //si la persona fue validada, no puedo eliminarla

          //la persona ya fue validada y no es posible eliminarla
          document.querySelector("#pMensajeEliminarDatos").innerHTML =
            "La persona ya fue validada y no es posible eliminarla";
          break;
        }
      }
    }

    if (!existeCedula) {
      //si la persona no existe, muestro mensaje de error

      //la cedula ingresada no ha sido pre cargada en el sistema
      document.querySelector("#pMensajeEliminarDatos").innerHTML =
        "La cedula ingresada no ha sido pre cargada en el sistema";
    }
  }
}
