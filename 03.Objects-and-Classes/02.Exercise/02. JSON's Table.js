function table(input) {
    let data = input.map(raw => JSON.parse(raw));

    console.log('<table>');
    data.forEach(row => {
        console.log('<tr>');
        for (const key in row) {
            console.log(`<td>${row[key]}</td>`);
        }
        console.log('</tr>');

    });
    console.log('</table>');

}