const teacher = {
    fullName: "Lloyd Chambrier",
    age: 34,
    likesCoffee: true,
    hobbies: ["Kickboxing"]
}

const student = {
    fullName: "Tseka",
    age: 32,
    likesCoffee: true,
    hobbies: ["Basketball"]
}

// Which of the teacher or the student has the most amount of hobbies?
// 1. Check the number of hobbies for each person 
// Check teacher.hobbies.length amd student.hobbies.length
// 2. Compare them
// 3. Return the person with highest number
if(teacher.hobbies.length > student.hobbies.length){
    console.log(`${teacher.fullName} has more hobbies than ${student.fullName}`)
}
else if(teacher.hobbies.length < student.hobbies.length){
    console.log(`${student.fullName} has more hobbies than ${teacher.fullName}`)
}
else {
    console.log(`${student.fullName} has the same amount of hobbies as ${teacher.fullName}`)
}

console.log(teacher.fullName)
console.log(teacher.hobbies[0])
console.log(teacher.hobbies[1])
console.log(teacher.hobbies[2])
console.log(teacher.hobbies.length)
console.log(teacher.hobbies[teacher.hobbies.length-1])

const age = 60;
 
if (age <= 16) {
  console.log('You have a teenager discount.');
} else if (age >= 65) {
  console.log('You have a senior citizen discount :)');
} else {
  console.log("Sorry, you don't have any discount :(");
}

const characterName = 'Daenerys';
let house = '';
 
if (characterName === 'Khal Drogo') {
  house = 'Dothraki Horselord';
} else if (characterName === 'Daenerys') {
  house = 'Targaryen';
} else if (characterName === 'Jon Snow' || characterName === 'Sansa' || characterName === 'Arya' || characterName === 'Rob' || characterName === 'Ned') {
  house = 'Stark';
} else if (characterName === 'Cersei' || characterName === 'Tyrion' || characterName === 'Ser Jaime') {
  house = 'Lannister';
} else {
  house = 'Other';
}
 
// switch (characterName) {
//     case 'Khal Drogo':
//         house = 'Dothraki Horselord';
//         break;
//     case 'Daenerys':
//         house = 'Targaryen';
//         break;
//     case 'Jon Snow':
//     case 'Sansa':
//     case 'Arya':
//         house = 'Stark';
//         break;
//     default:
//     house = 'other';
// }

console.log(`Your favorite character is from the house ${house}.`);

// i++ --> i = i+1

const pets = ["cat","dog","snake","bird","mouse"]

for (let i = 0; i < pets.length; i++) {
    if(i%2 !== 0){
      const capitalizedLetter = pets[i][0].toUpperCase();
      const word = pets[i].substring(1, pets[i].length);
      console.log(`${capitalizedLetter}${word}`);
    }
    else {
      console.log(pets[i])
    }
}

let test = 'This is a test';// --> ['T', 'h','i',.....]
test = 'this is a test';
console.log(test)