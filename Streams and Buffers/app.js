

import { createReadStream, createWriteStream} from "fs";
import path from "path";

const inputFilePath = path.join(import.meta.dirname, "input.txt");
const outputFilePath = path.join(import.meta.dirname, "output.txt");

//! read the file 
const readableStream = createReadStream(inputFilePath, { encoding: "utf-8", "highWaterMark": 16 })

//! write the file
const writeableStream=createWriteStream(outputFilePath);

//! details how data store with buffer
/*


//*listen for data chunks

readableStream.on("data",(chunk)=>{
    console.log("Buffer (chunk):",Buffer.from(chunk));
    console.log("Reacieved chunk:",chunk);
    writeableStream.write(chunk);
});

//! handle stream end

readableStream.on("end",()=>{
    console.log("file read completed.");
    writeableStream.end();
});

*/

//! help to store data
readableStream.pipe(writeableStream)


//handle Error
readableStream.on("error",(err)=>console.log(err))
writeableStream.on("error",(err)=>console.log(err))