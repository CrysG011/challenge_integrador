function loadComponent(url, containerId) {
  const container = document.getElementById(containerId);
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      container.innerHTML = data;
    });
}

// Cargar headeradmin.html en el div con id "headeradmin"
loadComponent("/components/headeradmin.html", "headeradmin");

// Cargar footeradmin.html en el div con id "footeradmin"
loadComponent("/components/footeradmin.html", "footeradmin");
