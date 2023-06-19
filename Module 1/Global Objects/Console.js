//Console
/*
console: The console object provides methods for writing to the console,
allowing you to output messages and debug information during the execution of your code.

1. Console.log is the most commonly used console method. It is used to log the output to the console.

2. Console.error()
Is used to output an error message to the console
usually in red with an error symbol at the beginning.

3. Console.warn()
Is used to output a warning message to the console
usually in yellow with a warning symbol at the beginning.


5. Console.time() and Console.timeEnd()
Console.time() and Console.timeEnd() are used to know the time spent by a function or block of code to execute. 
The time() and timeEnd() methods can determine the time spent.
The code inside can be anything, but their labels must be the same.

6. Console.table() method is used to generate a table inside the console.

*/

//console.log()
console.log("abc");
console.log(1);
console.log(true);
console.log(null);
console.log(undefined)
console.log([1,2,3,4,5,6,7,8])              //Array Inside Log
console.log({a : 1, b : 2, c : 3, d : 4});  //Object Inside Log


//console.error()
console.error("You Have An Some Error Message")     //Error Message Will Be Clearly Show in Chrome Console.


//console.warn()
console.warn("You Have A Some Warning Message")     //Warning Message Will Be Clearly Show in Chrome Console.

//console.table()
console.table({a : 1, b : 2, c : 3, d : 4});