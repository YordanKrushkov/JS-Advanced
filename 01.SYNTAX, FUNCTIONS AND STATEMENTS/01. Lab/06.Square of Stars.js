function solve(input) {

    for (let i = 0; i < input; i++) {
        let row = ''
        for (let j = 0; j < input; j++) {
            row += '*' + ' ';
        }
        console.log(row);
    }

}
solve(5)