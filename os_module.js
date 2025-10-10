const os=require("os");

console.log(os.platform()); //! Returns the OS platform (e.g., 'win32' for Windows,
console.log(os.arch()); //! Returns the CPU architecture (e.g., 'x64', 'arm').
console.log(os.freemem()) //! Returns the amount of free system memory in bytes.
console.log(os.totalmem()) //! Returns the total system memory in bytes.
console.log(os.uptime()) //! how long your computer has been running since the last restart, in seconds
console.log(os.homedir())//! C:\Users\sumit
console.log(os.hostname())//! reture home name like Sumit
console.log(os.networkInterfaces()) //! Returns an object with details about the network interfaces.
console.log(os.cpus()) //! details about cpu
console.log(os.tmpdir()) //! 







/* 



console.log("---------------------------------")


const free = os.freemem();
const total = os.totalmem();
const used = total - free;
console.log(`Used RAM: ${(used / 1024 / 1024 / 1024).toFixed(2)} GB`);
console.log(`Free RAM: ${(free / 1024 / 1024 / 1024).toFixed(2)} GB`);
console.log(`Total RAM: ${(total / 1024 / 1024 / 1024).toFixed(2)} GB`);

console.log("---------------------------------");


let uptime = os.uptime();
let hours = Math.floor(uptime / 3600);
let minutes = Math.floor((uptime % 3600) / 60);
let seconds = Math.floor(uptime % 60);

console.log(`Uptime: ${hours}h ${minutes}m ${seconds}s`);

console.log("---------------------------------");


os.cpus().forEach((cpu, index) => {
  console.log(`Core ${index + 1}:`);
  console.log(`Model: ${cpu.model}`);
  console.log(`Speed: ${cpu.speed / 1000} GHz`);
  console.log(`User Time: ${cpu.times.user}`);
  console.log(`System Time: ${cpu.times.sys}`);
  console.log(`Idle Time: ${cpu.times.idle}`);
  console.log("----------------------");
});




*/