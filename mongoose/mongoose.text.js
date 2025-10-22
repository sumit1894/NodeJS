
import mongoose from "mongoose";

//todo Step 1:- to connect to the mongoDB server

try {
    await mongoose.connect("mongodb://127.0.0.1/mongoose_database");
    mongoose.set("debug", true);
} catch (error) {
    console.log(error);
    process.exit();
}


//todo step 2:- create Schema

const userSchema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    age: { type: Number, require: true, min: 5 },
    createdAt: { type: Date, default: Date.now() },
})


//todo step 3:- creating Model(connection creating)

const Users=mongoose.model("user",userSchema);
// await Users.create({name:"sumit",age:31,email:"sumit!894@gmail.com"})

//? data
const usersData=[
    {name:"bob",age:21,email:"sumit@894@gmail.com"},
    {name:"ram",age:31,email:"sumit@824@gmail.com"},
    {name:"Syam",age:11,email:"sumit@194@gmail.com"},
]

//! step1:Inserting data (add)
// await Users.insertMany(usersData);

//! reading data from DB
// const user=await Users.find({age:{$gt:30}});
// console.log(user)

//! update Data
// const updateUsers=await Users.updateOne(
//     {email:"sumit@894@gmail.com"},
//     // {$set:{age:40}}
//     {$inc:{age:5}}
// )
// console.log(updateUsers)

//! Delete data

const DeleteUsers=await Users.deleteOne({
    email:"sumit@894@gmail.com"
})
console.log(DeleteUsers)


await mongoose.connection.close()
