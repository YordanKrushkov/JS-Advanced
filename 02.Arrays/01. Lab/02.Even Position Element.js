function solve(input) {
    let result = [];
    for (const key in input) {
        if (key % 2 == 0) {
            result.push(input[key]);
        }
    }
    console.log(result.join(' '));
}
solve(['20', '30', '40']);