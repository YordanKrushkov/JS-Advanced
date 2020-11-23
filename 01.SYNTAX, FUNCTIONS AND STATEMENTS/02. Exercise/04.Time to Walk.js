function solve(numSteps, footPrint, speed) {
    let distanceInMeters = footPrint * numSteps;
    let timeInMinutes = (distanceInMeters / 1000) / speed;
    let time = ((timeInMinutes * 60) + Math.floor(distanceInMeters / 500)) * 60;


    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.ceil(time % 60);

    console.log(`${hours < 10 ? 0 : ""}${hours}:${minutes < 10 ? 0 : ''}${minutes}:${seconds < 10 ? 0 : ''}${seconds}`);


}
solve(4000, 0.60, 5)