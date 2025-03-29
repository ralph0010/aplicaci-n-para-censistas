import { sistemaCenso } from "./sistema/sistema.js";
document.querySelector("#btnMostrarCantidadCensados").addEventListener("click", mostrarCensadosporLista);

mostrarTotalCensados(); //muestra el total de censados 
mostrarTablaDepartamento();  
function mostrarTotalCensados(){
    let tbody = document.querySelector("#tblBodyTotalCensadasYPenValidar");
    tbody.innerHTML ="";
    let censosPendientesValidar = sistemaCenso.obtenerCantCensosSinValidar();
    let totalPersonas = sistemaCenso.personas.length;
    tbody.innerHTML +=`
    <tr>
    <td>${totalPersonas}</td>
    <td>${censosPendientesValidar}</td>
    </tr>`
}

//Muestra los censados mayores de edad y menores de edad
function mostrarCensadosporLista(){
    let mensaje = document.querySelector("#pMostrarSlcCensados"); 
    let departamento = document.querySelector("#slcDepartamentoDatosCensista").value;
    mensaje.innerHTML = "";
    try{
        let menoresEdad = Math.round(sistemaCenso.obtenerPorcentajeMayorOMenorEdad(departamento, false));
        let mayoresEdad= Math.round(sistemaCenso.obtenerPorcentajeMayorOMenorEdad(departamento,true));
        mensaje.innerHTML+=`<table><thead>
        <tr><th>Mayores de Edad</th>
        <th>Menores de Edad</th></tr>
        </thead>
        <tbody>
        <tr>
        <td>${mayoresEdad}%</td>
        <td>${menoresEdad}%</td>
        </tr></tbody></table>`
        
    }catch (error){
        mensaje.innerHTML = error;
    }
}
//Muestra la cantidad de personas censadas por cada departamento
function mostrarTablaDepartamento(){

    let datosDepartamentos =document.querySelector("#tblMostrarDepartamento");
    datosDepartamentos.innerHTML = "";
    sistemaCenso.departamentos.forEach((dep)=>{
        datosDepartamentos.innerHTML+= `
        <tr>
        <td>${dep.nombre}</td>
        <td>${dep.cantidadTotalCensados}</td>
        </tr>`
    })
}