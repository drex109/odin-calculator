function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}
// console.log(add(2, 3))
// console.log(subtract(2, 3))
// console.log(multiply(2, 3))
// console.log(divide(2, 3))

function operate(x, operator, y) {
    switch(operator) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case 'x':
            return multiply(x, y);
        case '/':
            return divide(x, y);
    }
}

let display = document.querySelector('#solution');
let buttons = document.querySelectorAll('.button');
let clear = document.querySelector('.clear')
let equal = document.querySelector('.equal')
let calculation = '';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        display.textContent += e.target.value;
        calculation += e.target.value;
    })
})

clear.addEventListener('click', (e) => {
    display.textContent = '';
    calculation = '';
})

equal.addEventListener('click', (e) => {
    let inputs = calculation.split(' ');
    ans = operate(Number(inputs[0]), inputs[1], Number(inputs[2]))
    display.textContent = String(Math.round(ans * 10) / 10);
})