/*
Enhanced Object Literals: ES6 enhanced object literals with new features such as shorthand property



Object Literals
Object literals are a convenient way to create and define objects in JavaScript.
They provide a concise syntax for representing key-value pairs and organizing data. Here are key aspects of object literals:


- **Basic Syntax:**
  - Objects are created using curly braces `{}`.
  - Properties are defined as key-value pairs, separated by commas.

- **Example:**
  ```javascript
  const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    isStudent: false
  };
  ```

- **Methods:**
  - Functions can be assigned as values to object properties, called methods.
  - They can be defined using both the traditional and shorthand syntax.

- **Accessing Properties:**
  - Properties are accessed using dot notation (`object.property`) or bracket notation (`object['property']`).

- **Dynamic Property Names:**
  - Property names can be dynamic using expressions inside square brackets.

- **Shorthand Syntax (ES6+):**
  - ES6 introduced shorthand syntax when the variable name matches the property name.

- **Object Methods and `this`:**
  - Inside object methods, `this` refers to the object itself.

- **Use Cases:**
  - Ideal for organizing related data in a structured manner.
  - Commonly used for creating objects on the fly, especially in simple scenarios.

Object literals are a fundamental feature in JavaScript,
offering a concise and expressive way to represent and organize data.
They are versatile and widely used in various programming contexts.



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
