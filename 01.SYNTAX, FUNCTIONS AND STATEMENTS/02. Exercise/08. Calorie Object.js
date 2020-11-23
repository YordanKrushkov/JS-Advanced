function solve(input) {
    let catalogue = {};

    while (input.length > 0) {
        let name = input.shift();
        let amount = Number(input.shift());

        catalogue[name] = amount;
    }
    console.log(catalogue);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);