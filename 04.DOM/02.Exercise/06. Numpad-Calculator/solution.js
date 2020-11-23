function solve() {
    let clearButtonElement = document.getElementsByClassName('clear')[0];
    let expressionOutputField = document.getElementById('expressionOutput');
    let resultOutputField = document.getElementById('resultOutput');
    let keyBoard = document.getElementsByClassName('keys')[0];


    clearButtonElement.addEventListener('click', clear);
    keyBoard.addEventListener('click', press);

    function clear() {
        resultOutputField.textContent = '';
        expressionOutputField.textContent = '';
    }
    function press(e) {
        let currentNumber = e.target.value;

        switch (currentNumber) {
            case '*':
            case '+':
            case '/':
            case '-':
                expressionOutputField.textContent += ` ${currentNumber} `
                break;
            case '=':
                let [leftOperant, operator, rightOperant] = expressionOutputField.textContent.split(' ');
                if (!rightOperant || !operator) {
                    resultOutputField.textContent = 'NaN';
                } else {
                    resultOutputField.textContent = calculateItem(+leftOperant, operator, +rightOperant);
                }
                break;
            default:
                expressionOutputField.textContent += currentNumber;
        }

    }

    function calculateItem(leftOperant, operator, rightOperant) {
        switch (operator) {
            case "*":
                return leftOperant * rightOperant;

            case "+":
                return leftOperant + rightOperant;

            case "/":
                return leftOperant / rightOperant;

            case "-":
                return leftOperant - rightOperant;
        }
    }
}