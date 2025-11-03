import { email } from "zod";
import { db } from "./config/db.js";
import { usersTable } from "./drizzle/schema.js";
import { eq } from "drizzle-orm";

const main = async () => {


    //todo insert
    //! single insert
    /*
    const insertUser= await db.insert(usersTable).values({
        name:"sumit",
        age:31,
        email:"sumit@gmail.com"
    })
    */

    //! multiple insert
    /*
        const insertUser = await db.insert(usersTable).values([
            { name: "prasad", age: 22, email: "prasad@gmail.com" },
            { name: "prasad1", age: 22, email: "prasad1@gmail.com" },
            { name: "prasad2", age: 22, email: "prasad2@gmail.com" }
        ])
        console.log(insertUser);
    
    */


    //todo Read
    /*
    // const users=await db.select().from(usersTable);
    const users=await db.select().from(usersTable).where({
        email:"sumit@gmail.com",
    });
    console.log(users)
    */


    //todo Update
    /*
    // const updatedUser=await db.update(usersTable).set({name:"sumit prasad"}).where({email: 'sumit@gmail.com'});
    const updatedUser= await db.update(usersTable).set({name:"sumit"}).where(eq(usersTable.email,"sumit@gmail.com"))
    console.log(updatedUser)

    */


    //todo Delete 
    /*
        // await db.delete(usersTable).where({ email: "prasad2@gmail.com" });
        await db.delete(usersTable).where(eq(usersTable.email, "prasad1@gmail.com"));
    */





    

}

main().catch((error) => {
    console.log(error);
})
