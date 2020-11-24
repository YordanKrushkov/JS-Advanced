function getFibonator() {
    let currentNum = 0;
    let nextNum = 1;

    return () => {

        let finNum = currentNum + nextNum;
        currentNum = nextNum;
        nextNum = finNum;

        return currentNum;
    }
}



