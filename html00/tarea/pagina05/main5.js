import { crearImagenFigura } from './componentes.js';

const contenedor = document.getElementById("demo");

const contenido = `
  <p>hola</p>
  ${crearImagenFigura(1)}
  ${crearImagenFigura(2, "Alice")}
  ${crearImagenFigura(3, "Bob")}
`;

contenedor.innerHTML = contenido;