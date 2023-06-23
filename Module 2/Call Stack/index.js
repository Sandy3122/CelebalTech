//Example for call stack, Node API, Callback Queue, Event Loop

// console.log("Starting");

// setTimeout(() => console.log("2 Seconds Delay"), 2000);
// setTimeout(() => console.log("0 Seconds Delay"), 0);

// console.log("Starting");


//Call Stack
/*
1. In Node.js, the call stack represents the current execution of a program.
2. It keeps track on the order in which function calls are made, and allowing the programme to know where to go after a function completes.
3. The call stack follows the Last-In-First-Out (LIFO) principle.
4 . It means that the last function added to the stack is the first one to be executed.

The below is an example for the call stack
*/

function greet() {
  console.log('Hello,');
  name();
  console.log('World!');
}

function name() {
  console.log('OpenAI');
}

greet();

/*
The greet() function calls the name() function. When we invoke greet() at the end of the script.
Steps:

1. `greet()` is called and pushed onto the call stack.
2. The console logs 'Hello,'.
3. `name()` is called from within `greet()` and pushed onto the call stack.
4. The console logs 'OpenAI'.
5. `name()` completes execution and is popped off the call stack.
6. The console logs 'World!'.
7. `greet()` completes execution and is popped off the call stack.

The call stack keeps track of the execution flow and ensures that each function is executed in the correct order.

*/