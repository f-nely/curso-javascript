let phone = '50';

//console.log(phone.padEnd(9, '*'));
//console.log(phone.padStart(9, '*'));

let card = '372702792236110';
let lastDigits = card.slice(-4);
let hiddenCart = lastDigits.padStart(15, '*');

console.log(`Este é o seu cartão ${hiddenCart}`);