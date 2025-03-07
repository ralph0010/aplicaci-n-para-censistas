import { sistemaCenso } from "./sistema/sistema.js";

document
  .querySelector("#btnRegistrarCensista")
  .addEventListener("click", registrarUsuarioCensista);
  function registrarUsuarioCensista() {
    let mensaje = document.getElementById("pResultadoCensista");
    try {
      let nombre = document.querySelector("#txtNombreCensista").value;
      let apellido = document.querySelector("#txtApellidoCensista").value;
      let usuario = document.querySelector("#txtUsuario").value;
      let password = document.querySelector("#txtPassword").value;

      sistemaCenso.registrarCensista(nombre, apellido, usuario, password);
      mensaje.innerHTML = "Se realizó el registro con éxito";
    } catch (error) {
      mensaje.innerHTML = error;
    }
}
