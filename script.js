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
    if (y === 0) return 'nah bro';
    return x / y;
}

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
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equal');
let operators = document.querySelectorAll('.operator');
let decimal = document.querySelector('.decimal');
let backspace = document.querySelector('.backspace');
let calculation = '';
let ans;
let evaluated = false;

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (evaluated) {
            display.textContent = '';
            calculation = '';
            ans = undefined;
            evaluated = false;
        }

        display.textContent += e.target.value;
        calculation += e.target.value;

        console.log(calculation)

    })
})

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        if(evaluated) {
            evaluated = false;
        }
        
        display.textContent += e.target.value;
        calculation += e.target.value;

        let inputs = calculation.trim().split(' ');

        console.log(inputs)

        if (inputs.length >= 3) {
            ans = operate(Number(inputs[0]), inputs[1].trim(), Number(inputs[2]));
            calculation = `${String(Math.round(ans * 100) / 100)} ${e.target.value.trim()} `;
            display.textContent = calculation;
            console.log(calculation)
        }
    })
})

clear.addEventListener('click', (e) => {
    display.textContent = '';
    calculation = '';
    ans = undefined;
})

equal.addEventListener('click', (e) => {
    let inputs = calculation.trim().split(' ');

    console.log(inputs);

    if(ans == undefined) {
        ans = operate(Number(inputs[0]), inputs[1].trim(), Number(inputs[2]))
    } else {
        ans = operate(ans, inputs[1].trim(), Number(inputs[2]))
    }
    display.textContent = String(Math.round(ans * 100) / 100);
    // calculation = ''
    evaluated = true;
})

decimal.addEventListener('click', (e) => {
    if (!display.textContent.includes('.')) {
        display.textContent += e.target.value;
        calculation += e.target.value;

        console.log(calculation);

    }
})

backspace.addEventListener('click', (e) => {
    display.textContent = display.textContent.slice(0, -1);
    calculation = calculation.slice(0, -1);
})