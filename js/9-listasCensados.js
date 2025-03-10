import {sistemaCenso} from "./sistema/sistema.js"

function mostrarLista(){ //despliega automaticamente la lista de las estadisticas por departamento de las personas censadas
    let totalCensados = sistemaCenso.personas.length;
    let listado= "";
    sistemaCenso.departamentos.forEach((departamento)=>{
        listado+=`
        <tr>
        <td>${departamento.nombre}</td>
        <td>${departamento.cantidadEstudiantes}</td>
        <td>${departamento.cantNoTrabajan}</td>
        <td>${departamento.cantDependientesYIndepen}</td>
        <td>${departamento.calcularPorcentaje(totalCensados)}%</td>
        </tr>`
    })
    document.querySelector("#tblListaCensados").innerHTML = listado;
}
mostrarLista();