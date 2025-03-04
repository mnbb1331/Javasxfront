document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("boton");
  let cajita1 = document.getElementById("box1");

  boton.addEventListener("click", function () {
    boton.innerText = "Auch!";
    cajita1.classList.add("js-class");
    cajita1.classList.remove("js-class");

    cajita1.classList.toggle("js-class");

    cajita1.innerHTML = "<div><p> soy otro div </p></div>";
  });
});
