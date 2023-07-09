/*
Enhanced Object Literals: ES6 enhanced object literals with new features such as shorthand property

and method definitions, computed property names, and the ability to define object methods using arrow functions.

*/

const name = 'Sandeep Seeram';
const age = 22;

const person = {
  name, // Shorthand property
  age, // Shorthand property
  sayHello() { // Shorthand method
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
};

person.sayHello(); // Hello, my name is Sandeep Seeram and I'm 22 years old.
