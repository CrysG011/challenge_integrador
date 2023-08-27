function loadComponent(url, containerId) {
  const container = document.getElementById(containerId);
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      container.innerHTML = data;
    });
}

// Cargar header.html en el div con id "header"
loadComponent("/components/header.html", "header");

// Cargar footer.html en el div con id "footer"
loadComponent("/components/footer.html", "footer");

// Función para cargar y reemplazar contenido de la tarjeta
function loadCardComponent(
  imageUrl,
  category,
  title,
  price,
  payment,
  containerId
) {
  fetch("/components/cardItem.html")
    .then((response) => response.text())
    .then((data) => {
      // Reemplazar los valores de los parámetros en el componente
      data = data.replace("IMAGEN_URL", imageUrl);
      data = data.replace("CATEGORÍA", category);
      data = data.replace("TÍTULO", title);
      data = data.replace("PRECIO", price);
      data = data.replace("PAGO", payment);

      // Crear un div temporal para manipular el contenido y luego agregarlo al contenedor
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = data;
      const container = document.getElementById(containerId);
      container.appendChild(tempDiv.firstChild);
    });
}

// Cargar componentes en los artículos
loadCardComponent(
  "/img/star-wars/trooper-1.webp",
  "STAR WARS",
  "STORMTROOPER LIGHTSABER",
  "$ 1799,99.-",
  "3 CUOTAS SIN INTERÉS",
  "article1"
);
loadCardComponent(
  "/img/pokemon/pidgeotto-1.webp",
  "POKEMON",
  "PIDGEOTTO",
  "$ 1799,99.-",
  "3 CUOTAS SIN INTERÉS",
  "article2"
);
loadCardComponent(
  "/img/harry-potter/luna-1.webp",
  "HARRY POTTER",
  "LUNA LOVEGOOD LION MASK",
  "$ 1799,99.-",
  "3 CUOTAS SIN INTERÉS",
  "article3"
);

// Cargar noticias en los contenedores
const newsContainers = document.querySelectorAll(".news-container");
newsContainers.forEach((container) => {
  loadComponent("/components/news.html", container.id);
});
