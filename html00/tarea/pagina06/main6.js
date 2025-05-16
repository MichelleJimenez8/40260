import { crearImagenFigura } from './componentes.js';

const app = document.getElementById('app');

app.innerHTML = 
  crearImagenFigura(1, "Mich") + 
  crearImagenFigura(2, "Vane");

const lista = app.querySelectorAll("img");

lista.forEach(img => {
  img.addEventListener("click", () => {
    img.classList.toggle("redonda");
  });
});