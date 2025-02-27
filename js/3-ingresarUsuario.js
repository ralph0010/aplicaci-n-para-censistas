import { sistema } from "./sistema";

let usuariologin = "";

document.querySelector("#btnLoguear").addEventListener("click", loguearUsuario)


function loguearUsuario(){
   try{
      let nombreUsuario = document.querySelector("#txtUsuarioRegistrado").value
      let passUsuario = document.querySelector("#txtContraseñaRegistrada").value
   
      let mensaje = document.querySelector("#pMensajeDeLogueo");
      usuariologin = sistema.loginCensista(nombreUsuario, passUsuario);
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
      mensaje.innerHTML = error.message
   }
}


document.querySelector("#aRegistrarUsuario").addEventListener("click", irARegistrarUsuario); 
function irARegistrarUsuario(){ //cambia de seccion 
   cambiarSeccion("seccionRegistrarCensista")
}

