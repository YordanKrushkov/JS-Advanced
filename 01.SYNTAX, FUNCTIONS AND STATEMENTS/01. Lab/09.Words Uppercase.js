function solve (input){
    let result= input.split(/[ '.,!?-]/g)
                            .filter(x=>x!='')
                            .map(x=>x.toUpperCase())
                            .join(', ')
    console.log(result);
}
solve('Hi, how are you?');