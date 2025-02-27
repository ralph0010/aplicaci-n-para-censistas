 
export class Censista {
  constructor(nombre, apellido, usuario, password, personasACargo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.usuario = usuario;
    this.password = password;
    this.personasACargo = personasACargo;
  }
}

//datos de censistas para probar funcionalidades
export let juegoDePruebaCensistas = [new Censista("Juan", "Pedro", "JuanPedro01", "JuanPedro1", []), //Usuarios precargados que pide el obligatorio
new Censista("Luis", "Rodriguez", "Luisrodri20", "Luisro20", []),
new Censista("Juana", "Fidalgo", "juanita2023", "juAna2023", []),];
