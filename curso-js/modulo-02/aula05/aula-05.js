function trocar() {
  if (document.querySelector("button").classList.contains("bg-blue")) {
    document.querySelector("button").classList.remove("bg-blue");
    document.querySelector("button").classList.add("bg-green");
  } else {
    document.querySelector("button").classList.remove("bg-green");
    document.querySelector("button").classList.add("bg-blue");
  }
}
