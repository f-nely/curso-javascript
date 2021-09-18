let people = {
  first_name: 'Taylor',
  last_name: 'Otwell',
  social: {
    facebook: 'Taylor_Otwell',
    instagram: 'Taylor_Otwell'
  }, 
  completeName: function () {
    return `${this.first_name} ${this.last_name}`;
  }
};

//console.log(people.last_name);
//console.log(people.social.facebook);
//console.log(people.completeName());
let {first_name, last_name:surname, age = 34} = people;
//console.log(first_name, last_name, age);
console.log(first_name, surname, age);

