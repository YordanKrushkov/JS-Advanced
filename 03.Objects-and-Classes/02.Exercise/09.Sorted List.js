class List {
    constructor() {
        this.elements = [];
        this.size = 0;
    }
  
    add(element) {
        this.elements.push(+element)
        this.size++; 
        this.elements.sort((a, b) => a-b);
        
    }

    remove(index) {
        if (index >= 0 && index < this.size) {
            this.elements.splice(index, 1);
            this.size--;
        }
    }
    get(index) {
        if (index >= 0 && index < this.size) {
            return this.elements[index];
        }
    }

}
let list = new List();
list.add(5);
list.add(3);
list.add(2);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
