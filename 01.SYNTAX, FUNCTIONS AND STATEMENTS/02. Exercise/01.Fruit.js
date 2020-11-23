function solve(type, weight, price) {
    let kg = weight / 1000
    let money = (kg * price).toFixed(2);

    console.log(`I need ${money} to buy ${kg} kilograms ${type}.`);
}

solve('orange', 2500, 1.80); 