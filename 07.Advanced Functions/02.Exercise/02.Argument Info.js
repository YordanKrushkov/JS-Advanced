function solve(...input) {
    let count = {};

    input.forEach(element => {
        let type = typeof element;
        console.log(`${type}: ${element}`);
        if (!count[type]) {
            count[type] = 0;
        }
        count[type]++;
    })

    let result = Object.entries(count).sort((a, b) => b[1] - a[1]);
    result.forEach(e => {
        console.log(`${e[0]} = ${e[1]}`);
    })
};

