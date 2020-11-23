function solve(input) {

    let number = Number.MIN_SAFE_INTEGER;
    let newArr = [];

    input.forEach(element => {
        if (element >= number) {
            newArr.push(element);
            number = element;
        }
    });

    console.log(newArr.join('\n'));
}
