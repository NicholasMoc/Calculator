add = (a,b) => {
    return a + b;
}

subtract = (a,b) => {
    return a - b;
}

multiply = (a,b) => {
    return a * b;
}

divide = (a,b) => {
    return a / b;
}

function operate(op, a, b) {
    console.log(a);
    console.log(b);
    a = parseFloat(a);
    b = parseFloat(b);
    return parseFloat(op(a, b).toFixed(6));
}

let allButtons = document.querySelectorAll('button');
let display = document.querySelector('.screen');
let total = 0;
let operatorCount = 0;
let one = '';
let two = '';
let currentOp = '';
let first = true;



function initializeNumbers() {
    let buttons = document.querySelectorAll('#number');
    buttons.forEach((but) => {
        but.addEventListener('click', () => {
            if(first)
            {
                one += but.innerHTML;
                display.textContent = one;
            }
            else if (!two) {
                display.textContent = ''
                two += but.innerHTML
                display.textContent = two;
            }
            else {
                two += but.innerHTML
                display.textContent = two;
            }
        })
    })
}

function initializeOperators() {
    let operators = document.querySelectorAll('.operator');
    operators.forEach((op) => {
        op.addEventListener('click', () => {
            if(!currentOp)
            {
                first = false;
                currentOp = op.id;                
            }
            /*Only operate if there is a two*/ 
            if(currentOp && !two) {
                currentOp = op.id;
            }
            if(operatorCount === 0 && two)
            {
                if(currentOp === 'add')
                {
                    total = operate(add, one, two);
                }
                else if(currentOp === 'subtract')
                {
                    total = operate(subtract, one, two);
                }
                else if(currentOp === 'multiply')
                {
                    total = operate(multiply, one, two);
                }
                else if(currentOp === 'divide')
                {
                    total = operate(divide, one, two);
                }
                display.textContent = total;
                two = '';
                operatorCount += 1;
                currentOp = op.id;
            }
            if(operatorCount >= 1 && two)
            {
                if(currentOp === 'add')
                {
                    total = operate(add, total, two);
                }
                else if(currentOp === 'subtract')
                {
                    total = operate(subtract, total, two);
                }
                else if(currentOp === 'multiply')
                {
                    total = operate(multiply, total, two);
                }
                else if(currentOp === 'divide')
                {
                    total = operate(divide, total, two);
                }
                two = '';
                one = total;
                display.textContent = total;
                currentOp = op.id;
            }
        })
    })
}

let clearBut = document.querySelector("#clear");

clearBut.addEventListener('click', clear);

function clear(event) {
    total = 0;
    operatorCount = 0;
    one = '';
    two = '';
    currentOp = '';
    first = true;
    display.textContent = total;
}

let equalsBut = document.querySelector("#equal");

equalsBut.addEventListener('click', equals);
function equals(event) {
    if(!two)
    {
        total = one;
    }
    else if(currentOp === 'add')
    {
        total = operate(add, one, two);
    }
    else if(currentOp === 'subtract')
    {
        total = operate(subtract, one, two);
    }
    else if(currentOp === 'multiply')
    {
        total = operate(multiply, one, two);
    }
    else if(currentOp === 'divide')
    {
        total = operate(divide, one, two);
    }

    display.textContent = total;
    total = 0;
    operatorCount = 0;
    one = '';
    two = '';
    currentOp = '';
    first = true;

}

function initialize()
{
    initializeNumbers();
    initializeOperators();
}

initialize();




