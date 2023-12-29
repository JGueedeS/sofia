window.addEventListener("scroll", function () {
  var scr = window.pageYOffset || document.documentElement.scrollTop,
      C = document.getElementById("contenedor"),
      A = document.getElementById("abrir"),
      E = document.getElementById("carta"),
      F = document.querySelector("#carta hgroup h2"),
      P = document.getElementById("perspectiva");

  // giro y abertura
  if (scr >= 200) {
      C.style.transition = "all 1s";
      C.style.transform = "rotateY(180deg)";
      A.style.transition = "all 1s .5s";
      A.style.transform = "rotateX(180deg)";
      A.style.zIndex = "-10";
  }
  // cerrado y giro
  else if (scr <= 100) {
      C.style.transition = "all 1s .5s";
      C.style.transform = "rotateY(0deg)";
      A.style.transition = "all 1s";
      A.style.transform = "rotateX(0deg)";
      A.style.zIndex = "-10";
  }
  // Sobre trasladoY / carta
  if (scr >= 700) {
      E.style.transition = "all .5s 1s";
      E.style.top = "-550px";
      E.style.height = "640px";
      P.style.transition = "all 1s";
      P.style.transform = "translateY(450px)";
      F.style.transition = "all 1s";
      F.style.transform = "rotateZ(180deg)";
  }
  // Sobre position original / guardado carta
  else if (scr <= 500) {
      E.style.transition = "all .5s";
      E.style.top = "3px";
      E.style.height = "200px";
      P.style.transform = "translateY(0px)";
      F.style.transform = "rotateZ(0deg)";
  }
});
 