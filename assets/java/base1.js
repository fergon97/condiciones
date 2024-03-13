const imagen = document.getElementById("imagenConBorde");

imagen.addEventListener("click", function () {
  if (this.classList.contains("conBorde")) {
    this.classList.remove("conBorde");
  } else if (!this.classList.contains("conBorde")) {
    this.classList.add("conBorde");
  }
});
