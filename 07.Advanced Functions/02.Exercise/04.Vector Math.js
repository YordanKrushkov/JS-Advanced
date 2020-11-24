
solution = {

    add: ([x1, y1], [x2, y2]) => [x1 + x2, y1 + y2],
    multiply: ([x1, x2], y) => [x1 * y, x2 * y],
    length: ([x1, x2]) => Math.sqrt(x1 * x1 + x2 * x2),
    dot: ([x1, y1], [x2, y2]) => (x1 * x2) + (y1 * y2),
    cross: ([x1, y1], [x2, y2]) => x1 * y2 - y1 * x2,
}

