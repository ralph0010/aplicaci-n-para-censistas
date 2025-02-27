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
         agregarArregloPersonasSinValidar() //funcion en ObjPersona
      // if(sistema.loginCensista(nombreUsuario, passUsuario)){ //funcion en Objcensista
      //    mensaje = "Login correcto";
   
      //    mostrarBotones("censistaTerciario"); //funcion en secciones
      //    ocultarMenus("censistaIniciar")//funcion en secciones
      //    cambiarSeccion("seccionIngresarDatosPersona")//funcion en secciones
      //    agregarArregloPersonasSinValidar() //funcion en ObjPersona
      //    usuariologin = nombreUsuario;
   
      //    mostrarCedulasACargo(usuariologin)  //funcion en ValidarCensoDeUnaPersona
         
      //    agregarCensitas(); // La función se encuentra en reasignar censista.
      //    agregarPendientes(); // La función se encuentra en reasignar censista.
      // } else {
      //    mensaje = "Usuario y/o contraseña incorrectas";
      // }
      mensaje.innerHTML = "Login exitoso, bienvenido";

   } catch (error){
      mensaje.innerHTML = error;
   }
}


document.querySelector("#aRegistrarUsuario").addEventListener("click", irARegistrarUsuario); 
function irARegistrarUsuario(){ //cambia de seccion 
   cambiarSeccion("seccionRegistrarCensista")
}

