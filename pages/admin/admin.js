function loadAdminHeader() {
  const headerAdminContainer = document.querySelector(".headeradmin");

  fetch("/components/headeradmin.html")
    .then((response) => response.text())
    .then((data) => {
      headerAdminContainer.innerHTML = data;
    });
}

// Carga el contenido del headeradmin.html cuando se cargue la página
document.addEventListener("DOMContentLoaded", loadAdminHeader);
