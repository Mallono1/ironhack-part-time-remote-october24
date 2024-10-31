const calcCalories = (protein, carbs, fat) => {
    return (protein * 4) + (carbs * 4) + (fat * 9);
}
// Exercise 1
// Create a class Human with properties name, gender, age, calories
// Add a method introduction() to class Human that returns the human's name, age and gender
// i.e: I'm Jesus, I'm 33 years old and I am a male.
class Human {
    constructor(name, gender, age){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.calories = 0;
        this.favoriteFoods = [];
    }
    introduction(){
        return `I'm ${this.name}, I'm ${this.age} years old and I am a ${this.gender}.`;
    }
    eatFood(food){
        // const numCalories = (food.protein * 4) + (food.carbs * 4) + (food.fat * 9);
        this.calories += calcCalories(food.protein, food.carbs, food.fat);
    }
    addFavorite(food){
        this.favoriteFoods.push(food)
    }
}
// Food {
//      name: 'egg',
//      protein: 5, --> this.protein * 4 calories
//      carbs: 3, --> this.carbs * 4 calories
//      fat: 2    --> this.fat * 9 calories    
//}
//
// Add a method eatFood(food) to class Human that increases the number of calories for a human accordingly to the food's
// protein, carbs and fat properties
// Make sure to test those methods to make sure they work


// Exercise 2
// Create a class Food with properties name(string), protein(number), carbs(number), fat(number)
//      Carbohydrates provides 4 calories per gram
//      Protein provides 4 calories per gram
//      Fat provides 9 calories per gram
// Food {
//      name: 'egg',
//      protein: 5,
//      carbs: 3,
//      fat: 2       
//}
class Food {
    constructor(name, protein, carbs, fat){
        this.name = name;
        this.protein = protein;
        this.carbs = carbs;
        this.fat= fat;
    }
    // Add a method printCalories() for class Food that prints out how many calories a specific food provides
    // i.e: Bread has 200 calories
    printCalories(){
        //name & 
        // const calories = (this.protein * 4) + (this.carbs * 4) + (this.fat * 9);
        return `${this.name} has ${calcCalories(this.protein, this.carbs, this.fat)} calories`;
    }
}

const jeremy = new Human("Jeremy", "male", 40)
const egg = new Food('egg', 5, 3, 2);
jeremy.eatFood(egg)

console.log('jeremy calories', jeremy.calories)
console.log('egg calories', egg.printCalories())

// Create instances of each class and print them to the console to confirm they work

// Exercise 3
// Create a subclass Man from class Human, 
// it should have it's gender set to 'male' automatically

// Exercise 4
// Create a subclass Woman from class Human, it should have it's gender set to 'female' automatically

// Create instances of each class and print them to the console to confirm they work