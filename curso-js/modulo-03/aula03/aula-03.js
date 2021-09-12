function bg_green() {
  clear();
  document.getElementById("title").classList.add("bg-green");
}

function bg_purple() {
  clear();
  document.getElementById("title").classList.add("bg-purple");
}

function bg_indigo() {
  clear();
  document.getElementById("title").classList.add("bg-indigo");
}

function clear() {
  document.getElementById("title").classList.remove("bg-green");
  document.getElementById("title").classList.remove("bg-purple");
  document.getElementById("title").classList.remove("bg-indigo");
}

function showPhone(element) {
  element.style.display = "none";
  document.getElementById("phone").style.display = "block";
}

function hiddenPhone(element) {
  element.style.display = "none";
  document.getElementById("phone").style.display = "none";
}