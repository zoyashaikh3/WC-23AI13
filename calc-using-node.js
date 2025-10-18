// calculator.js

const readline = require("readline");

// Create interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== Simple Node.js Calculator ===");
console.log("Operations: add, subtract, multiply, divide");

rl.question("Enter first number: ", (num1) => {
  rl.question("Enter second number: ", (num2) => {
    rl.question("Enter operation: ", (operation) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      let result;

      switch (operation.toLowerCase()) {
        case "add":
          result = a + b;
          break;
        case "subtract":
          result = a - b;
          break;
        case "multiply":
          result = a * b;
          break;
        case "divide":
          result = b !== 0 ? a / b : "Error! Division by zero.";
          break;
        default:
          result = "Invalid operation!";
      }

      console.log(\nResult: ${result});
      rl.close();
    });
  });
});
