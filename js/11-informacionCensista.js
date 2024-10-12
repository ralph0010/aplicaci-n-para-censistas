function mostrarTotalCensados(){
    let totalCensados = sistemaPersona.personas.length
    document.querySelector("#pMensajeTotalCensados").innerHTML = "El total de personas censadas hasta el momento es de: " + totalCensados;
    document.querySelector("#pMensajePendientesValidar").innerHTML = "El porcentaje de personas pendientes a validar son: " + sistemaPersona.contadorPendientesAValidar() + "%";
}
mostrarTotalCensados(); //muestra el total de censados 
mostrarlistaDepartamento(); //muestra los departamentos desplegados 
mostrarTablaDepartamento(); //muestra los departamentos en una tabla 

document.querySelector("#btnMostrarCantidadCensados").addEventListener("click", mostrarCensadosporLista);
function mostrarCensadosporLista(){
    let departamento = document.querySelector("#slcDepartamentoDatosCensista").value;
    let mensajeMenores;
    let mensjaeMayores;
    if(departamento !== "-1"){
    mensajeMenores = `El porcentaje censados de menores del departamento ${departamento} es: ${sistemaPersona.contadorEdadDepartamento(departamento, 0, 18)}%`;
    mensjaeMayores = `El porcentaje censados de mayores del departamento ${departamento} es: ${sistemaPersona.contadorEdadDepartamento(departamento, 18, 131)}%`; 
    console.log(departamento)
    document.querySelector("#pMostrarSlcCensados").innerHTML = mensajeMenores + "<br>" + mensjaeMayores;
}else{
    document.querySelector("#pMostrarSlcCensados").innerHTML = "Seleccionar no es una opción válida";
}
}



function mostrarlistaDepartamento(){
    document.querySelector("#slcDepartamentoDatosCensista").innerHTML = `<option value = "-1"> Seleccionar </option>`;
    for (let i = 0; i < sistemaDepartamento.departamentos.length; i++){
        const Objdepartamento = sistemaDepartamento.departamentos[i];
        document.querySelector("#slcDepartamentoDatosCensista").innerHTML += `
        <option value = "${Objdepartamento.nombre}">${Objdepartamento.nombre}</option>`;
    }
}

function mostrarTablaDepartamento(){
    document.querySelector("#tblMostrarDepartamento").innerHTML = "";
    for(let i = 0; i < sistemaDepartamento.departamentos.length; i++){
        const Objdepartamento = sistemaDepartamento.departamentos[i];
        document.querySelector("#tblMostrarDepartamento").innerHTML += `
        <tr>
        <td>${Objdepartamento.nombre}</td>
        <td>${sistemaPersona.contadorPersonasDepartamento(Objdepartamento.nombre)}</td>
        </tr>`
    }
}