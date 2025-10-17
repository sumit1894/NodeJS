// export const PORT= isNaN(process.env.PORT)?3000:parseInt(process.env.PORT);

//todo using Zod

import { z, ZodError } from "zod";



//! this ZOd is used for age validation

/*

const ageSchema = z.number().min(18).max(100).int();
const userAge = 17;

// const parseUserAge = ageSchema.parse(userAge);
const {data,error,success} = ageSchema.safeParse(userAge);

console.log(data);
console.log(error);
console.log(success);

*/


//! can be done like this also to show rror message
/* 
try {
    const parseUserAge = ageSchema.parse(userAge);
    console.log(parseUserAge);

} catch (error) {
    if (error instanceof ZodError) {
        console.log(error.issues[0].message);
    } else {
        console.log("Unexpecterd Error", error);
    }
}

*/


//todo For PORT 

const PortSchema=z.coerce.number().min(1).max(65535).default(3000); //*coerce convert string into number
export const PORT=PortSchema.parse(process.env.PORT); //* now it can rn for string "3000" aslo


