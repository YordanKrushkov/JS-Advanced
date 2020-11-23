function solve(input) {
    let products = {};

    input.forEach(line => {
        let [town, product, price] = line.split(' | ');
        price = Number(price);

        if (!products[product]) {
            products[product] = { [town]: price };
        } else {
            if (!products[product][town]) {
                products[product][town] = price;
            } else {
                products[product][town] = price;
            }
        }
    });
    Object.keys(products).forEach(product => {

        let minPrice = Number.MAX_SAFE_INTEGER;
        let currentTown = '';

        Object.keys(products[product]).forEach(item => {

            if (products[product][item] < minPrice) {
                minPrice = products[product][item];
                currentTown = [item];
            }

        });

        console.log(`${product} -> ${minPrice} (${currentTown})`);
    })

}
