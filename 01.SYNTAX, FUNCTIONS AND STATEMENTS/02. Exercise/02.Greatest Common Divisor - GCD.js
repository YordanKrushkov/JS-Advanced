function solve(numOne, numTwo) {
    let GCD = Number.MIN_SAFE_INTEGER;
    let min = Math.min(numOne, numTwo);
    for (let i = 1; i <= min; i++) {

        if (numOne % i == 0 && numTwo % i == 0) {
            GCD = i;
        }
    }
    console.log(GCD);
}
solve(2154, 458);