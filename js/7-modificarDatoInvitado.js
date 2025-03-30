import { biblioteca } from "./biblioteca.js";
import { sistemaCenso } from "./sistema/sistema.js";
let cedulaAModificar = "";
document
  .querySelector("#btnSeccionIngresoInvitado")
  .addEventListener("click", ocultarSeccionSecundaria);
function ocultarSeccionSecundaria() {
  cambiarSeccion("btnSeccionIngresoInvitado");
}
document
  .querySelector("#btnEnviarDatosInvitado")
  .addEventListener("click", modificarDatosInvitado);

document.querySelector("#modificarDatosInvitado").addEventListener("click", tomarDatosModificados) 
function modificarDatosInvitado() {
  let mensaje = document.querySelector("#pMensajeDatosInvitado");
  mensaje.innerHTML = "";
  try {
    let cedula = document.querySelector("#txtCedulaInvitado").value;
    const personaObtenida =
      sistemaCenso.obtenerPersonaParaModificarDatos(cedula);
      document.querySelector("#pMensajeDatosModificados").innerHTML="";
    console.log("paso las pruebas: " + personaObtenida.nombre);
    desplegarFormularioModificarDatos(personaObtenida);
    cedulaAModificar = personaObtenida.cedula;
    console.log(cedulaAModificar);
    mensaje.innerHTML = "Los datos se encuentra disponibles para modificar";

    
  } catch (error) {
    mensaje.innerHTML = error;
  }
}
let nombreModificado = document.querySelector("#nombreModificado");
let apellidoModificado = document.querySelector("#apellidoModificado");
let edadModificado = document.querySelector("#edadModificado");
let departamentoModificado = document.querySelector("#departamentosModificado");
let ocupacionModificado = document.querySelector("#ocupacionModificado");

function desplegarFormularioModificarDatos(personaObjecto) {
  nombreModificado.value = personaObjecto.nombre;
  apellidoModificado.value = personaObjecto.apellido;
  edadModificado.value = personaObjecto.edad;
  departamentoModificado.value = personaObjecto.obtenerIdDepartamento();
  ocupacionModificado.value = personaObjecto.obtenerIdOcupacion();

  mostrarSeccionDeterminada("datosModificados");
}

function tomarDatosModificados() {
  let mensaje = document.querySelector("#pMensajeDatosModificados");

  try {
    if (confirm("Desea reemplazar sus datos")) {
      sistemaCenso.modificarDatos(
        nombreModificado.value,
        apellidoModificado.value,
        edadModificado.value,
        cedulaAModificar,
        departamentoModificado.value,
        ocupacionModificado.value,
        false
      );
      document.querySelector("#datosModificados").style.display = "none";
      mensaje.innerHTML = "Se reemplazó los datos con éxito";
      mensaje.style.display="block";
      resetear();
      console.log("verificar reseteo: " );
      console.log(sistemaCenso.personas );
    }
  } catch (error) {
    mensaje.innerHTML = error;
  } 
}
function resetear(){
  cedulaAModificar="";
  nombreModificado.value="";
  apellidoModificado.value="";
  edadModificado.value="";
  departamentoModificado.value="";
  ocupacionModificado.value="";
  document.querySelector("#pMensajeDatosInvitado").innerHTML="";
}
