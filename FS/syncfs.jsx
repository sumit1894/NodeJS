
const fs=require("fs");
const path=require("path");

const fileName ="test.txt";
const filePath=path.join(__dirname,fileName);


//todo WriteFile

/*

//*-------------------------------------------------------------------------------
//* fs.writefilesync(): write data to file. if the file does not exist, it will created . if the file Exists,it ovverwrite the content. 

//! Syntax: fs.writefilesync(filePath,data,options);
//? filePath: the file path to write to.
//? data: the content to write to the file.
//? options: options include encoding ('utf8'),mode,or flags etc.

//*-------------------------------------------------------------------------------

//* utf-8(Unicode Transformation Format – 8-bit):- it tells the computer how to represent letters, numbers, emojis, and symbols as binary (0s and 1s).


const writeFile=fs.writeFileSync(
    filePath,
    "this is the initial data",
    "utf-8"
)

console.log(writeFile)

*/



//todo Read-file

/* 

//*-------------------------------------------------------------------------------

//* fs.readfilesync(): Read a file's content and return it as a string or buffer.
//! syntax: const data = fs.readfilesync(filePath,options);
//? filepath: path of file to read 
//? options: options  Encoding ('utf8') to get data as string.

//*-------------------------------------------------------------------------------
//? 1st  way
// const readfile=fs.readFileSync(filePath)
// console.log(readfile.toString()) //! use to convert binary data to string formate 


const readfile=fs.readFileSync(filePath,"utf-8")
console.log(readfile)


*/



//todo update/append File

/*

//*-------------------------------------------------------------------------------

//* fs.appendfilesync(): update data to file. if the file does not exist, it will created . if the file Exists,it update the content. 

//! Syntax: fs.appendfilesync(filePath,data,options);
//? filePath: the file path to write to.
//? data: the content to add to the file.
//? options: options include encoding ('utf8'),mode,or flags etc.

//*-------------------------------------------------------------------------------

const updateFile=fs.appendFileSync(
    filePath,
    "\nupdate data too",
    "utf-8"
)
console.log(updateFile);

*/



//todo Delete File

/*

//*-------------------------------------------------------------------------------

//* Delete file (fs.unlinkSync()) : Deletes  a file by its path.
//! syntax: fs.unlinkSync(filepath);
//? filepath: the path of a file to delete.

//*-------------------------------------------------------------------------------

const fileDelete= fs.unlinkSync(filePath);
console.log(fileDelete);

*/



//todo rename file

/*

//* Rename file (fs.renmaeSync): Renames a file from one name to another.
//! syntax: fs.renameSync(oldPath.newPath);
//? oldname: current file path
//? newPath: New file path or name.

const newUpdateFileName="updateTest.txt";
const newFilePath=path.join(__dirname,newUpdateFileName);

const fileRename=fs.renameSync(filePath,newFilePath);
console.log(fileRename);

*/


