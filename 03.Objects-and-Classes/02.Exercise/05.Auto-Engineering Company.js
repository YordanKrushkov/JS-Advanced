function solve(input) {

    let carPark = {};

    input.forEach(line => {
        let [mark, model, quantity] = line.split(' | ');
             quantity = Number(quantity);

        if (!carPark[mark]) {
            carPark[mark] = { [model]: quantity };
        } else {
            if (carPark[mark][model]) {
                let oldQuantity = carPark[mark][model];
                carPark[mark][model] = (oldQuantity + quantity);
            } else {
                carPark[mark][model] = quantity;
            }
        }
    });

    Object.keys(carPark).forEach(model => {
        console.log(model);
        Object.keys(carPark[model]).forEach(car => {
            console.log(`###${car} -> ${carPark[model][car]}`);
        });
    });

}
