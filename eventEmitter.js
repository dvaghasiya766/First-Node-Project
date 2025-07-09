// Importing events
const EventEmitter = require("events");

// Initializing event emitter instances
let eventEmitter = new EventEmitter();

// Register to error
eventEmitter.on("error", (err) => {
  console.error("Attention! There was an error");
});

// Register to newListener
eventEmitter.on("newListener", (event, listener) => {
  console.log(`The listener is added to ${event}`);
});

// Register to removeListener
eventEmitter.on("removeListener", (event, listener) => {
  console.log(`The listener is removed from ${(event, listener)}`);
});

// Declaring listener geek1 to myEvent1
let geek1 = (msg) => {
  console.log("Message from geek1: " + msg);
};

// Declaring listener geek2 to myEvent2
let geek2 = (msg) => {
  console.log("Message from geek2: " + msg);
};

// Listening to myEvent with geek1 and geek2
eventEmitter.on("myEvent", geek1);
eventEmitter.on("myEvent", geek2);

// Removing listener
// eventEmitter.off('myEvent', geek1);

// Triggering myEvent
eventEmitter.emit("myEvent", "Event occurred");

// Triggering error
eventEmitter.emit("error", new Error("Attention!"));

console.log(eventEmitter.rawListeners("myEvent"));
