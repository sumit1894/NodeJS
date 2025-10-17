
import express from "express";
import { PORT } from "./env.js";
import path from "path"

const app = new express();



//!1 normally how to get and send data in Express

/*

app.get("/",(req,res)=>{
   return res.send("<h1>Hello World</h1>");
});

app.get("/about",(req,res)=>{
   return res.send("<h1>Hello About</h1>");
});

*/





//!2 how to access the folder and file.

/*

const __filename = fileURLToPath(import.meta.url)
console.log(__filename) //! give the file name
const __dirname = path.dirname(__filename);
console.log(__dirname) //! give the folder name of this file name


*/



//todo4 absolute path for static folder,to run html and css without res.send
const staticPath = path.join(import.meta.dirname, "public")
app.use("/public", express.static(staticPath))



//todo5 ES Modules using await without async

/* 

const response=await fetch("https://jsonplaceholder.typicode.com/todos/1");
const data= await response.json()
console.log(data);

*/


//todo Files and url.meta.dirname

/*

app.get("/", (req, res) => {

   // console.log(import.meta.dirname) //*folder path
   // console.log(import.meta.filename) //*with file Path


   //todo3 to access only index.html
   // const homePagePath = path.join(__dirname, "public", "index.htmls");
   // const homePagePath=path.join(url.meta.dirname,"public","index.html");
   // res.sendFile(homePagePath);



})

*/


//todo req.params,req.params.id


//! single root access paramater
app.get("/profile/:username", (req, res) => {
   const userName=req.params.username;
   res.send(`<h1>Hello,${userName}</h1>`);
});

//! multiple root acces 
app.get("/profile/:username/article/:slug",(req,res)=>{
   const formatedURL=req.params.slug.replace(/-/g, " ");
   res.send(`<h1> Article ${req.params.username} by ${formatedURL} </h1>`)
})



//todo server running 
// const PORT=process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(`Listening on PORT ${PORT}`);
});




