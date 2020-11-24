function arrayMap(arr, func) {

    let mappedArr = arr.reduce((a, x) => {
        a.push(func(x));
        return a;
    }, [])
    return mappedArr
}

