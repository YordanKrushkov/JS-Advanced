function solve(input) {
    let fruits = {};
    let fruitsForJuices = {};

    input.forEach(line => {
        let [fruit, quantity] = line.split(' => ');
        quantity = Number(quantity);

        if (!fruits[fruit]) {
            fruits[fruit] = 0;
        }
        fruits[fruit] += quantity;
        if (fruits[fruit] >= 1000) {
            fruitsForJuices[fruit] = 0;
        }
    });

    Object.keys(fruits).forEach(key => {
        if (fruitsForJuices[key] !== undefined) {
            fruitsForJuices[key] = parseInt(fruits[key] / 1000);
        }
    });

    Object.keys(fruitsForJuices).forEach(key => {

        console.log(`${key} => ${fruitsForJuices[key]}`);
    });

}
