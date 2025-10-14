
import https from "https";
import chalk from "chalk";


const getJoke=()=>{
    const url='https://official-joke-api.appspot.com/random_joke';

    https.get(url,(response)=>{
        let data="";

        //!syntax response.on("eventName", callbackFunction)

        response.on("data",(chunk)=>{
            data+=chunk;
        });

        response.on("end",()=>{
            const joke=JSON.parse(data);

            console.log(chalk.bgWhite(`Here is a random ${joke.type} joke`));
            console.log(chalk.red.bgWhite(`${joke.setup}`));
            console.log(chalk.blue.bgWhite.bold(`${joke.punchline}`))
        });

        response.on("error",(err)=>{
            console.error(`${err.message}`)
        });
    })
}

getJoke();