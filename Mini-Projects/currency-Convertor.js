
import readline from "readline";
import https from "https";
import chalk from "chalk"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


const apiKey = "ee630735cb948181015d76f6";
const Api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const convertCurrency = (amount, rate) => {
    return (amount * rate).toFixed(2);
}

https.get(Api, (Response) => {

    let data = "";

    Response.on("data", (chunk) => {
        data += chunk;
    })

    Response.on("end", () => {
        const rates = JSON.parse(data).conversion_rates;
        console.log(rates);

        rl.question("Enter the amount in USD: ", (amount) => {
            rl.question("Enter the target currency(e.g., INR,EUR,NPR: ", (currency) => {
                const rate = rates[currency.toUpperCase()];
                if (rate) {
                    console.log(chalk.bgRedBright(`${amount} USD is approximately ${convertCurrency(amount, rate)} ${currency}`))
                } else {
                    console.log("Invalid Currency Code")
                }
                rl.close();
            })
        })
    })
})



