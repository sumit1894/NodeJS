
//* Import EventEmitter class
const EventEmitter= require("events");
const { emit } = require("process");


//* Create an instance of EventEmitter
const emitter=new EventEmitter();


//* 1. Define an Event Listener(addListener) 
emitter.on("greet",()=>{
    console.log("hello Everyone!");
})

 
//* 2. trigger (emit) the "greet" event 
emitter.emit("greet");



//! you can also pass data as argument 


emitter.on("greets",(username,prof)=>{
    console.log(`hello ${username}, you know ${prof}`)
})

emitter.emit("greets","Sumit Prasad","Mern Stak");


//! but its best idea to take a single argument as an object.

emitter.on("greetss",(arg)=>{
    console.log(`hello ${arg.username}. ${arg.prof}`)
});

emitter.emit("greetss",{username:"sumit prasad", prof:"Mern Stack"})