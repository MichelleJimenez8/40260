import { cargarCDs, mostrarTabla } from './catalogo2.js';

document.getElementById("loadBtn").addEventListener("click", () => {
  cargarCDs(mostrarTabla);
});