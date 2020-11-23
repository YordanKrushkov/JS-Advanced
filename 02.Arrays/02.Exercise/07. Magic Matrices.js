function solve(arr) {
    let matrix = arr
    let sum = 0;
    let isItMagical = true;

    matrix[0].forEach(x => sum += x);

    for (let row = 1; row < matrix.length; row++) {
        let rowSum = 0;
        matrix[row].forEach(x => rowSum += x);
        if (rowSum != sum) {
            isItMagical = false;
            break;
        }
    }
    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++)
            colSum += matrix[row][col];
        if (colSum != sum) {
            isItMagical = false;
            break;
        }
    }
    if (isItMagical) {
        console.log('true');
    } else {
        console.log('false');
    }

}