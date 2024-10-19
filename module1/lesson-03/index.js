let olympicRecords = {
    athletics100Men: 'Usain Bolt',
    athleticsLongJumpMen: 'Mike Powel',
    swimming200Men: 'Michael Phelps',
    swimming400Women: 'Katie Ledecky'
  };

  for(let category in olympicRecords){
    console.log(category) // --> keys
    console.log(olympicRecords[category]) // -->values
  }

  // store user information in an app 
  const user = {
    id: 1,
    firstName: 'Lloyd',
    lastName: 'Chambrier',
    email: 'lloyd.chambrier@ironhack.com',
    age: 34,
    gender: 'male'
  }

const book1 = { title: 'The Catcher in the Rye', author: 'J.D Salinger', isbn: '0316769487', category: 'Classic Literature' };
const book2 = { title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '0446310786', category: 'Classic Literature' };

user.favoriteBooks = [book1, book2]

const library = [];

library.push(user);
// library.unshift(book1)

const book3 = {
    title: 'Chamber of secrets',
    author: 'J.K Rowling',
    isbn: '89798689',
    category: 'Fantasy'
};

user.favoriteBooks.push(book3)



// for(let i = 0; i < user.favoriteBooks.length; i++){
//     console.log(`Book ${i+1} is ${user.favoriteBooks[i].title}`)
// }

user.favoriteBooks.splice(0,1)
console.log(library)

user.favoriteBooks.forEach((book)=>{
  console.log(book.title)
  console.log(book.author)
})

const raceResults = ['Helen', 'John', 'Peter', 'Merry'];

raceResults.forEach((elem, index) => console.log(elem + ' finished the race in ' + (index + 1) + ' position!'));

function printStars(howMany) {
  console.log('*'.repeat(howMany));
}
 
[1, 2, 3, 4, 5].forEach(function (num) {
  printStars(num);
});

let phrase = "This is long enough for a string to count it words";

let words = phrase.split(" ");
// how would i check if the word "enough" is part of the string?
console.log(words.includes("words"));