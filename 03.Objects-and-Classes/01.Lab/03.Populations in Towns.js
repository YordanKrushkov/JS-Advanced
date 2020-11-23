function solve(input) {
    let data = {};

    input.forEach(line => {
        let [town, population] = line.split(' <-> ');
        population = Number(population);
        if (!data[town]) {
            data[town] = 0;
        }
        data[town] += population;
    });
    for (const key in data) {
        console.log(`${key} : ${data[key]}`);
    }
}
