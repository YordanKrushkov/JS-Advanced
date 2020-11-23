function solve(input) {
    let list = {};
    input.forEach(line => {
        let [name, components, subcomponents] = line.split(' | ');
        if (!list[name]) {
            list[name] = {};
        }
        if (!list[name][components]) {
            list[name][components] = [];
        }
        if (list[name][components]) {
            list[name][components].push(subcomponents);
        }

    });

    Object.entries(list).sort((a, b) => {

        return Object.entries(b[1]).length - Object.entries(a[1]).length
            || a[0].localeCompare(b[0]);

    }).forEach(([main, components]) => {
        console.log(main);
        Object.entries(components).sort((a, b) => {

            return b[1].length - a[1].length;

        }).forEach(([component, subcomponents]) => {

            console.log(`|||${component}`);

            subcomponents.forEach(el => {
                console.log(`||||||${el}`);
            })
        })
    });

}