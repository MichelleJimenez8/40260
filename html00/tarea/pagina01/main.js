import { cargarCDs, mostrarTabla } from './catalogo.js';

document.getElementById("loadBtn").addEventListener("click", () => {
  cargarCDs(mostrarTabla);
});
