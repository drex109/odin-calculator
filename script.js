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
console.log(add(2, 3))
console.log(subtract(2, 3))
console.log(multiply(2, 3))
console.log(divide(2, 3))

function operate(x, operator, y) {
    switch(operator) {
        case '+':
            add(x, y);
        case '-':
            subtract(x, y);
        case '*':
            multiply(x, y);
        case '/':
            divide(x, y);
    }
}
