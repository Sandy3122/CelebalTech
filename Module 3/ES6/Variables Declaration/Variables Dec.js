/*
Variable Declaration In ES6
*/
// Without keywords. It is essentially the same as var and not allowed in 'strict' mode.
name = 'Jack';
console.log(name)

// Using var
var price = 100;
console.log(price)

// Using let
let isPermanent = false;
console.log(isPermanent)

// Using const
const PUBLICATION = 'freeCodeCamp'
console.log(PUBLICATION)

/*
1. Scope
2. Readdaigning And Redeclaration
3. Hosting (When you access a variable before declaring it)
*/


//**** Scope ****\\
//Block Scope
{
    let f_name = 'Alex';
    const ZIP = 500067;
    var age = 25;
}

console.log(f_name); // Uncaught ReferenceError: f_name is not defined
console.log(ZIP);  // Uncaught ReferenceError: ZIP is not defined
console.log(age);  // 25

//Functional Scope
// f1() is a function

function f1() {
    let f_name = "Alex";
    const ZIP = 560089;
    var age = 25;
}

f1();

console.log(f_name); // Uncaught ReferenceError: f_name is not defined
console.log(ZIP);  // Uncaught ReferenceError: ZIP is not defined
console.log(age);  // Uncaught ReferenceError: age is not defined

console.log(f1.f_name)  undefined  
console.log(f1.ZIP)     undefined
console.log(f1.age)     undefined

//Global Scope

let f_name = "Alex";
 const ZIP = 560089;
 var age = 25;  

// f1() is a function
function f1() {
  console.log(f_name); // Alex
  console.log(ZIP);  // 560089
  console.log(age);  // 25
}

f1();

console.log(f_name); // Alex
console.log(ZIP);  // 560089
console.log(age);  // 25


//Reassign

// Declare variables with initial values
let f_name1 = "Alex";
const ZIP1 = 560089;
var age = 25;

// Reassign values
f_name1 = "Bob"; // the f_name value is 'Bob"
ZIP1 = 65457; // Uncaught TypeError: Assignment to constant variable.
age = 78; // the age value is 78


const blog = {
    'url': 'https://greenroots.info'
}

blog.url = 'https://blog.greenroots.info' //Allowed

blog = {}; // Uncaught TypeError: Assignment to constant variable
