function actualizarCantidad() {
  var cantidad1 =
    Math.max(0, parseInt(document.getElementById("cantidad1").value)) || 0;
  var cantidad2 =
    Math.max(0, parseInt(document.getElementById("cantidad2").value)) || 0;
  var cantidad3 =
    Math.max(0, parseInt(document.getElementById("cantidad3").value)) || 0;

  var cantidadTotal = cantidad1 + cantidad2 + cantidad3;

  document.getElementById("cantidadSeleccionada").innerHTML =
    "Cantidad total de stickers seleccionados: " + cantidadTotal;

  if (cantidadTotal > 10) {
    document.getElementById("mensajeError").innerHTML =
      "Lo siento, no puedes llevar más de 10 stickers.";
  } else {
    document.getElementById("mensajeError").innerHTML = "";
  }
}

document
  .getElementById("cantidad1")
  .addEventListener("input", actualizarCantidad);
document
  .getElementById("cantidad2")
  .addEventListener("input", actualizarCantidad);
document
  .getElementById("cantidad3")
  .addEventListener("input", actualizarCantidad);

actualizarCantidad();
