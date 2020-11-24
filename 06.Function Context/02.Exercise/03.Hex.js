class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }
    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }

    plus(obj) {
        if (obj instanceof Hex) {
            return new Hex(this.value + obj.valueOf())
        }
    }
    minus(obj) {
        if (obj instanceof Hex) {
            return new Hex(this.value - obj.valueOf())
        }
    }
    parse(string) {
        return parseInt(string, 16)
    }
}

