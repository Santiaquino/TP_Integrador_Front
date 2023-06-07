const INPUT_CANTIDAD = document.getElementById("inputCantidad");
const INPUT_CATEGORIA = document.getElementById("inputCategoria");
const RESULTADO = document.getElementById("resultado");
const BUTTON_RESUMEN = document.getElementById("buttonResumen");
const INPUT_NOMBRE = document.getElementById("inputNombre");
const INPUT_APELLIDO = document.getElementById("inputApellido");
const INPUT_CORREO = document.getElementById("inputCorreo");
const BUTTON_BORRAR = document.getElementById("buttonBorrar");

BUTTON_RESUMEN.addEventListener("click", function (e) {
  e.preventDefault();

  if (!validaciones()) {
    return;
  }

  if (INPUT_CATEGORIA.value === "Estudiante") {
    let total_pago = INPUT_CANTIDAD.value * 200;
    let descuento = total_pago * 0.8;
    RESULTADO.innerHTML = `Total a Pagar: $${total_pago - descuento}`;
  }

  if (INPUT_CATEGORIA.value === "Trainee") {
    let total_pago = INPUT_CANTIDAD.value * 200;
    let descuento = total_pago * 0.5;
    RESULTADO.innerHTML = `Total a Pagar: $${total_pago - descuento}`;
  }

  if (INPUT_CATEGORIA.value === "Junior") {
    let total_pago = INPUT_CANTIDAD.value * 200;
    let descuento = total_pago * 0.15;
    RESULTADO.innerHTML = `Total a Pagar: $${total_pago - descuento}`;
  }
  console.log({
    nombre: INPUT_NOMBRE.value,
    apellido: INPUT_APELLIDO.value,
    correo: INPUT_CORREO.value,
    cantidad: INPUT_CANTIDAD.value,
    categoria: INPUT_CATEGORIA.value,
    resultado: RESULTADO.innerHTML,
  });
});

function validaciones() {
  if (
    !INPUT_CANTIDAD.value ||
    !INPUT_CORREO.value ||
    !INPUT_NOMBRE.value ||
    !INPUT_APELLIDO.value ||
    !INPUT_CATEGORIA.value
  ) {
    RESULTADO.innerHTML = "Ingrese todos los datos";
    return false;
  }

  if (Number(INPUT_CANTIDAD.value <= 0)) {
    RESULTADO.innerHTML =
      "Tiene que ingresar un numero mayor a 0 en el campo cantidad";
    return false;
  }

  if (isNaN(parseInt(INPUT_CANTIDAD.value))) {
    RESULTADO.innerHTML = "Tiene que ingresar un numero en el campo cantidad";
    return false;
  }

  return true;
}

BUTTON_BORRAR.addEventListener("click", (e) => {
  e.preventDefault();
  INPUT_CANTIDAD.value = "";
  RESULTADO.innerHTML = "Total a Pagar: $";
  INPUT_CATEGORIA.value = "";
  INPUT_NOMBRE.value = "";
  INPUT_APELLIDO.value = "";
  INPUT_CORREO.value = "";
});
