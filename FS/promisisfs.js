const fs = require("fs");
const path = require("path");


const fileName = "fspromisis.txt";
const filepath = path.join(__dirname, fileName);



//todo read Dir Example

/*

// why .then() and .catch() ?

//? .then() ensure clear changing of multiple asynchrous operations.
//? .catch() centrizes error handeling, make it easy to debug and manage failures.


//*----------------------------------------------------------------------------------------------


const file=__dirname;
fs.promises
    .readdir(file)
    .then((data) => { console.log(data) })
    .catch((err) => { console.log(err) });


//*----------------------------------------------------------------------------------------------

*/


//todo WriteFile

/*

//*----------------------------------------------------------------------------------------------

//* Create (Write a file ): fs.promisis.writeFile
//* Create or overwrites a files with specific content
//* the writeFile() methods write data to a file asynchronously.
//* if the file did not exist, it create it
//* if it is exist, its content is replaced.

//! syntax: fs.promisis.writefile(path,data,option).then().catch();
//? path: path to the file.
//? data: content to write
//? options: Encoding ('utf8'), flags,etc.(optional);

//*----------------------------------------------------------------------------------------------

fs.promises
    .writeFile(filepath, "this is initial data", "utf-8")
    .then(() => {
        console.log("file created successfully!")
    })
    .catch((err) => { console.log(err) });

*/


//todo ReadFile

/*

//*----------------------------------------------------------------------------------------------

//* Reaad(Read a file ): readFile();
//* the readFile() methods reads data from a file.
//* it can return the data as a buffer or string based on the encoding provided

//!  syntax: fs.promisis readfile(path,options).then(data...).catch(err..)

//? path: path to the file
//? options : Encodidng ("utf8") or no encoding for binary data.


//*----------------------------------------------------------------------------------------------

fs.promises
    .readFile(filepath,"utf-8")
    .then((data) => { console.log(data) })
    .catch((err) => { console.log(err) });

*/


//todo update/Append file

/*

//*----------------------------------------------------------------------------------------------

//* update(Append Content to a file): appendFile()
//* add content to the end of the file.
//* The appendFile() methods adds content without overiding the existing data.

//! syntax: fs.promises.appendfile(path,data,option).then().catch();

//? path: path to he file
//? data : Content to append.
//? options: Encoding ('utf8') or no encoding for binary data.

//*----------------------------------------------------------------------------------------------


fs.promises
    .appendFile(filepath, "\n add new data", "utf-8")
    .then(()=>{console.log("Updated Successfully!")})
    .catch((err) => {
        console.log(err)
    })

*/



//todo delete


/*

//*----------------------------------------------------------------------------------------------
//!  synatx: fs.promisis.unlink(path).then().catch();
//? path: path to hte file 
//*----------------------------------------------------------------------------------------------

fs.promises.unlink(filepath).then(console.log("file Delete Successfully")).catch((err)=>{
    console.error(err);
})

*/





