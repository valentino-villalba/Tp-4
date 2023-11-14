class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimirDatos() {
    console.log(
      `Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}`
    );
  }
}

let producto1 = new Producto(1, "Producto A", 20);
let producto2 = new Producto(2, "Producto B", 30);
let producto3 = new Producto(3, "Producto C", 25);

let productos = [producto1, producto2, producto3];

for (let producto of productos) {
  producto.imprimirDatos();
}
