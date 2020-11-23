function solve(input) {

    let result = [];
    let number = 1;

    input.forEach(command => {
        switch (command) {
            case "add":
                result.push(number);
                break;
            case "remove":
                result.pop();
                break;
        }
        number++;
    });

    if (result.length > 0) {
        console.log(result.join('\n'));
    } else {
        console.log('Empty');
    }

}
