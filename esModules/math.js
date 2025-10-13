

 const add = (a, b) => {
    return a + b;
}
 const sub = (a, b) => {
    return a - b;
}
 const mult = (a, b) => {
    return a * b;
}
 const div = (a, b) => {
    return a / b;
}
//! 2nd:- Export single-single 
//  export const PI=3.124;
 const PI=3.124;


//! 1st:-  Default Export for single only 
export default mult;

//! 3nd:- Export all at once 
export {add,sub,mult,div,PI};

