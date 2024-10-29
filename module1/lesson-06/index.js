// array of cities:
const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city', 'paris'];

const newCities = cities.map((city)=> {
    return `${city[0].toUpperCase()}${city.slice(1)}`
})

console.log('newCities', newCities)
// Return only students name and final grade

const students = [
    {
      name: 'Tony Parker',
      firstProject: 80,
      secondProject: 75,
      finalExam: 90
    },
    {
      name: 'Marc Barchini',
      firstProject: 84,
      secondProject: 65,
      finalExam: 65
    },
    {
      name: 'Claudia Lopez',
      firstProject: 45,
      secondProject: 95,
      finalExam: 99
    },
    {
      name: 'Alvaro Briattore',
      firstProject: 82,
      secondProject: 92,
      finalExam: 70
    },
    {
      name: 'Isabel Ortega',
      firstProject: 90,
      secondProject: 32,
      finalExam: 85
    },
    {
      name: 'Francisco Martinez',
      firstProject: 90,
      secondProject: 55,
      finalExam: 78
    },
    {
      name: 'Jorge Carrillo',
      firstProject: 83,
      secondProject: 77,
      finalExam: 90
    },
    {
      name: 'Miguel López',
      firstProject: 80,
      secondProject: 75,
      finalExam: 75
    },
    {
      name: 'Carolina Perez',
      firstProject: 85,
      secondProject: 72,
      finalExam: 67
    },
    {
      name: 'Ruben Pardo',
      firstProject: 89,
      secondProject: 72,
      finalExam: 65
    }
  ];

  const newStudents = students.map((student)=>{
    const projectsAverage = (student.firstProject + student.secondProject)/2
    const finalGrade = student.finalExam * 0.6 + projectsAverage * 0.4
    return {
        name: student.name,
        finalGrade: Math.ceil(finalGrade)
    }
  })

  console.log('newStudents', newStudents)

  //  filter the ones who are eligible to go to bars in the USA

  const people = [
    { name: 'Candice', age: 25 },
    { name: 'Tammy', age: 30 },
    { name: 'Allen', age: 20 },
    { name: 'Nettie', age: 21 },
    { name: 'Stuart', age: 17 },
    { name: 'Bill', age: 19 }
  ];

  const drinkingPeople = people.filter((person)=>{
    return person.age >= 21;
  })

  console.log('drinkingPeople', drinkingPeople)

  const places = [
    {
      title: "Awesome Suite 20' away from la Rambla",
      price: 200,
      type: 'Private Room',
      pool: true,
      garage: false
    },
    {
      title: 'Private apartment',
      price: 190,
      type: 'Entire Place',
      pool: true,
      garage: true
    },
    {
      title: 'Apartment with awesome views',
      price: 400,
      type: 'Entire Place',
      pool: false,
      garage: false
    },
    {
      title: 'Apartment in la Rambla',
      price: 150,
      type: 'Private Room',
      pool: false,
      garage: true
    },
    {
      title: 'Comfortable place in Barcelona´s center',
      price: 390,
      type: 'Entire place',
      pool: true,
      garage: true
    },
    {
      title: 'Room near Sagrada Familia',
      price: 170,
      type: 'Private Room',
      pool: false,
      garage: false
    },
    {
      title: 'Great house next to Camp Nou',
      price: 140,
      type: 'Entire place',
      pool: true,
      garage: true
    },
    {
      title: 'New apartment with 2 beds',
      price: 2000,
      type: 'Entire place',
      pool: false,
      garage: true
    },
    {
      title: 'Awesome Suite',
      price: 230,
      type: 'Private Room',
      pool: false,
      garage: false
    },
    {
      title: "Apartment 10' from la Rambla",
      price: 930,
      type: 'Entire place',
      pool: true,
      garage: true
    }
  ];

  const poolPlaces = places.filter((place)=>{
    return place.pool === true && place.price <= 200;
  })

  console.log('poolPlaces', poolPlaces)

  // filter out the ones that are not even, and are greater than 42.
  const numbers = [1, 60, 112, 123, 100, 99, 73, 45];

  const newNumbers = numbers.filter(number => {
    return number % 2 === 0 && number > 42;
  })

  console.log('newNumbers', newNumbers)

  const peopleArray = [
    { name: 'Candice', age: 25 },
    { name: 'Tammy', age: 30 },
    { name: 'Allen', age: 49 },
    { name: 'Nettie', age: 21 },
    { name: 'Stuart', age: 17 }
  ];
   
  const ages = peopleArray.reduce(function (sum, person) {
    return sum + person.age;
  }, 0); // initialValue to 0
   
  console.log('ages', Math.round(ages/peopleArray.length)); // <== 142

  const menu = [
    { name: 'Carrots', calories: 150 },
    { name: 'Steak', calories: 350 },
    { name: 'Broccoli', calories: 120 },
    { name: 'Chicken', calories: 250 },
    { name: 'Pizza', calories: 520 }
  ];
   
const calories = menu.reduce((sum, food)=>{
    return sum + food.calories
}, 0)
   
  console.log('averageCalories', calories/menu.length);

  const product = {
    name: 'AmazonBasics Apple Certified Lightning to USB Cable',
    price: 7.99,
    manufacturer: 'Amazon',
    reviews: [
      { user: 'Pavel Nedved', comments: 'It was really useful, strongly recommended', rate: 4 },
      { user: 'Alvaro Trezeguet', comments: 'It lasted 2 days', rate: 1 },
      { user: 'David Recoba', comments: 'Awesome', rate: 5 },
      { user: 'Jose Romero', comments: 'Good value for money', rate: 4 },
      { user: 'Antonio Cano', comments: 'It broked really fast', rate: 2 }
    ]
  };

  const averageReview = product.reviews.reduce((accumulator, review, index)=>{
    // if(index !== product.reviews.length - 1){
    //     return accumulator + review.rate;
    // }
    // else {
    //     return (accumulator + review.rate)/product.reviews.length;
    // }
    console.log('indexPosition', index)
    console.log('review', review.user)
    return index === product.reviews.length - 1 ?  
                    (accumulator + review.rate)/product.reviews.length :
                    accumulator + review.rate;
  }, 0)

  console.log('averageReview', averageReview)

  const numbers2 = [1, 60, 112, 123, 100, 99, 73, 45];

  const sortNumbers2 = numbers2.sort((a, b)=>{
        return a-b;
  })

  console.log('sortNumbers2', sortNumbers2)


  const peopleArray2 = [
    { name: 'Candice', age: 25 },
    { name: 'Tammy', age: 30 },
    { name: 'Allen', age: 49 },
    { name: 'Nettie', age: 21 },
    { name: 'Stuart', age: 17 }
  ];

  const sortPeople2 = peopleArray2.sort((a, b) => a.name.localeCompare(b.name)).reverse()
//   const sortPeople3 = peopleArray2.sort(function (a, b) {
//     if (a.name < b.name) return 1; 
//     if (a.name > b.name) return -1;
//     if (a.name === 0) return 0;
//   }).reverse();
const sortPeople4 = peopleArray2.sort(function (a, b) {
    if (a.name.length < b.name.length) return 1; //  1 here (instead of -1 for ASC)
    if (a.name.length > b.name.length) return -1; // -1 here (instead of  1 for ASC)
    if (a.name.length === b.name.length) return 0;
  });
  

  console.log('sortPeople4', sortPeople4)
//   console.log('sortPeople3', sortPeople3)
   