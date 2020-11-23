function solve(input) {

    let sortedArr = input.sort((a, b) => {

        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else if (a.length = b.length) {
            return a.localeCompare(b);
        }

    });

    console.log(sortedArr.join('\n'));
}