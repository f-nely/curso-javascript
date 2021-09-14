let list = [45, 4, 9, 16, 25];
let list2 = [];

/* list2 = list.map(function(item) {
  return item * 2;
}); */

/* for(let i in list) {
  list2.push(list[i] * 2);
} */

/* list2 = list.filter(function(item) {
  if(item < 20) {
    return true;
  } else {
    return false;
  }
}); */

/* list2 = list.every(function(item) {
  if(item > 20) {
    return true;
  } else {
    return false;
  }
}); */

list2 = list.some(function(item) {
  return (item > 20) ? true : false;
});

let result = list2;

console.log(result);