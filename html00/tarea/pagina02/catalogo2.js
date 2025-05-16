export async function cargarCDs(callback) {
    try {
      const response = await fetch('cd_catalog.xml');
      const text = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(text, "application/xml");
      const cds = xmlDoc.getElementsByTagName("CD");
      callback(cds);
    } catch (error) {
      console.error('Error al cargar XML:', error);
    }
  }
  
  export function mostrarTabla(cds) {
    let tabla = "<tr><th>Artista</th><th>Título</th></tr>";
    Array.from(cds).forEach(cd => {
      const artista = cd.getElementsByTagName("ARTIST")[0]?.textContent || "N/A";
      const titulo = cd.getElementsByTagName("TITLE")[0]?.textContent || "N/A";
      tabla += `<tr><td>${artista}</td><td>${titulo}</td></tr>`;
    });
    document.getElementById("demo").innerHTML = tabla;
  }