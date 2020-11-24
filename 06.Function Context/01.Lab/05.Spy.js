function spy(target, method) {
    let result = {
        count: 0
    }

    let original = target[method];

    target[method] = function () {

        result.count++;

        return original.apply(target, arguments);
    }
    return result;
}