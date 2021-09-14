//let list = [45, 4, 9, 16, 25];
let list = [
  {id: 1, first_name: 'Elton', last_name: 'Minetto'}, 
  {id: 2, first_name: 'Vinicius', last_name: 'Dias'},
  {id: 3, first_name: 'Nikita', last_name: 'Popov'}
];

let list2 = [];

/* list2 = list.find(function(item) {
  return (item == 16) ? true : false;
});
 */

/* list2 = list.findIndex(function(item) {
  return (item == 16) ? true : false;
});
 */

let people = list.find(function(item) {
  return (item.last_name == 'Minetto') ? true : false;
})
let result = people;

console.log(result);