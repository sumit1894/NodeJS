import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})



const fileCreation=()=>{
    rl.question("Enter the File Name:- ",(fileName)=>{
        rl.question("Enter teh content for the File: ",(content)=>{
            fs.writeFile(`${fileName}.txt`, content,(err)=>{
                if(err){
                    console.error(`${err.message}`)
                }else{
                    console.log(`file "${fileName}.txt" created successfully!`)
                }
                rl.close();
            })
        })
    })
}

fileCreation();







