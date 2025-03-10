import { sistemaCenso } from "./sistema/sistema.js";

document
  .querySelector("#eliminarPersona")
  .addEventListener("click", eliminarDatosCenso);

function eliminarDatosCenso() {
  let mensaje = document.querySelector("#pMensajeEliminarDatos");
  try{
    let cedulaEliminar = document.querySelector("#cedulaAEliminar").value;
    let seEliminaPersona = sistemaCenso.eliminarPersonaDelSistema(cedulaEliminar);
    if(seEliminaPersona) mensaje.innerHTML = "Se ha eliminado correctamente el usuario";
    else mensaje.innerHTML ="Se ha cancelado con éxito";
  }catch (error){
    mensaje.innerHTML = error;
  }
}
