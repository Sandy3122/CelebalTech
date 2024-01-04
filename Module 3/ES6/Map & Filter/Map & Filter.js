//Map And Filter

/*
In ES6, Both map() and filter() are higher-order functions in JavaScript that operate on arrays.
They provide concise and expressive ways to transform and manipulate array elements.


1. Both map and filter methods do not modify the original array. 
2. Instead, they create and return a new array based on the logic provided in the callback function.

** map() **
1. map() is used for transforming each element of an array based on a provided function and creates a new array with the results.
2. It takes a callback function that is applied to each element of the array.


**filter() **
1. filter() is used for creating a new array containing only elements that satisfy a specified condition.
2. It takes a callback function that returns true or false for each element.

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
