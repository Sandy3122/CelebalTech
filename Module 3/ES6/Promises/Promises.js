/*
Promises: Promises provide a cleaner and more flexible approach to asynchronous programming.

They simplify working with asynchronous operations by representing a value that may be available in the future,

either as a resolved value or a reason for rejection.

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
