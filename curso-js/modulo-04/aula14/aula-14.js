let timer;

function rodou() {
  timer = setTimeout(function () {
    document.querySelector(".demo").innerHTML = "Rodou!";
  }, 2000);
}

function pause() {
  clearTimeout(timer);
}
