export function crearImagenFigura(id, nombre = "Desconocido") {
    const url = `https://picsum.photos/id/${id}/200/200`;
    return `
      <figure>
        <img src="${url}" alt="${nombre}" class="redonda">
        <figcaption>${nombre}</figcaption>
      </figure>
    `;
  }