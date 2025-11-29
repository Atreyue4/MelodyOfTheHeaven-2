// Selecciona el formulario de contacto
const contactForm = document.querySelector("#contactanos form");

// Agrega un event listener para el envío del formulario
contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Previene el envío por defecto (ya que no hay backend)

  // Obtén los valores de los campos
  const nombre = document.getElementById("contact-nombre").value.trim();
  const email = document.getElementById("contact-email").value.trim();
  const mensaje = document.getElementById("contact-mensaje").value.trim();

  // Validación básica
  if (nombre === "" || email === "" || mensaje === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Validación de email simple (puedes usar una regex más robusta si quieres)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return;
  }

  // Si todo está bien, simula el envío (en un sitio real, aquí iría una petición AJAX o fetch)
  alert(
    "¡Gracias por contactarnos, " +
      nombre +
      "! Tu mensaje ha sido enviado. Te responderemos pronto."
  );

  // Limpia el formulario después del envío
  contactForm.reset();
});
