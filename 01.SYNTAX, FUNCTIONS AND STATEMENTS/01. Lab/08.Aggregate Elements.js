function solve(input) {

    let sum = input.reduce((acc, el) => {
        acc += el;
        return acc;
    }, 0);
    let inverseSum = input.reduce((acc, el) => {
        acc += 1 / el;
        return acc;
    }, 0);

    let concat = input.reduce((acc, el) => {
        acc += el;
        return acc;
    }, '');
    
    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}
solve([1, 2, 3]);