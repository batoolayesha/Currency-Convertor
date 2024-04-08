#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magenta.bold("\n \t Welcome to 'CodewithAyesha' - Currency Convertor\n"));

// Define the list of currencies and their exchange rates:
let exchange_rate: any = {
    "USD": 1, //Base Currency
    "EUR": 0.9, //European Currency
    "JYP": 113, //Jappanese Currency
    "CAD": 1.3, //Canadian Currency
    "AUD": 1.65, //Australian Currency
    "PKR": 277.70, //Pakistan Currency
    // Add more currencies and their exchange rates here:
} 
    
    //Prompt the user to select currencies to convert from and to:

let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.yellow("Select the currency to covert from:"),
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.yellow("Select the currency to convert into:"),
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.yellow("Enter the amount to convert:"),
    }
]);

//Perform currency conversion by using formula:

let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

// Formula of conversion:

let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

// Display the converted amount:

console.log(`Converted Amount = ${chalk.blue(converted_amount.toFixed(2))}`);
