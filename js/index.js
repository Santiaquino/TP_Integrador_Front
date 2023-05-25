const INPUT_CANTIDAD = document.getElementById("inputCantidad").value;
const INPUT_CATEGORIA = document.getElementById("inputCategoria").value;
const RESULTADO = document.getElementById("resultado");
const BUTTON_RESUMEN = document.getElementById("buttonResumen");

BUTTON_RESUMEN.addEventListener("click", function (e) {
  e.preventDefault();

  if (!INPUT_CANTIDAD) {
    RESULTADO.innerHTML = "Ingrese una cantidad";
  }

  if (INPUT_CATEGORIA === "Estudiante") {
    let totalPago = INPUT_CANTIDAD * 200;
    let descuento = totalPago * 0.8;
    RESULTADO.innerHTML = `Total a Pagar: $${totalPago - descuento}`;
    informarPorConsola(INPUT_CANTIDAD, INPUT_CATEGORIA, totalPago - descuento);
  }

  if (INPUT_CATEGORIA === "Trainee") {
    let totalPago = INPUT_CANTIDAD * 200;
    let descuento = totalPago * 0.5;
    RESULTADO.innerHTML = `Total a Pagar: $${totalPago - descuento}`;
    informarPorConsola(INPUT_CANTIDAD, INPUT_CATEGORIA, totalPago - descuento);
  }

  if (INPUT_CATEGORIA === "Junior") {
    let totalPago = INPUT_CANTIDAD * 200;
    let descuento = totalPago * 0.15;
    RESULTADO.innerHTML = `Total a Pagar: $${totalPago - descuento}`;
    informarPorConsola(INPUT_CANTIDAD, INPUT_CATEGORIA, totalPago - descuento);
  }
});

function informarPorConsola(cantidad, categoria, resultado) {
  const INPUT_NOMBRE = document.getElementById("inputNombre").value;
  const INPUT_APELLIDO = document.getElementById("inputApellido").value;
  const INPUT_CORREO = document.getElementById("inputCorreo").value;

  const usuario = {
    nombre: INPUT_NOMBRE,
    apellido: INPUT_APELLIDO,
    correo: INPUT_CORREO,
    cantidad,
    categoria,
    resultado,
  };

  console.log(usuario);
}
