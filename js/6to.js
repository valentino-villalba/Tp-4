class Libro {
  constructor(ISBN, titulo, autor, numPaginas) {
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;
  }

  getISBN() {
    return this.ISBN;
  }

  setISBN(ISBN) {
    this.ISBN = ISBN;
  }

  getTitulo() {
    return this.titulo;
  }

  setTitulo(titulo) {
    this.titulo = titulo;
  }

  getAutor() {
    return this.autor;
  }

  setAutor(autor) {
    this.autor = autor;
  }

  getNumPaginas() {
    return this.numPaginas;
  }

  setNumPaginas(numPaginas) {
    this.numPaginas = numPaginas;
  }

  mostrarLibro() {
    console.log(
      `El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas`
    );
  }
}

let libro1 = new Libro(
  "123456",
  "El Señor de los Anillos",
  "J.R.R. Tolkien",
  1000
);
let libro2 = new Libro(
  "789012",
  "Cien años de soledad",
  "Gabriel García Márquez",
  500
);

libro1.mostrarLibro();
libro2.mostrarLibro();

if (libro1.getNumPaginas() > libro2.getNumPaginas()) {
  console.log("Libro 1 tiene más páginas");
} else if (libro1.getNumPaginas() < libro2.getNumPaginas()) {
  console.log("Libro 2 tiene más páginas");
} else {
  console.log("Ambos libros tienen la misma cantidad de páginas");
}
