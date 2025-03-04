document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("boton");
    const cajita1 = document.getElementById("box1");

    boton.addEventListener("click", function () {
      cajita1.classList.toggle("js-class");
      cajita1.innerText = "Hola mamor";
    });
})