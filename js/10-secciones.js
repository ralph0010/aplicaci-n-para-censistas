let botones = document.querySelectorAll(".btn"); //creamos una variable que será como un array que contiene todas las clases btn dentro de "<li> del html"
for (let i = 0; i < botones.length; i++) {
  //Recorremos el array de botones
  const boton = botones[i]; //Creamos otra variable que se modificará según la repetitiva, y va contener el array de botones en lista
  boton.addEventListener("click", mostrarSeccion); // Para cada boton hacemos un llamado en el cual ejecutará la función de mostrarSeccion
}

ocultarMenus("secundario");
ocultarSecciones();

let botonesInicio = document.querySelectorAll(".inicio");  
for (let i = 0; i < botonesInicio.length; i++) {
  const botonInicio = botonesInicio[i];
  botonInicio.addEventListener("click", inicio);
}
document.querySelector("#btnModoInvitado").addEventListener("click", inicio);
function inicio() {
  let inicio = this.getAttribute("id");
  let final = inicio.substring(7);
  if (final === "Invitado") {
    ocultarMenus("inicio");
    mostrarBotones("invitado");
    cambiarSeccion("seccionIngresoInvitado")
  } else if (final === "Censista") {
    modoCensista();
  }
}

document
  .querySelector("#btnModoInicio")
  .addEventListener("click", volverInicio);
function volverInicio() {
  ocultarSecciones();
  ocultarMenus("secundario");
  mostrarBotones("inicio");
}

function ocultarSecciones() {
  let secciones = document.querySelectorAll(".seccion"); //Creamos una variable que contiene un array de la clase seccion dentro de los divs del html.

  for (let i = 0; i < secciones.length; i++) {
    //Hacemos una recorrida del array de secciones
    const seccion = secciones[i]; //Creamos otra variable que va a contener la posición del array según la repetitiva
    seccion.style.display = "none"; // En cada repetitiva de la clase seccion lo ocultamos
  }
}

function mostrarSeccion() {
  ocultarSecciones(); //Llamamos a la funcion y ocultamos todas las secciones del HTML inicialmente
  //console.log(this);
  let idBoton = this.getAttribute("id"); //debido a la creación de la variable "universal" botones (al inicio del todo), al seleccionar las clases .btn con un con un click, le asignamos el valor id a la variable
  let idSeccion = idBoton.charAt(3).toLowerCase() + idBoton.substring(4); //Debido que la diferencia entre el id que se encuentra con la clase btn y de la clase seccion. Es una una diferencia de las primeras 3 letras y Mayusculas le modificamos para llegar al id de la clase seccion
  cambiarSeccion(idSeccion); //Llamamos a la funcion y le pasamos el parametro obtenido
}

function cambiarSeccion(nuevaSeccion) {
  ocultarSecciones(); //Llamamos la función para que inicialmente nos muestre todas las secciones ocultas
  document.querySelector("#" + nuevaSeccion).style.display = "block"; //Le pasamos el id con el parametro y le asignamos que muestre dicho id
}

function ocultarMenus(tipo) {
  let seccionMenu = document.querySelectorAll("." + tipo);

  for (let i = 0; i < seccionMenu.length; i++) {
    const seccion = seccionMenu[i];
    seccion.style.display = "none";
  }
}

function modoCensista() {
  ocultarMenus("inicio");
  mostrarBotones("censistaIniciar");
  cambiarSeccion("seccionIngresarUsuario");
}

function mostrarBotones(tipo) {
  let botonesMostrar = document.querySelectorAll("." + tipo);
  for (let i = 0; i < botonesMostrar.length; i++) {
    const boton = botonesMostrar[i];
    boton.style.display = "block";
  }
}

function ocultarSeccionDeterminada(id){
  document.querySelector("#"+id).style.display = "none";
}

function mostrarSeccionDeterminada(id){
  document.querySelector("#"+id).style.display = "block"
}