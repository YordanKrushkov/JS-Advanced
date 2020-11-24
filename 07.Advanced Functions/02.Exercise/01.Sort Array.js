function solve(arr, criteria) {

    let result = arr.sort(validate);

    function validate(a, b) {

        if (criteria == 'asc') {
            return a - b;
        } else if (criteria == 'desc') {
            return b - a;
        }
    }
    return result;
};