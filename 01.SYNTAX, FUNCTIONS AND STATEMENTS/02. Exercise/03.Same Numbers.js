function solve (input){
let forCheck=input.toString();
let isMagic=true;
let sum=0;

for(let i=0; i<forCheck.length; i++){
    if(forCheck[i]==forCheck[i-1]){
        isMagic=true;
    }else{
        isMagic=false;
    }
    sum+=Number(forCheck[i]);
}
console.log(isMagic);
console.log(sum);

}
solve(1234);