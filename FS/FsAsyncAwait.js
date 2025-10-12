
const fs = require("fs/promises");
const path = require("path");

const fileName = "FsAsyncAwait.txt";
const filePath = path.join(__dirname, fileName);

const TempFilePath = __dirname;


//todo ReadFolder

/*

const readFolder=async()=>{
    try {
        const res=await fs.readdir(TempFilePath);
        console.log(res);
    } catch (error) {
        console.error(error);
    }
}

readFolder();

*/



//todo Write File

/*

//*-----------------------------------------------------------------------------------------------

//* fs.Promisis.writefile(): writes data to a file asynchronously, if the file Exists, it overwrite the content 
//! syntax: fs.Promisis.writefile(path,data,options);

//? path: file path to write to
//? data: content to write
//? options: optional. Specifies encoding ("utf8"), mode,or flag.

//*-----------------------------------------------------------------------------------------------

const writeFileExample = async () => {
    try {
        await fs.writeFile(filePath, "this is initial data", "utf-8");
        console.log("File Created Successfully! ");
    } catch (error) {
        console.error(error)

    }
}

writeFileExample();

*/



//todo  Read File 

/*

//*----------------------------------------------------------------------------------------------

//* fs.promisis.readfile(): read the content of the file asynchronously 

//! syntax: fs.promisis.readfile(path,option);

//? path: file path to read the content 
//? option: optional, to convert the text int normal text default is binary form

//*----------------------------------------------------------------------------------------------

const readFileExample = async () => {
    try {
        const res = await fs.readFile(filePath, "utf-8");
        console.log(res);
    } catch (error) {
        console.error(error)
    }
}

readFileExample();

*/



//todo update/append File

/*

//*----------------------------------------------------------------------------------------------

//* fs.promisis.appendFile(): add content to end of the file .update data to file. if he file doest not exist it create it.
//! syntax: fs.promisis.appendfile(path , data, option);

//*----------------------------------------------------------------------------------------------

const appendFileExample = async () => {
    try {
        await fs.appendFile(filePath,"\nAdded new data","utf-8");
        console.log("data update Successfully!")
    } catch (error) {
        console.log(error)
    }
}

appendFileExample();

*/



//todo delete File

//*----------------------------------------------------------------------------------------------

//* Delete a file: fsPromisis.unlink(): Deletes a file by its path.
//! Syntax: fsPromisis.unlink(path);

//? path: the file path to delete.

//*----------------------------------------------------------------------------------------------

const DeleteFileExample = async () => {
    try {
        await fs.unlink(filePath);
        console.log("Delete Successfully! ")
    } catch (error) {
        console.log(error.message)
    }
}

DeleteFileExample();
