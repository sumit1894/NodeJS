
import express from "express";

const app=new express();

app.get("/",(req,res)=>{
   return res.send("<h1>Hello World</h1>");
});
app.get("/about",(req,res)=>{
   return res.send("<h1>Hello About</h1>");
});

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
});