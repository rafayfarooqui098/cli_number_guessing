#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 6 + 1);
// computer will genrate random number - done
// user input for guessing number-done
//compare the user and computer input number and show result -done
const answer = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "please guess a number 1-6",
    },
]);
if (answer.userguessednumber === randomnumber) {
    console.log("conguralation you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
