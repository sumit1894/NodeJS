
//todo 1st way to import  
// const add= require("./maths")

//todo 2nd way to import 
const {add, sub, mult,div, PI}= require("./maths")

console.log(add(10,2))
console.log(sub(10,2))
console.log(mult(10,2))
console.log(div(10,2))
console.log(PI)



//todo 3rd way to import 
const math=require("./maths")

console.log(math.add(10,2))
console.log(math.sub(10,2))
console.log(math.mult(10,2))
console.log(math.div(10,2))
console.log(math.PI)