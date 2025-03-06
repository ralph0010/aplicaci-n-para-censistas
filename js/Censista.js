import { biblioteca } from "./biblioteca.js";
export class Censista {
  constructor(nombre, apellido, usuario, password) {
    this.nombre = biblioteca.verficarCampoNoVacio(nombre, "nombre");
    this.apellido = biblioteca.verficarCampoNoVacio(apellido, "apellido");
    this.usuario = biblioteca.verficarCampoNoVacio(usuario, "usuario");
    this.password = biblioteca.verficarCampoNoVacio(password, "contraseña");
    this.personasACargo = [];
  }
  
  validarCensista(){
    this.#validarPassword();
  }
  #validarPassword(){
    if(this.password.length < 5) throw new Error("La contraseña debe contener un mínimo de 5 caracteres");
    if(!this.#existeMayMinNum()) throw new Error(`La contraseña debe contener 1 mayúscula, 
      1 minúscula y 1 número`)
  }
  #existeMayMinNum(){
    let existeNum = false;
    let existeMay = false;
    let existeMin = false;
    for(let i = 0; i <this.password.length || existeMay && existeNum && existeMin ; i++){
      let letra = this.password[i];
      if (letra === letra.toLowerCase()) existeMin = true;
      else if(letra === letra.toUpperCase()) existeMay = true;
      else if(!isNaN(letra)) existeNum = true;
    }
    let cumple = existeMay && existeMin && existeNum; 
    return cumple;
  }
}

//datos de censistas para probar funcionalidades
export let juegoDePruebaCensistas = [new Censista("Juan", "Pedro", "JuanPedro01", "JuanPedro1", []), //Usuarios precargados que pide el obligatorio
new Censista("Luis", "Rodriguez", "Luisrodri20", "Luisro20", []),
new Censista("Juana", "Fidalgo", "juanita2023", "juAna2023", []),];
