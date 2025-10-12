

//? Challenge: "Event Maestro: Handle it all!"

//! objective
//* Create a program using Node.js  EventEmitter that: 

//? Listens for multiple types of user Events (e.g , login, Logout, Purchase, and profile updates).
//? Track how many times each Event is Emmitted.
//? logs a summary of all event occurrences when a special summary event is triggered.


//! Requirements 
//? Create atleast four custome events (e.g , login, Logout, Purchase, and profile updates).
//? Emit the Events multiple times with different arguments (username,item Purchased).
//? Track and store the count of each event type.
//? Define a summary Event that logs a details reports of how many times each event was triggered.


const fs=require("fs")
const path = require("path");
const EventEmmitter = require("events");
const emitter = new EventEmmitter();

const filePath = path.join(__dirname, "eventCounts.json");


let eventCounts = {
    "Log-In": 0,
    "Log-Out": 0,
    "Purchased": 0,
    "ProfileUpdate": 0,
}

if(fs.existsSync(filePath)){
    eventCounts=JSON.parse(fs.readFileSync(filePath,"utf-8"));
}

function saveCounts(){
    fs.writeFileSync(filePath,JSON.stringify(eventCounts,null,1))
}



emitter.on("Log-In", (name) => {
    eventCounts["Log-In"]++;
    console.log(`${name} Log-In`);
    saveCounts();
})

emitter.on("Log-Out", (name) => {
    eventCounts["Log-Out"]++;
    console.log(`${name} Log-Out`);
    saveCounts();

})

emitter.on("Purchased", (product) => {
    eventCounts.Purchased++;
    console.log(`${product} Purchased`);
    saveCounts();

})

emitter.on("ProfileUpdate", (male) => {
    eventCounts.ProfileUpdate++;
    console.log(`${male} Update`);
    saveCounts();
})

//? Summary

emitter.on("summary",()=>{
    console.log(eventCounts)
})


emitter.emit("Log-In", "Sumit");
emitter.emit("Log-Out", "Sumit");
emitter.emit("Purchased", "Laptop");
emitter.emit("ProfileUpdate", "Gmail");

//? show the summary
emitter.emit("summary")

