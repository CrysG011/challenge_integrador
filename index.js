function loadComponent(url, containerId) {
    const container = document.getElementById(containerId);
    fetch(url)
        .then(response => response.text())
        .then(data => {
            container.innerHTML = data;
        });
}

// Cargar header.html en el div con id "header"
loadComponent("/components/header.html", "header");

// Cargar footer.html en el div con id "footer"
loadComponent("/components/footer.html", "footer");

// Seleccionar todos los contenedores de noticias por clase y cargar el contenido
const newsContainers = document.querySelectorAll('.news-container');
newsContainers.forEach(container => {
    loadComponent("/components/news.html", container.id);
});
