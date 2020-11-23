class Point {
    constructor(x, y) {
        this.x = Number(x);
        this.y = Number(y);
    }

    static distance(p1, p2) {
        let xSet = Math.abs(p1.x - p2.x);
        let ySet = Math.abs(p1.y - p2.y);
        return Math.sqrt(xSet ** 2 + ySet ** 2);
    }
}

