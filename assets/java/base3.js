function verificarPassword() {
  var password1 = document.getElementById("password1").value;
  var password2 = document.getElementById("password2").value;
  var password3 = document.getElementById("password3").value;

  var passwordCompleto = password1 + password2 + password3;

  if (passwordCompleto === "911") {
    mostrarResultado("Password 1 correcto");
  } else if (passwordCompleto === "714") {
    mostrarResultado("Password 2 correcto");
  } else {
    mostrarResultado("Password incorrecto");
  }
}

function mostrarResultado(mensaje) {
  document.getElementById("resultado").innerHTML = mensaje;
}
