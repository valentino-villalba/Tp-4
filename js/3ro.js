class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  modificarPropiedades(nuevoAlto, nuevoAncho) {
    this.alto = nuevoAlto;
    this.ancho = nuevoAncho;
  }
  mostrarPropiedades() {
    console.log(`Alto: ${this.alto}, Ancho: ${this.ancho}`);
  }
  calcularPerimetro() {
    return 2 * (this.alto + this.ancho);
  }
  calcularArea() {
    return this.alto * this.ancho;
  }
}

let miRectangulo = new Rectangulo(5, 10);

miRectangulo.mostrarPropiedades();
console.log("Perímetro:", miRectangulo.calcularPerimetro());
console.log("Área:", miRectangulo.calcularArea());
miRectangulo.modificarPropiedades(8, 12);
miRectangulo.mostrarPropiedades();
