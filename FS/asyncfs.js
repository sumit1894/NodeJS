
const fs=require("fs");
const path=require("path");

const fileName ="asyncfs.txt";
const filePath=path.join(__dirname,fileName);



//todo WriteFile

/*

//*----------------------------------------------------------------------------------------------

//* fs.writefile(): writes data to a file, replacing the file if it already exists.
//! syntax: fs.writefile(path,data,options,callback);

//? path: file path to write to
//? data: content to write
//? options: optional. Specifies encoding ("utf8"), mode,or flag.
//? callback: A function with an error parameters.

//*----------------------------------------------------------------------------------------------

const writefile=fs.writeFile(filePath,"this is initial data","utf-8",(err)=>{
    if(err) console.error(err);
    else console.log("file has been saved")
})

console.log(writefile);

*/



//todo  Read File 

/*
//*----------------------------------------------------------------------------------------------

//* fs.readfile(): read the content of the file asynchronously and return the data as a buffer  or a string.

//! syntax: fs.readfile(path,option, callback);

//? path: file path to read the content 
//? option: optional, to convert the text int normal text default is binary form
//? callback: a function with parameters (err, data).

//*----------------------------------------------------------------------------------------------

const readFile=fs.readFile(filePath,"utf-8",(err,data)=>{
    if(err) console.error(err);
    else console.log(data);
})

console.log(readFile);

*/


//todo Update/Append file


/*

//*----------------------------------------------------------------------------------------------

//* fs.appendFile(): update data to file. if he file doest not exist it create it.
//! syntax: fs.appendfile(path , data, option, callback);


fs.appendFile(filePath,"\n add new data","utf-8",(err)=>{
    if(err) console.error(err);
    else console.log("update sucessfully");
})



//*----------------------------------------------------------------------------------------------

*/


//todo delete file

/*

//*----------------------------------------------------------------------------------------------

//* fs.unlink(): delete the file asynchronously
//! syntax: fs.unlink(path, callback);

//*----------------------------------------------------------------------------------------------

fs.unlink(filePath,(err)=>{
    if(err) console.error(err);
    else console.log("deleted");
})

*/
