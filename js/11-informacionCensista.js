import { biblioteca } from "./biblioteca.js";
import { sistemaCenso } from "./sistema/sistema.js";
document.querySelector("#btnMostrarCantidadCensados").addEventListener("click", mostrarCensadosporLista);

function mostrarTotalCensados(){
    let totalCensados = sistemaPersona.personas.length
    document.querySelector("#pMensajeTotalCensados").innerHTML = "El total de personas censadas hasta el momento es de: " + totalCensados;
    document.querySelector("#pMensajePendientesValidar").innerHTML = "El porcentaje de personas pendientes a validar son: " + sistemaPersona.contadorPendientesAValidar() + "%";
}
// mostrarTotalCensados(); //muestra el total de censados 
// mostrarTablaDepartamento(); //muestra los departamentos en una tabla 

//Muestra los censados mayores de edad y menores de edad
function mostrarCensadosporLista(){
    let mensaje = document.querySelector("#pMostrarSlcCensados"); 
    let departamento = document.querySelector("#slcDepartamentoDatosCensista").value;
    mensaje.innerHTML = "";
    try{
        let menoresEdad = sistemaCenso.obtenerCantMayoresOMenores(departamento, false);
        let mayoresEdad= sistemaCenso.obtenerCantMayoresOMenores(departamento,true);
        mensaje.innerHTML+=`<table><thead>
        <tr><th>Mayores de Edad</th>
        <th>Menores de Edad</th></tr>
        </thead>
        <tbody>
        <tr>
        <td>${mayoresEdad}</td>
        <td>${menoresEdad}</td>
        </tr></tbody></table>`
        
    }catch (error){
        mensaje.innerHTML = error;
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