document
  .querySelector("#btnRegistrarCensista")
  .addEventListener("click", registrarUsuario);
function registrarUsuario() {
  let nombre = document.querySelector("#txtNombreCensista").value;
  let apellido = document.querySelector("#txtApellidoCensista").value;
  let usuario = document.querySelector("#txtUsuario").value;
  let contraseña = document.querySelector("#txtContraseña").value;

  let mensaje; // Por si hay errores al momento de de registrarse
  let existe = false; //Verificar si el usuario ya existe en la clase Sistema.
  let personasAcargao = [];
  for (let i = 0; i < sistema.censistas.length; i++) { //recorre el arreglo censista
    const objCensista = sistema.censistas[i];
    if (objCensista.usuario.toLowerCase() === usuario.toLowerCase()) { //evalua el usuario sin contar mayusculas
      existe = true;
      break;
    }
  }
  if (
    !existe &&
    validarNombreOApellido(nombre) &&
    validarNombreOApellido(apellido) &&
    isNaN(usuario) &&
    contraseñaValida(contraseña)
  ) {
    let objLogin = new Censista(nombre, apellido, usuario, contraseña, personasAcargao);
    sistema.agregarCensista(objLogin); //funcion en clase ObjCensista
    mensaje = "Usuario registrado correctamente"; 
    vaciarDatos("txtRegistroUsuario"); //funcion en biblioteca
  } else  if(!validarNombreOApellido(nombre)){ //funcion en biblioteca
    mensaje = "Ingrese un nombre válido";
  } else if(!validarNombreOApellido(apellido)){
    mensaje = "Ingrese un apellido válido";
  } else if(!isNaN(usuario)){//funcion en biblioteca
    mensaje = "Ingrese un usuario";
  } else if (existe){
    mensaje = "El usuario que ingresó ya existe, por favor ingrese otro usuario";
  } else if (!contraseñaValida(contraseña)){//funcion en biblioteca
    mensaje = "La contraseña debe contener mínimo 5 caracteres, una mayúscula, una minúscula y un número";
  }
  document.querySelector("#pResultadoCensista").innerHTML = mensaje;
}

