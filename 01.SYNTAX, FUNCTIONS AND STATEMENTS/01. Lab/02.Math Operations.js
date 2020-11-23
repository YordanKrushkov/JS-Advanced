function solve(inputOne, inputTwo, inputThree) {
    let numOne = Number(inputOne);
    let numTwo = Number(inputTwo);
    let operator = inputThree;

    switch (operator) {

        case '+':
            console.log(numOne + numTwo);
            break;
        case '-':
            console.log(numOne - numTwo);
            break;
        case '*':
            console.log(numOne * numTwo);
            break;
        case '/':
            console.log(numOne / numTwo);
            break;
        case '%':
            console.log(numOne + numTwo);
            break;
        case '$':
            console.log(numOne + numTwo);
            break;
        case '**':
            console.log(numOne ** numTwo);
            break;
    }

}
solve(5, 6, '+');