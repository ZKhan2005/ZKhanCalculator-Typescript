#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "number1",
        message: "Enter your 1st number: "
    },
    {
        type: "number",
        name: "number2",
        message: "Enter 2nd number:"
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/", "%", "**"],
        message: "Select Operator:",
    },
]);
if (answer.operator === "+") {
    console.log(answer.number1 + answer.number2);
}
else if (answer.operator === "-") {
    console.log(answer.number1 - answer.number2);
}
else if (answer.operator === "*") {
    console.log(answer.number1 * answer.number2);
}
else if (answer.operator === "/") {
    console.log(answer.number1 / answer.number2);
}
else if (answer.operator === "%") {
    console.log(answer.number1 % answer.number2);
}
else if (answer.operator === "**") {
    console.log(answer.number1 ** answer.number2);
}
else {
    console.log("enter valid input");
}
