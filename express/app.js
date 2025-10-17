
import express from "express";
import { PORT } from "./env.js";
import path from "path"
import { fileURLToPath } from "url";

const app=new express();


//! normally how to get and send data in Express

/*

app.get("/",(req,res)=>{
   return res.send("<h1>Hello World</h1>");
});

app.get("/about",(req,res)=>{
   return res.send("<h1>Hello About</h1>");
});

*/


//!how to access the folder and file.

const __filename=fileURLToPath(import.meta.url)
console.log(__filename) //! give the file name
const __dirname=path.dirname(__filename);
console.log(__dirname) //! give the folder name of this file name

app.get("/",(req,res)=>{
   // console.log(import.meta.url) //* only run in vscode
   // console.log(import.meta.dirname) //*folder path
   // console.log(import.meta.filename) //*with file Path



   const homePagePath=path.join(__dirname,"public","index.html");
   // const homePagePath=path.join(url.meta.dirname,"public","index.html");//! will not run
   console.log(homePagePath);
   res.sendFile(homePagePath);


})


// const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
});




