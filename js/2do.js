class CuentaBancaria {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }

  ingresar(cantidad) {
    this.saldo += cantidad;
  }

  extraer(cantidad) {
    if (cantidad <= this.saldo) {
      this.saldo -= cantidad;
    } else {
      console.log("Saldo insuficiente");
    }
  }

  informar() {
    console.log(`Titular: ${this.titular}, Saldo: ${this.saldo}`);
  }
}

let cuentaAlex = new CuentaBancaria("Alex");

cuentaAlex.informar();
cuentaAlex.ingresar(100);
cuentaAlex.informar();
cuentaAlex.extraer(30);
cuentaAlex.informar();
