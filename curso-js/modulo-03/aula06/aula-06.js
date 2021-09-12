let car = {
  brand: "Fiat", 
  model: "Cronos", 
  color: "Black",
  ligado: false,
  run: function() {
    if(this.ligado == true) {
      console.log("Car is running!");
    } else {
      console.log(this.brand + " não está ligado!")
    }
  },
  ligar: function() {
    this.ligado = true;
    console.log("Ligando "+this.brand);
  }
};

console.log(car['brand']);
console.log(car.brand);
car.ligar();
car.run();

let carros = [
  {marca: "Fiat", modelo: "Cronos"},
  {marca: "Toyota", modelo: "Corolla"}
];

console.log(carros[0].modelo);
