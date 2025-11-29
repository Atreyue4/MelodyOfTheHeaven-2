document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".formulario");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío hasta validar todo

    // ---- Obtener valores ----
    const nombre = document.getElementById("nombre").value.trim();
    const pais = document.getElementById("pais").value;

    const intereses = [
      ...document.querySelectorAll("input[name='interes']:checked"),
    ];
    const sexo = [...document.querySelectorAll("input[name='sexo']:checked")];

    // ---- Validaciones ----
    if (nombre === "") {
      alert("Por favor, ingresa tus nombres completos.");
      return;
    }

    if (pais === "") {
      alert("Por favor, selecciona un país.");
      return;
    }

    if (intereses.length === 0) {
      alert("Debes seleccionar al menos un interés.");
      return;
    }

    if (sexo.length === 0) {
      alert("Debes seleccionar tu sexo.");
      return;
    }

    // ---- Crear objeto para mostrar lo ingresado ----
    const datos = {
      nombre,
      pais,
      intereses: intereses.map((i) => i.value),
      sexo: sexo.map((s) => s.value),
    };

    console.log("Datos enviados:", datos);

    alert("Formulario enviado con éxito");
    form.reset();
  });
});
