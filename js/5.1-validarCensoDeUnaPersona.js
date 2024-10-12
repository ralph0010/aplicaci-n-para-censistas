document.querySelector("#btnValidarPersona").addEventListener("click", validarPersona)

function validarPersona(){

   let cedulaValidar = document.querySelector("#txtCedulaValidar").value

   let nuevaCedulaValidar = Number(reEscribirCedula(cedulaValidar)) //funcion en biblioteca

   let listoParaValidar = verificoCedulaYValidacion(nuevaCedulaValidar) //funcion en biblioteca

   if(listoParaValidar === false){ //evalua si el usuario esta listo para validar

      console.log("El usuario no fue pre censado")

      document.querySelector("#pMensajeValidarPersona").innerHTML = "El usuario no fue pre censado"

   }
   
   if(cedulaValidar==="-1"){

      document.querySelector("#pMensajeValidarPersona").innerHTML = "La cedula no puede ser vacio"
   }
   
}


function verificoCedulaYValidacion(nuevaCedulaValidar){ //funcion que retorna true si el usuario esta listo para validar

listoParaValidar = false

   for (let i = 0; i < sistemaPersona.personas.length; i++){
      const objPersona = sistemaPersona.personas[i];

      if(nuevaCedulaValidar === objPersona.cedula){
let confirmar = confirm(`Está seguro que desea validar a ${objPersona.nombre} ${objPersona.apellido}`) //mensaje de alerta
         listoParaValidar = true; 

         if(objPersona.validado === false){
            if(confirmar){
            objPersona.validado = true;

          //  console.log("El usuario fue validado correctamente")
            document.querySelector("#pMensajeValidarPersona").innerHTML =
            `El usuario fue validado correctamente! <br>
            Nombre: ${sistemaPersona.personas[i].nombre} <br>
            Apellido: ${sistemaPersona.personas[i].apellido} <br>
            Edad: ${sistemaPersona.personas[i].edad} <br>
            Cedula: ${sistemaPersona.personas[i].cedula} <br>
            Departamento: ${sistemaPersona.personas[i].departamento} <br>
            Ocupacion: ${sistemaPersona.personas[i].ocupacion} <br>`
            
            eliminarPersonaDelArray(nuevaCedulaValidar)
            sistema.eliminarUnaPersonaACargo(nuevaCedulaValidar)
            
            agregarPendientes();
            mostrarCedulasACargo();
         } else{
            document.querySelector("#pMensajeValidarPersona").innerHTML = "La validación fue cancelada";
      }

         }else{

            console.log("El usuario ya fue validado")
            document.querySelector("#pMensajeValidarPersona").innerHTML = 
            `El usuario ya habia sido validado anteriormente. <br>
            Nombre: ${sistemaPersona.personas[i].nombre} <br>
            Apellido: ${sistemaPersona.personas[i].apellido} <br>
            Edad: ${sistemaPersona.personas[i].edad} <br>
            Cedula: ${sistemaPersona.personas[i].cedula} <br>
            Departamento: ${sistemaPersona.personas[i].departamento} <br>
            Ocupacion: ${sistemaPersona.personas[i].ocupacion} <br>`

         }

         console.log(listoParaValidar)

         break;
      }
   
   }

   console.log(listoParaValidar)

   return listoParaValidar

}

mostrarCedulasACargo();

function mostrarCedulasACargo(){
   let usuario = usuariologin;
   console.log(usuariologin)

   document.querySelector("#txtCedulaValidar").innerHTML = `<option value = "-1">Seleccionar</option>`

   for (let i = 0; i < sistema.censistas.length; i++) {
      const unCensista = sistema.censistas[i]

      if(unCensista.usuario.toLowerCase()===usuario.toLowerCase()){

         for (let a = 0; a < unCensista.personasACargo.length; a++) {
               const unaCedula = unCensista.personasACargo[a];

               document.querySelector("#txtCedulaValidar").innerHTML += `<option value = ${unaCedula}>${unaCedula}</option>`
               
         }
      }
      
   }

}
