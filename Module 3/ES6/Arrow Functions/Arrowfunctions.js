//Arrow Functions
/*
An arrow function expression is a compact alternative to a traditional function expression
Arrow functions don't have their own bindings to "this" keyword
"(hashrocket) => "  is a shorthand notation for defining functions in JavaScript


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