
import { MongoClient } from "mongodb";

//! Connection path
const client=new MongoClient("mongodb://127.0.0.1")

//! connected
await client.connect();

//! Creating DataBase
const db=client.db("mongodb_Nodejs_db");

//! creating collection
const userCollection=db.collection("users")


//todo Insert Data (Write operation)

//! documents insert: data insert
// userCollection.insertOne({
//     name:"sumit Prasad",
//     age:22,
// });

// //! Document collect many
// userCollection.insertMany([
//     {name:"Sumit",role:"user",age:21},
//     {name:"Sumit p",role:"user",age:20},
//     {name:"SP stack",role:"admin",age:25},
// ])


//todo Read Operation 

//? 1st way hard
// const userCursor=userCollection.find();
// console.log(userCursor);

// for await (const user of userCursor){
//     console.log(user);
// }


//? 2nd way Easy
// const userCursor= await userCollection.find().toArray();
// console.log(userCursor)

// const user= await userCollection.findOne({name:"Sumit p"})
// console.log(user)

// console.log(user._id.toHexString())


//todo Update 

// await userCollection.updateOne({name:"sumit Prasad"},{$set:{age:25}});
// await userCollection.updateMany({name:"sumit Prasad"},{$set:{age:30}})

//todo Delete

// await userCollection.deleteOne({name:"Sumit p"})

await userCollection.deleteMany({name:"sumit Prasad"})
console.log(`${result.deletedCount} document deleted`)






