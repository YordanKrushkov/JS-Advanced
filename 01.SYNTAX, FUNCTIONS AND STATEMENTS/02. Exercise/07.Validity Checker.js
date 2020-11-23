function solve(input) {
    let x1 = input.shift();
    let y1 = input.shift();
    let x2 = input.shift();
    let y2 = input.shift();


    console.log(`{${x1}, ${y1}} to {0, 0} is ${check(calculate(x1, y1, 0, 0))}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${check(calculate(x2, y2, 0, 0))}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${check(calculate(x1, y1, x2, y2))}`);

    function calculate(x1, y1, x2, y2) {
        let result = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
        return Number.isInteger(result);
    }
    function check(validality) {
        return validality ? 'valid' : 'invalid';
    }

}
solve([3, 0, 0, 4]);