// Selecciona el botón de hamburguesa
const btn = document.querySelector(".menu-toggle");

// Selecciona el menú horizontal
const menu = document.querySelector(".menu-horizontal");

// Al hacer clic en el botón de hamburguesa
btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Selecciona el elemento con submenú (el <li> de "Informacion")
const submenuItem = document.querySelector(".has-submenu"); // Usa la clase que agregamos en HTML
const submenu = document.querySelector(".menu-vertical");

// Al hacer clic en "Informacion" (en móviles)
submenuItem.addEventListener("click", (e) => {
  // Si el menú principal está activo (es decir, visible en móviles)
  if (menu.classList.contains("active")) {
    // Prevenir que el enlace navegue (opcional, pero mejora UX)
    e.preventDefault();
    // Toggle el submenú
    submenu.classList.toggle("active");
  }
});
