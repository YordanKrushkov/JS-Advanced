function solve(input) {
    let speed = input.shift();
    let place = input.shift();
    let maxSpeed = 0;

    switch (place) {
        case 'motorway':
            maxSpeed = 130;
            break;
        case 'interstate':
            maxSpeed = 90;
            break;
        case 'city':
            maxSpeed = 50;
            break;
        case 'residential':
            maxSpeed = 20;
            break;
    }
    if (speed-maxSpeed>40) {
        console.log('reckless driving');
    } else if (speed-maxSpeed>20) {
        console.log('excessive speeding');
    } else if (speed-maxSpeed>0) {
        console.log('speeding');
    }

}
solve([660, 'residential']);