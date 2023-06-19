const {add} = require('./operators');        //Importng Single Module
const {sub, Bio} = require('./operators');   //Importing multiple modules
const oper = require('./operators')          //Importing multiple modules using operator

const util = require('util')

console.log(oper);

console.log("Addition :" , add(5, 5));

console.log(`Substraction : ${sub(15, 5)}`);

console.log(`Substraction : ${oper.mul(15, 5)}`);

console.log(`Substraction : ${oper.pow(15, 5)}`);


const myBio = util.format("My name is %s, And I'm %d years old", Bio.name, Bio.age)
console.log(myBio);