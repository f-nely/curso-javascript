let car = {
  brand: "Fiat", 
  model: "Cronos", 
  color: "Black",
  run: function() {
    console.log("Car is running!");
  }
};

console.log(car['brand']);
console.log(car.brand);
car.run();