//Arrow Functions
/*
An arrow function expression is a compact alternative to a traditional function expression
Arrow functions don't have their own bindings to "this" keyword
"(hashrocket) => "  is a shorthand notation for defining functions in JavaScript

1. Arrow functions have a shorter syntax compared to traditional functions.
Basic syntax: (parameters) => { statement }.

2. If the function body contains a single statement, the curly braces and the return keyword can be omitted.
Example: const add = (a, b) => a + b;

3. Arrow functions do not bind their own this value. They inherit the this value from the enclosing execution context (lexical scoping).
This can be advantageous in certain situations, especially in callback functions.

4. Single Parameter Parentheses:
If a function has only one parameter, the parentheses around the parameter can be omitted.
Example: const square = x => x * x;

5. Arrow functions are often more concise, making code more readable, especially for short functions or inline callbacks.

6. Arrow functions do not have their own arguments object. They inherit it from the enclosing scope.

7. Arrow functions are commonly used for short, simple functions, and especially in contexts where this binding and a more concise syntax are beneficial.

*/

//First Case
//Traditional Way
function fun1(){
    console.log("Traditional Functions")
}
fun1();

//Arrow Function
const fun2 = () => console.log("Arrow function");
fun2()

//Second case
//Traditional Way
function add(num1, num2){
    return num1 + num2
}
let sum = add(10,20)
console.log(sum)

//Arrow Function
const add1 = (num1,num2) => num1+num2;
console.log(add1(10,10))


const add2 = num1 => num1 + 500
console.log(add2(10));


const numbers = [1, 2, 3, 4, 5];

const filteredNumbers = numbers.filter(number => number % 2 === 0);
console.log(filteredNumbers)