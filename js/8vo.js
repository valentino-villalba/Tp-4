class Persona {
  constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }

  saludar() {
    console.log(
      `Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}`
    );
  }

  despedirse() {
    console.log(`Adiós, me despido. Hasta luego.`);
  }
}

let persona1 = new Persona("Juan", 30, "Ingeniero");
let persona2 = new Persona("María", 25, "Médico");

persona1.saludar();
persona1.despedirse();

persona2.saludar();
persona2.despedirse();
