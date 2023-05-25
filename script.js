function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

function calculate() {
  let num1 = parseFloat(document.getElementById("num-a").value);
  let num2 = parseFloat(document.getElementById("num-b").value);
  let operation = document.querySelector(
    'input[name="operation"]:checked'
  ).value;
  let result;

  switch (operation) {
    case "addition":
      result = add(num1, num2);
      break;
    case "subtraction":
      result = subtract(num1, num2);
      break;
    case "multiplication":
      result = multiply(num1, num2);
      break;
    case "division":
      result = divide(num1, num2);
      break;
  }

  document.getElementById("result").textContent = "Result: " + result;
}

function reset() {
  document.getElementById("num-a").value = "";
  document.getElementById("num-b").value = "";
  document.getElementById("result").textContent = "";
}
