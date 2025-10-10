const add = (a, b) => {
    return a + b;
}
//todo 1st way to export;  
// module.exports=add;

const sub = (a, b) => {
    return a - b;
}
const mult = (a, b) => {
    return a * b;
}
const div = (a, b) => {
    return a / b;
}
const PI=3.124;


//todo 2nd way to export  
module.exports={add, sub, mult,div,PI}; //! use for multiple export
