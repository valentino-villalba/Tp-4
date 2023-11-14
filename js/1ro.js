class Auto {
    constructor(color, marca, modelo, encendido = false) {
      this.color = color;
      this.marca = marca;
      this.modelo = modelo;
      this.encendido = encendido;
    }
  
    encender() {
      this.encendido = true;
      console.log("Auto encendido");
    }
  
    apagar() {
      this.encendido = false;
      console.log("El auto se apagó");
    }
  }
  
  let miAuto = new Auto("Rojo", "Toyota", "Corolla");
  
  miAuto.encender();
  miAuto.apagar();