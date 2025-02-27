import { sistemaCenso } from "./sistema/sistema.js";
import { biblioteca } from "./biblioteca.js";

document
  .querySelector("#btnIngresarDatosInvitado")
  .addEventListener("click", ingresarPersonaInvitado);

document
  .querySelector("#btnEnviarDatosPersonas")
  .addEventListener("click", ingresarPersonaCensista);
biblioteca.agregarDepartamentos("slcDepartamentoInvitadoIngresar"); //Funcion en la biblioteca
biblioteca.agregarOcupacion("slcOcupacionInvitado"); //Funcion en la biblioteca

//retorna un string con un mensaje
function mensajeAgregadoCensista(nombre, apellido) {
  return `Se ha agregado correctamente a ${nombre} ${apellido} al sistema`;
}
function mensajeAgregadoInvitado(nombre, apellido) {
  return `${nombre} ${apellido} se agregó correctamente sus datos al censo. Un censista llegará para corroborar sus datos, ¡Gracias!`;
}
function ingresarPersona(
  nombre,
  apellido,
  edad,
  cedula,
  departamento,
  ocupacion,
  esValidado
) {
  //Verificamos la edad no este vacia:
  edad = biblioteca.verificarEdadNoVacia(edad);
  sistemaCenso.agregarPersona(
    nombre,
    apellido,
    edad,
    cedula,
    departamento,
    ocupacion,
    esValidado
  );
}
function ingresarPersonaCensista() {
  let mensaje = document.querySelector("#pMensajeDatosPersonas");
  try{
    let nombre = document.querySelector("#txtNombrePersona").value;
    let apellido = document.querySelector("#txtApellidoPersona").value;
    let edad = document.querySelector("#txtEdadPersona").value;
    let cedula = document.querySelector("#txtCedulaPersona").value;
    let departamento = document.querySelector("#slcDepartamentoDatos").value;
    let ocupacion = document.querySelector("#slcOcupacionDatos").value;
    ingresarPersona(
      nombre,
      apellido,
      edad,
      cedula,
      departamento,
      ocupacion,
      true
    );
    mensaje.innerHTML = mensajeAgregadoCensista(nombre, apellido);
  }catch (error){
    mensaje.innerHTML = error;
  }
}
function ingresarPersonaInvitado() {
  let mensaje = document.querySelector("#pMensajeIngresarInvitado");
  try {
    let nombre = document.querySelector("#txtNombreInvitadoIngresar").value;
    let apellido = document.querySelector("#txtApellidoInvitadoIngresar").value;
    let edad = document.querySelector("#txtEdadInvitadoIngresar").value;
    let cedula = document.querySelector("#txtCedulaInvitadoIngresar").value;
    let departamento = document.querySelector(
      "#slcDepartamentoInvitadoIngresar"
    ).value;
    let ocupacion = document.querySelector("#slcOcupacionInvitado").value;
    ingresarPersona(
      nombre,
      apellido,
      edad,
      cedula,
      departamento,
      ocupacion,
      false
    );
    mensaje.innerHTML = mensajeAgregadoInvitado(nombre, apellido);
  } catch (error) {
    mensaje.innerHTML = error;
  }
}
