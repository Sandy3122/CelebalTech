/*
Promises: Promises provide a cleaner and more flexible approach to asynchronous programming.
They simplify working with asynchronous operations by representing a value that may be available in the future,
either as a resolved value or a reason for rejection.


Promises are a powerful feature in JavaScript used for handling asynchronous operations.
They provide a cleaner and more structured way to work with asynchronous code compared to callbacks.

** Basic Syntax:
A Promise represents the eventual completion or failure of an asynchronous operation and its resulting value.


** States of a Promise:
A Promise is in one of three states: pending, fulfilled (resolved), rejected.
Once a Promise is resolved or rejected, it transitions to a settled state and cannot change.
.then() and .catch():

The .then() method is used to handle the resolved state of a Promise.
The .catch() method is used to handle the rejected state.


*/

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "";
            data ? resolve(data) : reject("Data Not Found")
        }, 2000);
    });
};

fetchData()
    .then(data => console.log(data)) // Hello, world!)
    .catch(error => console.log(error)) // Data not available
