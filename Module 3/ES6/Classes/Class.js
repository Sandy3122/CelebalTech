//Class
/*
Classes: ES6 introduced the class syntax for defining classes in JavaScript,
providing a more familiar and structured way to work with object-oriented programming concepts.
Classes can have constructors, methods, inheritance, and static members.
*/


class test{
    constructor(){
        console.log("I'm From Constructor")
    }
}

new test()      //Creating and object

class Person {
    constructor(name) {         //Object Instance
      this.name = name;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  }
  
const john = new Person('Sandeep');       //Creating and object
john.greet(); // Hello, my name is John.
  

//Arthematic Operations
//this keyword is referrs    
class Nums{
    constructor(num1, num2){
        this.num1 = num1,
        this.num2 = num2
    }

    add(){
        console.log('Addition : ',  this.num1 + this.num2)
    }
    sub(){
        console.log("Substraction : ", this.num1 - this.num2)
    }
    mul(){
        console.log('Multiplication : ', this.num1 * this.num2)
    }
    div(){
        console.log('Division : ', this.num1 / this.num2)
    }
}

//Creating an Instance
const NumsObj = new Nums(50,20);
NumsObj.add()
NumsObj.sub()
NumsObj.mul()
NumsObj.div()



//Default Parameters to the function
const increment = (number, value = 10) => number + value;
console.log(increment("Incrementing With Default Values : ",50))