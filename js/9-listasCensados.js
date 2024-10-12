
function mostrarLista(){ //despliega automaticamente la lista de las estadisticas por departamento de las personas censadas
    
    document.querySelector("#tblListaCensados").innerHTML = "";
    for (let i = 0; i <sistemaDepartamento.departamentos.length; i++){
        const objDepartamento = sistemaDepartamento.departamentos[i];
        const sumaDepenEIndepen = sistemaPersona.contadorOcupacion(objDepartamento.nombre, "Dependiente") + sistemaPersona.contadorOcupacion(objDepartamento.nombre, "Independiente");  
        document.querySelector("#tblListaCensados").innerHTML += `
        <tr>
        <td>${objDepartamento.nombre}</td>
        <td>${sistemaPersona.contadorOcupacion(objDepartamento.nombre,"Estudiante")}</td>
        <td>${sistemaPersona.contadorOcupacion(objDepartamento.nombre,"No Trabaja")}</td>
        <td>${sumaDepenEIndepen}</td>
        <td>${sistemaPersona.porcentajeDepartamento(objDepartamento.nombre)}%</td>
        </tr>`
    }
}
mostrarLista();