let cars = ['Jetta', 'Renegade', 'S10', 'Amorok', 'Jeep Compass'];

let html = '<ol>';

for(let i in cars) {
  html += '<li>' + cars[i] + '</li>';
}

html += '</ol>';
document.getElementById("demo").innerHTML = html;

for(let i in cars) {
  console.log(cars[i])
}

/*
let texto = '';
for(let i = 0; i < 10; i++) {
  texto = texto + i + '<br>';
}

document.getElementById("demo").innerHTML = texto;
*/