function solve(input) {
    let number = Number(input.shift());

    for (const command of input) {
        switch (command) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number -= (number * 0.20)
                break;

        }
        console.log(number);
    }
  
}
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])

// •	chop - divide the number by two
// •	dice - square root of number
// •	spice - add 1 to number
// •	bake - multiply number by 3
// •	fillet - subtract 20% from number
