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
   return op(a, b);
}