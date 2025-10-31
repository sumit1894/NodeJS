import mysql from "mysql2/promise";



//todo 1: to connect to mySql server
const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sumit@123",
    database: "mysql_db",
})
console.log("mysql connection successfully");


//todo 2: we need to create a databse
// await db.execute(`create database mysql_db`);
// console.log(await db.execute("show databases"))


//todo 3: then we to create a table 
// await db.execute(`
//     CREATE TABLE users (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     username VARCHAR(100) NOT NULL,
//     email VARCHAR(100) NOT NULL UNIQUE
//     );
// `)


//todo 4: is to perform CURD operation  
//! insert (write)
//? Using inline values (Not recommended)
// await db.execute(`
//     insert into users(username,email) values('sumit','sumit@gmial.com');    
// `)

//? Using prepared Statements (Best Practice)
// await db.execute(`insert into users(username,email) values(?,?)`,
//     ["Prasad", "prasad@gmail.com"])

//? multiple 

// const values=[
//     ["bob","bob@gmail.com"],
//     ["bob1","bob1@gmail.com"],
//     ["boo2","bob2@gmail.com"],
//     ["bob3","bob3@gmail.com"]
// ];

// await db.query("insert into users(username,email) values ?",[values])



//! UPdate

// try {
//     const [rows] = await db.execute("update users set username='bobbob' where email= 'bob@gmail.com'");
//     console.log(rows);
// } catch (error) {
//     console.log(error);
// }

//? NEW WAY

// try {
//     const [rows]=await db.execute("UPDATE users set username=? where email=?",
//         ["SumitPrasad","prasad@gmail.com"]);
//         console.log(rows)
// } catch (error) {
//     console.log(error)
// }


//! Delete

// try {
//     const [rows] = await db.execute("DELETE FROM users where email= 'bob@gmail.com'");
//     console.log(rows);
// } catch (error) {
//     console.log(error);
// }

//? main way
try {
    const [rows] = await db.execute("DELETE FROM users where email= ?",["bob3@gmail.com"]);
    console.log(rows);
} catch (error) {
    console.log(error);
}


//!read
const [rows] = await db.execute(`select * from users`)
 // const [rows] = await db.execute(`select * from users where username="bob"`)
console.log(rows)