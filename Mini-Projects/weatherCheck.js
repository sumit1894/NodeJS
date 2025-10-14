
import readline from "readline/promises";
import https from "https";
import chalk from "chalk";
import { error } from "console";

//* OpenWeather APi Details

const API_Key="b3c695094256ca68762611e0afb8c464";
const Base_Url="https://api.openweathermap.org/data/2.5/weather";


const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const getWeather=async(city)=>{
        const url=`${Base_Url}?q=${city}&appid=${API_Key}&units=metric`;

        try{
            const response=await fetch(url);
            if(!response.ok){
                throw new Error("City not found. pleased check the city name.");
            }
            const WeatherData=await response.json();

            console.log(chalk.bgYellowBright(`\nWeather Information`))

            console.log(chalk.blueBright(`City: ${WeatherData.name}`));
            console.log(chalk.blueBright(`Temperature: ${WeatherData.main.temp}°C`));
            console.log(chalk.blueBright(`Description: ${WeatherData.weather[0].description}`));
            console.log(chalk.blueBright(`Humidity:- ${WeatherData.main.humidity}%`));
            console.log(chalk.blueBright(`Speed: ${WeatherData.wind.speed}m/s\n`));

        }catch(error){
            console.log(error);
        }
}

const city=await rl.question("Enter a city name to get it Weather: ");
await getWeather(city);
rl.close();


