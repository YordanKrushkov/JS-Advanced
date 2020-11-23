function solve(input) {

    let heroes = []

    input.forEach(line => {
        let hero = {}
        let [name, level, items] = line.split(' / ')

        hero.name = name;
        hero.level = Number(level);
        hero.items = items ? items.split(', ') : [];

        heroes.push(hero);
    });
    let result = JSON.stringify(heroes);
    console.log(result);
}
solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);