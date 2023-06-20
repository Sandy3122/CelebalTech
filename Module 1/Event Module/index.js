/*
Event Module
Node.js has a built-in module, called "Events",
Where you can create-, fire-, and listen for-, your events.

Example 1 - Registering for the event to be fired only one time using once.

Example 2 - Create an event emitter instance and register a coiple of callbacks

Excample 3 - Registering for the event with callbacks parameters.

*/

// const EventEmitter = require("events");

// const event = new EventEmitter();   //Creating new instance of the class


const event = require("events");

const EventEmitter = new event.EventEmitter();

//EventEmitter.on() => has two parameters.
// One is what action is going on.
// Second is what action has to happen.

//First Event
var buttonClicked = () => console.log("Button Clicked");

EventEmitter.on("whatAction", buttonClicked);

//The Event will only be called after calling with EventEmitter.emit();
EventEmitter.emit("whatAction");


//Second Event
var welcome = (msg) => console.log(`Welcome To Events Module In Node.js, ${msg}`);

EventEmitter.on("whatNext", welcome);

//We can also pass arguments in this function as string
EventEmitter.emit("whatNext", "Sandeep");