let firstValue = prompt('Enter first value: ');
let secondValue = prompt('Enter second value: ');
let operator = prompt('Enter operator: ');
let result = 0;

if (operator === '+') {
     console.log(`${firstValue} + ${secondValue} is ${parseInt(firstValue + secondValue)}`);
     alert(`${firstValue} + ${secondValue}`)
} else if (operator === '-') {
    let result = console.log(firstValue - secondValue);
    alert(result)
} else if (operator === '*') {
    result = console.log(firstValue * secondValue);
    alert(result)
} else if (operator === '/') {   
    alert(firstValue / secondValue);
}

 
// This is a comment
