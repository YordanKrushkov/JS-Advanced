function solve(input) {
    let catalogue = {};
    let data = input.sort((a, b) => a.localeCompare(b));

    data.forEach(line => {
        let currentItem = {};
        let [name, price] = line.split(' : ');
        let alphabet = name[0];

        if (!catalogue[alphabet]) {
            catalogue[alphabet] = [];
        }
        if (catalogue[alphabet]) {
            catalogue[alphabet].push({ name, price });
        }

    });
    Object.keys(catalogue).forEach(key => {
        console.log(key);
        catalogue[key].forEach(product => {
            console.log(`${product.name} : ${product.price}`);
        })
    });

}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);