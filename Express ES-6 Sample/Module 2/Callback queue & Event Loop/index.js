//Callback Queue
/*
The callback queue, also know as the task queue.
The callback queue holds the callbacks of completed asynchronous operations.
When an asynchronous operation completes, its associated callback is placed in the callback queue, waiting to be executed.
*/



//Event Loop
/*
1. The event loop is responsible for monitoring the call stack and the callback queue. 
2. It ensures that the call stack is empty before processing callbacks from the callback queue.
3. The event loop constantly checks if the call stack is clear. If the call stack is empty, 
it picks the next callback from the callback queue and pushes it onto the call stack for execution.
4.The event loop operates continuously, allowing Node.js to handle multiple asynchronous operations 
concurrently without blocking the execution of other code.

*/