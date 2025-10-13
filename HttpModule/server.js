//! HTTP Module – Node.JS

//? Step 1: Importing the http Module
//* • The http module is built into Node.js. Use require('http') to import it into your script.
//? Step 2: Using http.createServer()
//* • The createServer method initializes an HTTP server.
//* • It takes a callback function as an argument with two parameters:
//* • req: the incoming request object.
//* • res: the outgoing response object.
//? Step 3: Handling Requests
//* • The req.url property provides the path requested by the client.
//* • Based on req.url, send different responses using res.end().
//? Step 4: Starting the Server
//* • Use the listen() method to specify the port the server will run on.
//* • Optionally, pass a callback to run code when the server starts (e.g., console.log())


//todo Import http module
const http=require("http");

//todo createServer
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.setHeader("Content-Type","text/html1")
        res.write("<h1>I am sumit prasad</h1>");
        res.end();
    }
    if(req.url==="/source-code"){
        res.write("offer 50% till dec 2025");
        res.end();
    }
    if(req.url==="/contact"){
        res.setHeader("Content-Type","text/plain");
        res.write("contact me on instagram:- sumit__1894");
        res.end();
    }
});

//todo listening (running the surver);
const PORT=3000;
server.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
});


