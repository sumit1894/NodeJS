
import mongoose from "mongoose";


//todo Step 1:- to connect to the mongoDB server

try {
    await mongoose.connect("mongodb://127.0.0.1/middleWare_database")
    // mongoose.set("debug", true)
} catch (error) {
    console.log(error)
    process.exit();
}

//todo step 2:- create Schema

const userSchema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    age: { type: Number, require: true, min: 5 },
    // createdAt: { type: Date, default: Date.now() },
    // updateAt: { type: Date, default: Date.now() },
}, { timestamps: true })

//todo pre save 
userSchema.pre(
    ["updateOne", "updateMany", "findOneAndUpdate"],
    function (next) {
        this.set({ updateAt: Date.now() });
        next();
    }
);

const Users = mongoose.model("user", userSchema);
// await Users.create({ name: "sumit", age: 31, email: "sumit@1893@gmail.com" })

await Users.updateOne({ email: "sumit@1893@gmail.com" }, { $set: { age: 25 } })





await mongoose.connection.close()





