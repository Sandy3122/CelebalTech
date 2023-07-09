/*
Destructuring Assignment: Destructuring assignment allows extracting values from arrays or objects into distinct variables using a concise syntax.
It simplifies working with complex data structures and enables easy assignment of multiple variables in a single line.
*/


//Destructuring : Destructuring that allows to unpack values from array of objects, into individual variable

const Person = {
    myName : "Sandeep",
    myAge : 22,
    myMail : "sandeep@gmail.com"
}

console.log(Person)
console.log(Person.myMail)

//Destructuring
const {myName, myAge, myMail} = Person;
console.log(myName)
console.log(myAge)
console.log(myMail)


