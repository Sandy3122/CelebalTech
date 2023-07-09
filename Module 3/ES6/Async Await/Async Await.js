/*
The async function declaration creates a binding of a new async function to a given name.
The await keyword is permitted within the function body, enabling asynchronous,
promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains.


1. simplify working with asynchronous code and Promises
2. They provide a more synchronous-like syntax for handling asynchronous operations, making the code easier to read and write.
*/


//Example Using Promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Hello all, I'm Seeram Sandeep";
            data ? resolve(data) : reject("Data Not Available");
        }, 2000);
    });
}


//Using Async/Await
const fetchAsyncData = async () =>{
    try{
        const data = await fetchData();
        console.log(data)   //Hello all, I'm Seeram Sandeep
    }
    catch(err){
        console.log(err)
    }
}

fetchAsyncData();


//The usage of async and await makes the code appear more synchronous and eliminates the need for explicit Promise chaining or using then and catch methods.
//It greatly simplifies the handling of asynchronous operations and improves code readability.
