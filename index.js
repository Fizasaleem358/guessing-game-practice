#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([{
        message: "please guess a number",
        type: "number",
        name: "userGuessNumber"
    },]);
if (answer.userGuessNumber === randomNumber) {
    console.log("congrats you guess a right number");
}
else {
    console.log("wrong answer please try again");
}
