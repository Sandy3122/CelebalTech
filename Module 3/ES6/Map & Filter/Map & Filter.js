//Map And Filter

/*
In ES6, the map and filter are higher-order functions introduced as array methods. 
They provide a concise and functional approach to iterate over and transform arrays. 


1. Both map and filter methods do not modify the original array. 
2. Instead, they create and return a new array based on the logic provided in the callback function.
3. These functions are often used in functional programming paradigms and can be combined with
    other array methods to perform powerful transformations and filtering on arrays in a concise and readable manner.
*/
//Syntax

//Map
// variableName.map((element) => print(element))
const arr = [1,2,3,4,5,6,7,8,9,10]

arr.map((ele) => console.log(ele))


//Filter
// variableName.Filter((element) => conditon)
const filteredArray = arr.filter((ele) => ele % 2 == 0);        //It will return an array with condition
console.log("Filtered Array :", filteredArray)
filteredArray.map((ele) => console.log(ele))
