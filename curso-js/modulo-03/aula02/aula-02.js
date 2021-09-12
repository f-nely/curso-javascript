// onkeyup - the keyup event fires when the user releases a key that was previously pressed.

//onkeydown - rhe keydown event fires when the user presses a keyboard key.
function digitou(e) {
  if(e.keyCode == 13 && e.ctrlKey == true) {
    let texto = document.getElementById("name").value;
    console.log(texto);
  }
}