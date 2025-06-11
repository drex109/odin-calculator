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

        let inputs = calculation.trim().split(' ');
        const lastInput = inputs[inputs.length - 1];

        if (['+', '-', 'x', '/'].includes(lastInput)) {
            return;
        }

        console.log(inputs);

        display.textContent += ` ${e.target.value} `;
        calculation += ` ${e.target.value} `;

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

    evaluated = true;
})

decimal.addEventListener('click', (e) => {
    const currentNumber = calculation.split(' ').pop()

    if (!currentNumber.includes('.')) {
        display.textContent += e.target.value;
        calculation += e.target.value;

        console.log(calculation);

    }
})

backspace.addEventListener('click', (e) => {
    if (evaluated) {
        display.textContent = '';
        calculation = '';
        ans = undefined;
        evaluated = false;
        return;
    }
    if (display.textContent.endsWith(' ')) {
        display.textContent = display.textContent.slice(0, -3);
        calculation = calculation.slice(0, -3);
    } else {
        display.textContent = display.textContent.slice(0, -1);
        calculation = calculation.slice(0, -1);
    }
    
})

document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') {
        const button = document.querySelector(`button[value="${e.key}"]`);
        if (button) button.click();
            return;
    }

    console.log(e.key)

    const operators = {
        '+': '+',
        '-': '-',
        '/': '/',
        '*': 'x'
    };

    if (operators[e.key]) {
        const button = document.querySelector(`button[value="${operators[e.key]}"]`);
        if (button) button.click();
        return;
    }

    if (e.key === '.') {
        decimal.click()
        return;
    }

    if(e.key === '=' || e.key === 'Enter') {
        equal.click();
        return;
    }

    if (e.key === 'Backspace') {
        backspace.click();
        return;
    }

    if (e.key === 'Escape') {
        clear.click();
        return;
    }
});