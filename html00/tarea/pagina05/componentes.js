export function crearImagenFigura(id, nombre = "John") {
    return `
      <figure>
        <img src="https://picsum.photos/id/${id}/200/200" alt="Imagen aleatoria ${id}">
        <figcaption>${nombre}</figcaption>
      </figure>
    `;
  }