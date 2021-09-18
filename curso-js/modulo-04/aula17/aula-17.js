let people = {
  first_name: 'Taylor',
  last_name: 'Otwell',
  age: 32,
  social: {
    facebook: 'Taylor_Otwell',
    instagram: {
      url: '@t_otwell', 
      follow: 4000
    }
  }
};

//let {facebook, instagram} = people.social;
//console.log(facebook, instagram);
//let {first_name, age, social: {instagram}} = people;
//let {first_name, age, social: {instagram: {url: instagram, follow}}} = people;
//console.log(first_name, age, instagram, follow);

function getCompleteName({first_name, last_name}) {
  return `${first_name} ${last_name}`;
}

console.log(getCompleteName(people));

