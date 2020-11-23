function solve(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let arr = result.slice(-k)
        let sum = arr.reduce((acc, num) => acc + num, 0)
        result.push(sum)
    }
    console.log(result.join(' '));
}
solve(6, 3)