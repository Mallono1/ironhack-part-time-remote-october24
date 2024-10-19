// Day 3

// Write a function that takes in a parameter "name", tells the user what name was entered and returns it.
// i.e: "John" ---> "Hi John"
function sayHi(name){
    console.log(`Hi ${name}`)
    return`Hi ${name}`;
}

sayHi('Ayat');

// Write a function that takes in a parameter "input" and returns the last character in that string
// i.e: "Rijksmuseum" ---> "m"
function lastCharacter(input){
    // input.charAt(input.length-1)
    // input.slice(-1)
    return input[input.length-1]; 
 
}
console.log(lastCharacter("Rijksmuseum"))
console.log(lastCharacter("Michael"))

// Write a function that takes in one parameter "length" and prints out that many stars
// i.e: 3 ---> ***
function printStars(length){
   return "*".repeat(length)
}
console.log(printStars(3))
console.log(printStars(7))

// Write a function that takes in two parameters "length" and "height" and prints out a rectangle of stars
// i.e: 3,2 ---> ***
//               ***
function printRectangle(length, height){
    const rectLength = printStars(length);
    for(let i = 0; i < height; i++){
        console.log(rectLength)
    }
}

printRectangle(3,2)
printRectangle(4,4)

// Write a function that takes in an array of numbers and returns the average of the array
// i.e: [2,5,8] ---> 5
//      [1,2,3] ---> 2

function calcSum(numbersArray){
    let sum = 0;
    for(i = 0; i < numbersArray.length; i++){
        sum += numbersArray[i]
    }
    //2. divide by the numbers total
    return sum
}
function calcAverage(numbers){
    return calcSum(numbers)/numbers.length
}
console.log(calcAverage([2,5,8]))
console.log(calcAverage([1,2,3]))

// Create a function named isNameOddOrEven() that accepts a string as a parameter. 
// The function should return whether a received string has an odd or even number of letters. 
// The expected return should be in the following format - 
// string: ’<name> has an even/odd number of letters'

// isNamedOddOrEven('Lloyd') --> Lloyd has an odd number of letters
// isNamedOddOrEven('John') --> John has an even number of letters

function isNameOddOrEven(randomName){
    // console.log(randomName.length%2)
    // if(randomName.length%2 === 0){ // 5/2 --> 1
    //     return `${randomName} has an even number of letters`;
    // }
    // else {
    //     return`${randomName} has an odd number of letters`;
    // }
    return randomName.length%2 === 0 ? `${randomName} has an even number of letters` : `${randomName} has an odd number of letters`;
}

console.log(isNameOddOrEven('Lloyd'))
console.log(isNameOddOrEven('John'))