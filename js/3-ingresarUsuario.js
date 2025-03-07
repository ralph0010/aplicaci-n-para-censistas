import { sistemaCenso } from "./sistema/sistema.js";


document.querySelector("#btnLoguear").addEventListener("click", loguearUsuario)
let usuariologin = "";



function loguearUsuario(){
   let mensaje = document.querySelector("#pMensajeDeLogueo");
   try{
      let nombreUsuario = document.querySelector("#txtUsuarioRegistrado").value
      let passUsuario = document.querySelector("#txtContraseñaRegistrada").value
   
      usuariologin = sistemaCenso.loginCensista(nombreUsuario, passUsuario);
      if(usuariologin == null && usuariologin == "" && usuarioLogin == undefined){
         throw new Error("Error inesperado, por favor llamar al desarrollador");
      }
      mostrarBotones("censistaTerciario"); //funcion en secciones
         ocultarMenus("censistaIniciar")//funcion en secciones
         cambiarSeccion("seccionIngresarDatosPersona")//funcion en secciones
      mensaje.innerHTML = "Login exitoso, bienvenido";

   } catch (error){
      mensaje.innerHTML = error;
   }
}




