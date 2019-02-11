export function mathEval(a, b, operator) {
  const firstOperand = Number(a);
  const secondOperand = Number(b);
  if (isNaN(firstOperand) || isNaN(secondOperand)) {
    throw new Error('Операнды не являются числами!');
  }
  switch (operator) {
    case "+": {
      return firstOperand + secondOperand;
    }
    case "-": {
      return firstOperand - secondOperand;
    }
    case "*":
      return firstOperand * secondOperand;
    case "/":
      return firstOperand / secondOperand;
    case null: 
      return;
    default: {
      throw new Error('Калькулятор не может выполнить данную операцию: ' + operator);
    }
  }
}