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
    // for (let i = 0; i <sistemaCenso.departamentos.length; i++){
    //     const objDepartamento = sistemaDepartamento.departamentos[i];
    //     const sumaDepenEIndepen = sistemaPersona.contadorOcupacion(objDepartamento.nombre, "Dependiente") + sistemaPersona.contadorOcupacion(objDepartamento.nombre, "Independiente");  
    //     document.querySelector("#tblListaCensados").innerHTML += 
    // }
}
mostrarLista();