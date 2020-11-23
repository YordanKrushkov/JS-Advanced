function solve(input){
let result=input.sort((a,b)=>a-b)
                .splice(0,2)
                .join(' ');
console.log(result);
}
solve([30, 15, 50, 5]);