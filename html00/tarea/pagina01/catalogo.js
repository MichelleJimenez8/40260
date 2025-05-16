export function cargarCDs(callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = () => {
    const cds = xhttp.responseXML.getElementsByTagName("CD");
    callback(cds);
  };
  xhttp.open("GET", "cd_catalog.xml");
  xhttp.send();
}
  
export function mostrarTabla(cds) {
  let tabla = "<tr><th>Artista</th><th>Título</th></tr>";
  for (let cd of cds) {
    const artista = cd.getElementsByTagName("ARTIST")[0].textContent;
    const titulo = cd.getElementsByTagName("TITLE")[0].textContent;
    tabla += `<tr><td>${artista}</td><td>${titulo}</td></tr>`;
  }
  document.getElementById("demo").innerHTML = tabla;
}
  