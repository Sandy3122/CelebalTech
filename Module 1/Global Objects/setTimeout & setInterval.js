//setTimeout And setInterval
/*
setTimeout and setInterval: The setTimeout and setInterval functions allow you to schedule the execution of a callback function
after a specified delay or at regular intervals.
*/

setTimeout(() => {
    console.log('Delayed message');
  }, 1000);                     // Output after 1 second: Delayed message
  
  setInterval(() => {
    console.log('Repeated message');
  }, 1000);                     // Output every 1 second: Repeated message