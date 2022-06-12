const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
  // console.log(number);
  number.addEventListener('click', (e) => {
    // console.log(e.target.value);
    inputNumber(e.target.value);
    // updateDisplay(e.target.value);
    updateDisplay(currentNumber);
  });
})

const calculatorScreen = document.querySelector('.calculator-screen');

const updateDisplay = (number) => {
  calculatorScreen.value = number;
}

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '';

const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
}

const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
  operator.addEventListener('click', (e) => {
    // console.log(e.target.value);
    inputOperator(e.target.value);
  });
})

const inputOperator = (operator) => {
  // prevNumber = currentNumber;
  // calculationOperator = operator;
  // currentNumber = '';
  if (calculationOperator === '') {
    prevNumber = currentNumber;
  }
    calculationOperator = operator;
    currentNumber = '0';
}

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
  console.log(prevNumber, calculationOperator, currentNumber);
  calculate()
  updateDisplay(currentNumber);
})

const calculate = () => {
  let result = '';
  switch (calculationOperator) { 
    case '+':
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = prevNumber - currentNumber;
      break;
    case '*':
      result = prevNumber * currentNumber;
      break;
    case '/':
      result = prevNumber / currentNumber;
      break;
    default:
      return;
  }
  currentNumber = result;
  calculationOperator = '';
}

const clearButton = document.querySelector('.all-clear');

clearButton.addEventListener('click', () => {
  clearAll();
  updateDisplay(currentNumber);
})

const clearAll = () => {
  currentNumber = '0';
  calculationOperator = '';
  prevNumber = '';
}

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (e) => {
  inputDecimal(e.target.value);
  updateDisplay(currentNumber);
})

inputDecimal = (dot) => {
  currentNumber += dot;
}