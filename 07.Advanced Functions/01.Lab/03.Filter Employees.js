function solve(input, criteria) {
    let data = JSON.parse(input);
    let [key, value] = criteria.split('-');

    data.filter(emploee => emploee[key] == value || key == 'all')
        .forEach((x, i) => console.log(`${i}. ${x.first_name} ${x.last_name} - ${x.email}`));
}
