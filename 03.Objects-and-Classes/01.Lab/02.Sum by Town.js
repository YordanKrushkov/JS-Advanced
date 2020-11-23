function solve(input) {
    let object = {};


    while (input.length > 0) {
        let town = input.shift();
        let income = Number(input.shift());

        if (!object[town]) {
            object[town] = 0;
        }

        object[town] += income;
    }

    let result = JSON.stringify(object)

    console.log(result);
}

