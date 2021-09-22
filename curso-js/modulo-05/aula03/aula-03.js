// stringify - transforma json em string
let result = JSON.stringify({name: 'Taylor', age: 32});
console.log(result);
console.log(typeof(result));

// parse - transforma string em json
r = JSON.parse('{"name":"Taylor","age":32}');
console.log(r);
console.log(typeof(r));