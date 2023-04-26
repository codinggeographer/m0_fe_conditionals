// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

if (numberTeachers > numberStudents) {
    console.log("true"); 
} else {
    console.log("false");

}

// prints "false"

OR 

console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);

// prints "Is numberTeachers greater than numberStudents?" false


// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

if (numberTeachers < numberStudents) {
    console.log("true"); 
} else {
    console.log("false");

}

// prints "true"

OR

console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents);

// prints "Is numberTeachers less than numberStudents?" true


// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

if (numberTeachers === stringTeachers) {
    console.log("true"); 
} else {
    console.log("false");

}

// prints "true"

OR

console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);
// prints "Is numberTeachers strictly equal to stringTeachers?" true


// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

if (numberTeachers !== numberStudents) {
    console.log("true"); 
} else {
    console.log("false");

}

// prints true

OR

console.log("Is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);

// prints "Is numberTeachers not equal to numberStudents?" true


// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

if (numberStudents >= 20) {
    console.log("true"); 
} else {
    console.log("false");
}

// prints true

OR

console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20);

// prints "Is numberStudents greater than or equal to 20?" true


// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

if (numberStudents >= 21) {
    console.log("true"); 
} else {
    console.log("false");
}

// prints false

OR

console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);

// prints "Is numberStudents greater than or equal to 21?" false


// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

if (numberStudents <= 20) {
    console.log("true"); 
} else {
    console.log("false");
}

// prints true

OR

console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20);

// prints "Is numberStudents less than or equal to 20?" true


// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

if (numberStudents <= 21) {
    console.log("true"); 
} else {
    console.log("false");
}

// prints true

OR

console.log("Is numberStudents less than or equal to 21?", numberStudents <= 21);

// prints "Is numberStudents less than or equal to 21?" true


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// This comparision evaluates if the number 4 is larger than the number 9.
// As the number 4 is less than the number 9 
// this comparison statement evaluates to true

var books = 3;
console.log(4 < books);
// This comparision evaluates if the number 4 is less than number of books.
// The number 4 is greater than the number of books 3
// this comparison statement evaluates to false


var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// This comparision evaluates if the number of friends is greater than the number of sibilings.
// The number of friends is 6, while the number of siblings is 2
// Since 6 is greater than 2, the statement evaluates to true


var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// This comparision evaluates if the number of attendees is not strictly equal to the number of meals.
// As there are 9 attendees and 8 meals, this evaluates to true


// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:

// Determine if the dog loves to play and loves treats
var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

console.log(lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park
var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

console.log(lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

console.log(lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy
var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

console.log(lovesToPlay && age <= 1);

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: My final line of code evaluated to false, as I set the age for a puppy to be <= 1 year old and the dog is 1. 