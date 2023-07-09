//Rest & Spread Operators

/*
Rest and Spread Operators: The rest (...) and spread (...) operators provide a concise way to handle variable-length arguments in functions.
The rest operator collects multiple arguments into an array, while the spread operator expands an array into individual elements.


*/

// Rest operator
const sum = (...numbers) => {
    return numbers.reduce((acc, num) => acc + num, 0);
  };
  console.log(sum(1, 2, 3)); // 6
  
  // Spread operator
const numbers = [4, 5, 6];
console.log(...numbers); // 4 5 6

const arr1 = [1,2,3,4]
const arr2 = [...arr1, 5,6,7,8]
console.log(arr2)


const obj1 = {
  name :"Seeram Sandeep",
  age : 22
}

const obj2 = {
  ...obj1,
  mail : "seeram@gmail.com",
  ranch : "Mechanical"
}
console.log(obj2)