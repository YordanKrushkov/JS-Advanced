function solve(input) {
    let primarySum = 0;
    let secondarySum = 0;
    let iterator = 0;
    input.forEach((row, index) => {

        primarySum += row[iterator];
        secondarySum += row[row.length - 1 - iterator];

        iterator++

    });

    console.log(`${primarySum} ${secondarySum}`);



}
