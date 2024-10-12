
document.querySelector("#btnVerificar").addEventListener("click", consultarCensoPreCompletado)

function consultarCensoPreCompletado(){

let cedulaConsultar = document.querySelector("#txtCedula").value

let nuevaCedulaConsultar = Number(reEscribirCedula(cedulaConsultar)) //reescribe la cedula

let preCensado = consultarPreCenso(nuevaCedulaConsultar) //verifica si el usuario esta pre censado

   if(preCensado===false){

      document.querySelector("#pMensajePreCenso").innerHTML = "El usuario no fue pre censado."

   }

   console.log(cedulaConsultar)

   if(cedulaConsultar===""){

      document.querySelector("#pMensajePreCenso").innerHTML = "La cedula no puede ser vacio"
   }

}

function consultarPreCenso(nuevaCedulaConsultar){ //retorna true si esta censado, false en caso contrario

   for (let i = 0; i < sistemaPersona.personas.length; i++){
      const cedulaActual = sistemaPersona.personas[i].cedula;

      preCensado = false

      if(nuevaCedulaConsultar === cedulaActual){
          
         preCensado = true; 

         if(sistemaPersona.personas[i].validado === false){ //si el usuario no fue censado da un mensaje de que esta listo para validar

            document.querySelector("#pMensajePreCenso").innerHTML = 
            `El usuario fue pre censado y esta listo para validar. <br>
             Nombre: ${sistemaPersona.personas[i].nombre} <br>
             Apellido: ${sistemaPersona.personas[i].apellido} <br>
             Edad: ${sistemaPersona.personas[i].edad} <br>
             Cedula: ${sistemaPersona.personas[i].cedula} <br>
             Departamento: ${sistemaPersona.personas[i].departamento} <br>
             Ocupacion: ${sistemaPersona.personas[i].ocupacion} <br>`
            
         }else{

            document.querySelector("#pMensajePreCenso").innerHTML =  //si el usuario ya fue censado da un mensaje de error
            `El usuario ya fue validado! <br>
             Nombre: ${sistemaPersona.personas[i].nombre} <br>
             Apellido: ${sistemaPersona.personas[i].apellido} <br>
             Edad: ${sistemaPersona.personas[i].edad} <br>
             Cedula: ${sistemaPersona.personas[i].cedula} <br>
             Departamento: ${sistemaPersona.personas[i].departamento} <br>
             Ocupacion: ${sistemaPersona.personas[i].ocupacion} <br>`

         }
         break;
      }
   }

   return preCensado
}