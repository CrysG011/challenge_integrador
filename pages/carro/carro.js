// Función para cargar la plantilla cardItem.html
function loadCardItem() {
  const main = document.querySelector(".maincarro");

  fetch("/components/cardItem.html") // Ruta relativa al archivo cardItem.html
    .then((response) => response.text())
    .then((data) => {
      // Aquí  modificar el contenido de la plantilla si es necesario
      main.innerHTML = data;
    });
}
// Carga la plantilla cardItem.html cuando se cargue la página
document.addEventListener("DOMContentLoaded", loadCardItem);
