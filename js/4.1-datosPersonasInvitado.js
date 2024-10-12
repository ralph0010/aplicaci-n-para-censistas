document.querySelector("#btnIngresarDatosInvitado").addEventListener("click", ingresarPersonaInvitado);



agregarDepartamentos("slcDepartamentoInvitadoIngresar"); //Funcion en la biblioteca
agregarOcupacion("slcOcupacionInvitado"); //Funcion en la biblioteca

function ingresarPersonaInvitado(){
    let nombre = document.querySelector("#txtNombreInvitadoIngresar").value;
    let apellido = document.querySelector("#txtApellidoInvitadoIngresar").value;
    let edad = Number(document.querySelector("#txtEdadInvitadoIngresar").value);
    let cedula = document.querySelector("#txtCedulaInvitadoIngresar").value;
    let departamento = document.querySelector("#slcDepartamentoInvitadoIngresar").value;
    let ocupacion = document.querySelector("#slcOcupacionInvitado").value;

    cedula = reEscribirCedula(cedula);
    let cedulaNumber = Number(cedula); // Lo usaremos para comparar la clase persona

    let mensaje;
    

    console.log(cedulaNumber)

    if (!sistemaPersona.existePersona(cedulaNumber)){
    if(validarNombreOApellido(nombre) && validarNombreOApellido(apellido) && cumpleEdad(edad) && departamento !== "-1" && ocupacion !== "-1" && validarCedulaCumple(cedula)){
        let objPersona = new Persona (nombre, apellido, edad, cedulaNumber, departamento, ocupacion, false)
        sistemaPersona.agregarPersona(objPersona);
        sistema.asignarACensista(cedulaNumber);
        mensaje = "Ingreso al sistema correctamente. El censista asignado es: " + sistema.mostrarCensistaAsignado(cedulaNumber);
        vaciarDatos("txtRegistroInvitado");
        datosEnSeleccionar("slcRegistroInvitado")

    } else if(!validarNombreOApellido(nombre)){
        mensaje = "Escriba un nombre válido";
    } else if (!validarNombreOApellido(apellido)){
        mensaje = "Escriba un apellido válido";
    } else if (!cumpleEdad(edad)){
        mensaje = "La edad solo puede ser entre 0 y 130";
    } else if (!validarCedulaCumple(cedula)){
        mensaje = "Cédula no válida, ingrese una cédula válida";
    } else if (departamento === "-1"){
        mensaje = `La opción "Seleccionar" en departamentos no es válido`;
    } else if (ocupacion === "-1"){
        mensaje = `La opción "Seleccionar" en ocupación no es válido`;
    } 
} else {
    mensaje = "Cédula ya registrada previamente"
}



    document.querySelector("#pMensajeIngresarInvitado").innerHTML = mensaje;
    mostrarLista();
    mostrarTablaDepartamento();
}




