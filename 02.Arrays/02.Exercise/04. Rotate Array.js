function solve(input) {
    let numberRotation = input.pop();

    for (let i = 0; i < numberRotation % input.length; i++) {
        input.unshift(input.pop());
    }

    console.log(input.join(' '));

}
