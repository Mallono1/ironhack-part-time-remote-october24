// let counter = 10;

// const callbackFunction = function () {
//   console.log(counter);
//   timeoutId = setTimeout(callbackFunction, 1000);
 
//   counter -= 1;

//   if(counter < 0){
//     clearTimeout(timeoutId)
//     }
// };
 
// let timeoutId = setTimeout(callbackFunction, 1000);

// let i = 1;

// const intervalId = setInterval(function () {
//   console.log(i);
 
//   i++;
 
//   if (i > 10) {
//     clearInterval(intervalId);
//   }
// }, 1000);

// let i = 10;
// const intervalId = setInterval(function () {
//   if (i > 0) {
//     console.log(i);
//   } else {
//     console.log('Pop!');
//     clearInterval(intervalId);
//   }
 
//   i--;
// }, 1000);

function magicHat(obj) {
  obj.age = 10;
  obj = { name: "Ada", age: 20 };
  return obj;
}
  
const rabbit1 = { name: "Bob", age: 30 };
  
// const rabbit2 = magicHat(rabbit1);
  
console.log("rabbit1: ", rabbit1);
// console.log("rabbit2: ", rabbit2);