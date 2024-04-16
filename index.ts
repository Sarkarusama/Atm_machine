import inquirer from "inquirer";

let myBalance = 10000;
let pin = 12345;

const answer = await inquirer.prompt([
  {
    message: "Enter Pin number",
    type: "number",
    name: "usrPin",
  },
]);
if (answer.usrPin === pin) {
  console.log("correct pin code");

  const operationAns = await inquirer.prompt([
    {
      message: " Please Select a option :",
      type: "list",
      name: "operation",
      choices: ["withdraw", "check balance"],
    },
  ]);

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        message: "Enter amount :",
        type: "number",
        name: "amount",
      },
    ]);

    myBalance -= amountAns.amount;
    console.log("your remaining balance is :" + myBalance);

  } else if (operationAns.operation === "check balance") {
    console.log("Your Balance is :" + myBalance);

  } 
}else{
  console.log("Incorrect Pin number");
}

