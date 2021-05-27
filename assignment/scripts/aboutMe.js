console.log('js');
let firstName = ' Hamsa ';
let lastName = 'Alimici ';
let fullName = firstName + lastName;

console.log( fullName );

let luckyNumber = 7;

let sentence = ('My name is' + fullName + ' and I think ' + luckyNumber + ' is a winner.')

console.log( sentence );

let adventurous = true;
let food = 'pasta';
let pets = 1;
let friendsPets = 1;
pets +=2;
const allowedPets = 4;
if( adventurous ){
  console.log("Adventures are great!");
}
else {
  console.log("How about we stay home?");
}

if('luckyNumber' == 2 && adventurous == true){
  console.log('Roll the dice!');
}

if(pets<allowedPets){
  console.log('I can have more pets!');
}
else if (pets=allowedPets) {
  console.log('I have enough pets!');
}
else (pets>allowedPets){
  console.log('Oh no, I have too many pets!');
}
