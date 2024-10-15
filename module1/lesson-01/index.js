let firstName = 'Lloyd'; // Data type --> String
let lastName = "Chambrier" // Data type --> String
let fullName = `${firstName.toUpperCase()} ${lastName.toLowerCase()}`;
const age = 34; // Data type --> Number

let likesCoffee = true; // Data type --> Boolean
let likesPets = true; // Data type --> Boolean
let likesCold = false; // Data type --> Boolean

let person = {
    firstName: 'Lloyd',
    lastName: 'Chambrier',
    age: 34,
    likesCoffee: false,
    likesTea: false,
    likesJuice: true
}

let devClass = ["Victor", "Theresa", "Brunella", "Sophia", "Ayat", "Andres", "Goncalo"];
console.log(devClass.length, "devClass length")
console.log(devClass[0])
console.log(devClass[1])
console.log(devClass[2])
// Problem statement: emails list of customers
// Emails only customers above the age of 18 about alcohol discounts at my shop
// if(person.age > 18) {.....send emails}

// Emails customers that likes coffee and who are above the age of 18
// if(person.age > 18 && person.likesCoffee === true) {.....send emails}

// if(person.likesCoffee === true && person.likesTea === true){
//     console.log('This person likes coffee and tea :)')
// }
// if(person.likesCoffee === true || person.likesTea === true){
//         console.log('This person likes coffee or tea :)')
// }
if(person.likesCoffee && personLikesJuice || person.likesTea){
    console.log('This person does not likes coffee or tea :(')
}
// else if(person.likesCoffee === true){
//     console.log('This person only likes coffee :)')
// }
// else if(person.likesTea === true){
//     console.log('This person only likes tea :)')
// }
// else {
//     console.log('This person does not likes coffee or tea :(')
// }

let likesHotWeather; // Data type --> Undefined
let sum = null; // Null Empty value

sum = age;


console.log(firstName.length, lastName.length)// printing to the console
console.log(fullName)
// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const index = 15;

// console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'cat';
const wordTwo = 'quick';

console.log(sentence.includes(wordTwo))

