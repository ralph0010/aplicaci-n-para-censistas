

document.querySelector("#seccionModificarDatos").addEventListener("click", ocultarSeccionSecundaria)
function ocultarSeccionSecundaria(){
     // ocultarSeccionDeterminada("datosModificados")
      cambiarSeccion("seccionModificarDatos")
}

let cedulaAModificar;

agregarDepartamentos("departamentosModificado");
agregarOcupacion("ocupacionModificado");

document.querySelector("#btnEnviarDatosInvitado").addEventListener("click", censoInvitado)

function censoInvitado(){


            let cedulaInvitado = document.querySelector("#txtCedulaInvitado").value

            if(cedulaInvitado===""){

                  document.querySelector("#pMensajeDatosInvitado").innerHTML = "La cedula no puede ser vacia"

            }else{

            cedulaInvitado = Number(reEscribirCedula(cedulaInvitado)) //paso la cedula a numero

           // existe = false

            if(sistemaPersona.existePersona(cedulaInvitado)===true){  
                  
                  
                  for (let i = 0; i < sistemaPersona.personas.length; i++) {
                  const unaPersona = sistemaPersona.personas[i];

                        if(unaPersona.cedula === cedulaInvitado){
                        
                        if(unaPersona.validado === false){

                              console.log("La persona existe pero no fue censada")

                              document.querySelector("#pMensajeDatosInvitado").innerHTML = "Los datos estan disponibles para modificar"

                              mostrarSeccionDeterminada("datosModificados")
                              cedulaAModificar = cedulaInvitado;

                              document.querySelector("#nombreModificado").value = `${unaPersona.nombre}`
                              document.querySelector("#apellidoModificado").value = `${unaPersona.apellido}`
                              document.querySelector("#edadModificado").value = `${unaPersona.edad}`
                              document.querySelector("#departamentosModificado").value = `${unaPersona.departamento}`
                              document.querySelector("#ocupacionModificado").value = `${unaPersona.ocupacion}`

                              console.log(sistemaPersona.personas)

                              
                              //mostrar campos de texto y combos para poder modificar la info
                              //mostrarInfoYModificar(unaPersona, i, cedulaInvitado)
                              
                              }else{

                                    document.querySelector("#pMensajeDatosInvitado").innerHTML = "El usuario ya fue censado"
                                    //mensaje de error
                              }
                        }
                  }
            
    
            }else{
                  document.querySelector("#pMensajeDatosInvitado").innerHTML = 
                  "La cedula no existe en el registro, si lo desea puede precargar su informacion en la seccion: Ingresar Datos "
            }
      }
}

document.querySelector("#modificarDatosInvitado").addEventListener("click", tomarDatosModificados)

 function tomarDatosModificados(){

      console.log("entra a la funcion que modifica persona")

      let      nombreInvitadoModificada = document.querySelector("#nombreModificado").value
      let      apellidoInvitadoModificada = document.querySelector("#apellidoModificado").value
      let      edadInvitadoModificada = document.querySelector("#edadModificado").value
      let      departamentoInvitadoModificada  = document.querySelector("#departamentosModificado").value
      let      ocupacionInvitadoModificada  = document.querySelector("#ocupacionModificado").value 

      if(!validarNombreOApellido(nombreInvitadoModificada)){

            document.querySelector("#pMensajeDatosInvitado").innerHTML = "Ingrese un nombre valido"
      }else if(!validarNombreOApellido(apellidoInvitadoModificada)){

            //ingrese un apellido valido
            document.querySelector("#pMensajeDatosInvitado").innerHTML = "Ingrese un apellido valido"

      }else if(!cumpleEdad(edadInvitadoModificada)){

            //ingrese una edad valida
            document.querySelector("#pMensajeDatosInvitado").innerHTML = "Ingrese una edad valida"

      }else if(departamentoInvitadoModificada === "-1"){

            //ingrese un departamento valido
            document.querySelector("#pMensajeDatosInvitado").innerHTML = "Debe seleccionar un departamento"

      }else if(ocupacionInvitadoModificada === "-1"){

            //ingrese una ocupacion valida
            document.querySelector("#pMensajeDatosInvitado").innerHTML = "Debe seleccionar una ocupacion"

      }else{

            sistemaPersona.modificarPersona(cedulaAModificar, nombreInvitadoModificada, apellidoInvitadoModificada, edadInvitadoModificada,
                  departamentoInvitadoModificada, ocupacionInvitadoModificada)

            console.log(sistemaPersona.personas)

            document.querySelector("#pMensajeDatosInvitado").innerHTML = "La modificacion se realizo con exito!"

      }
      
      console.log(departamentoInvitadoModificada)
      
     /*  let ObjPersonaModificada = new Persona(nombreInvitadoModificada, apellidoInvitadoModificada, edadInvitadoModificada, 555555,
                                    departamentoInvitadoModificada, ocupacionInvitadoModificada, false)  */
                                     
      
                                     
      
      //console.log(ObjPersonaModificada.cedula)

      //sistemaPersona.agregarPersona(ObjPersonaModificada)

      //console.log(sistemaPersona.personas)

      //asignarACensista(cedulaInvitadoModificada) 

}



 function agregarDepartamentosInv(){ //despliega los departamentos automaticamente

      let departamentos = ""

      for (let i = 0; i < sistemaDepartamento.departamentos.length; i++){
          const Objdepartamento = sistemaDepartamento.departamentos[i];

         departamentos += `<option value = ${Objdepartamento.nombre}> ${Objdepartamento.nombre} </option>`

      }

      return departamentos
  }



function agregarOcupacionInv(){ //despliega las ocupaciones automaticamente

      let ocupaciones = ""

      for (let i = 0; i < sistemaOcupacion.ocupaciones.length; i++){
          const ObjOcupaciones = sistemaOcupacion.ocupaciones[i];

         ocupaciones += `<option value = ${ObjOcupaciones.nombre}> ${ObjOcupaciones.nombre} </option>`

      }
      
      return ocupaciones
  } 


  

//falta mostrar combo desplegable en ocupacion y departamentos