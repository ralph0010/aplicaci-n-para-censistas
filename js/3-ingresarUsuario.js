let usuariologin = "";

document.querySelector("#btnLoguear").addEventListener("click", loguearUsuario)


function loguearUsuario(){
    
   let nombreUsuario = document.querySelector("#txtUsuarioRegistrado").value
   let passUsuario = document.querySelector("#txtContraseñaRegistrada").value

   let mensaje;

   if(sistema.loginCorrecto(nombreUsuario, passUsuario)){ //funcion en Objcensista
      mensaje = "Login correcto";

      mostrarBotones("censistaTerciario"); //funcion en secciones
      ocultarMenus("censistaIniciar")//funcion en secciones
      cambiarSeccion("seccionIngresarDatosPersona")//funcion en secciones
      agregarArregloPersonasSinValidar() //funcion en ObjPersona
      usuariologin = nombreUsuario;

      mostrarCedulasACargo(usuariologin)  //funcion en ValidarCensoDeUnaPersona
      
      agregarCensitas(); // La función se encuentra en reasignar censista.
      agregarPendientes(); // La función se encuentra en reasignar censista.
   } else {
      mensaje = "Usuario y/o contraseña incorrectas";
   }
   document.querySelector("#pMensajeDeLogueo").innerHTML = mensaje;
}


document.querySelector("#aRegistrarUsuario").addEventListener("click", irARegistrarUsuario); 
function irARegistrarUsuario(){ //cambia de seccion 
   cambiarSeccion("seccionRegistrarCensista")
}

