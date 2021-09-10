function bg_green() {
  document.querySelector("#example").classList.remove("bg-red");
  document.querySelector("#example").classList.remove("bg-blue");
  document.querySelector("#example").classList.add("bg-green");
}

function bg_red() {
  document.querySelector("#example").classList.remove("bg-green");
  document.querySelector("#example").classList.remove("bg-blue");
  document.querySelector("#example").classList.add("bg-red");
}

function bg_blue() {
  document.querySelector("#example").classList.remove("bg-red");
  document.querySelector("#example").classList.remove("bg-green");
  document.querySelector("#example").classList.add("bg-blue");
}