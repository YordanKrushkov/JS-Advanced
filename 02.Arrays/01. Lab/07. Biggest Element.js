function solve(input) {
    let biggestNum = Number.MIN_SAFE_INTEGER;
    input.forEach(element => {
        let currentNum = Math.max(...element);

        if (currentNum > biggestNum) {
            biggestNum = currentNum;
        }
    });
    console.log(biggestNum);
}
solve([[20, 50, 10],
[8, 33, 145]]
);