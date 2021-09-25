function pegarTemperatura() {
  return new Promise(function(resolve, reject) {
    console.log('pegando temperatura..');

    setTimeout(function() {
      resolve('40 na sombra');
    }, 2000);
  });
}

// using the promise
let temp = pegarTemperatura();
temp.then(function(resultado) {
  console.log('TEMPERATURA: ' + resultado);
});
temp.catch(function() {
  console.log('Eita, deu erro!');
});

setTimeout(function() {
  console.log(temp);
}, 2000);