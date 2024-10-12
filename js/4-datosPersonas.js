document.querySelector("#btnEnviarDatosPersonas").addEventListener("click", ingresarPersona);



agregarDepartamentos("slcDepartamentoDatos"); //Funcion en la biblioteca
agregarOcupacion("slcOcupacionDatos"); //Funcion en la biblioteca

function ingresarPersona(){
    let nombre = document.querySelector("#txtNombrePersona").value;
    let apellido = document.querySelector("#txtApellidoPersona").value;
    let edad = Number(document.querySelector("#txtEdadPersona").value);
    let cedula = document.querySelector("#txtCedulaPersona").value;
    let departamento = document.querySelector("#slcDepartamentoDatos").value;
    let ocupacion = document.querySelector("#slcOcupacionDatos").value;
    cedula = reEscribirCedula(cedula); //funcion en biblioteca
    let cedulaNumber = Number(cedula); // Lo usaremos para comparar la clase persona

    let mensaje;
    

    if (!sistemaPersona.existePersona(cedulaNumber)){ //funcion en clase personas
    if(validarNombreOApellido(nombre) && validarNombreOApellido(apellido) && cumpleEdad(edad) && departamento !== "-1" && ocupacion !== "-1" && validarCedulaCumple(cedula)){ //funciones en biblioteca
        mensaje = "Persona ingresada correctamente";
        let objPersona = new Persona (nombre, apellido, edad, cedulaNumber, departamento, ocupacion, true) //creo un nuevo objeto de persona con los datos ingresados
        sistemaPersona.agregarPersona(objPersona); //funcion en ObjPersona
        vaciarDatos("txtRegistrarPersonaCensista"); //funcion en biblioteca
        datosEnSeleccionar("slcRegistrarPersonaCensista"); //funcion en biblioteca
    } else if(!validarNombreOApellido(nombre)){ //funcion en biblioteca
        mensaje = "Escriba un nombre válido";
    } else if (!validarNombreOApellido(apellido)){ //funcion en biblioteca
        mensaje = "Escriba un apellido válido";
    } else if (!cumpleEdad(edad)){ //funcion en biblioteca
        mensaje = "La edad solo puede ser entre 0 y 130";
    } else if (!validarCedulaCumple(cedula)){ //funcion en biblioteca
        mensaje = "Cédula no válida, ingrese una cédula válida";
    } else if (departamento === "-1"){
        mensaje = `La opción "Seleccionar" en departamentos no es válido`;
    } else if (ocupacion === "-1"){
        mensaje = `La opción "Seleccionar" en ocupación no es válido`;
    } 
} else {
    mensaje = "Cédula ya registrada previamente"
}



    document.querySelector("#pMensajeDatosPersonas").innerHTML = mensaje;
    mostrarLista(); 
    mostrarTablaDepartamento();
}



function cumpleEdad(edad){ //verifica si la edad es un valor valido
    let cumple = false;
    if (!isNaN(edad) && edad >= 0 && edad <= 130){
        cumple = true;
    }

    if(edad===""){

        cumple=false
    }
    
    return cumple;
}







