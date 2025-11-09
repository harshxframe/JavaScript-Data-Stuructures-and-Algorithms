class Jamp {

    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(element) {
        this.data[this.length] = element;
        this.length++
        return this.length;
    }

    get(indexId) {
        return this.data[indexId];
    }

    pop() {
        const len = this.length;
        const valueCache = this.data[len - 1];
        delete this.data[len - 1];
        return valueCache;

    }

    shift() {
        const chacheVal = this.data[0];
        delete this.data[0];
        const tempDataIndex = Object.keys(this.data).length;
        for (var i = 1; i < tempDataIndex + 1; i++) {
            const chacheValue = this.data[i];
            delete this.data[i];
            this.data[i - 1] = chacheValue;
        }
        return chacheVal;
    }

    delete(index) {
        console.log(this.data);
        const cheche = this.data[index];

        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];
        this.length--;
        console.log(this.data);
        return cheche;
    }


}


const myArray = new Jamp();
myArray.push("harsh");
myArray.push(34);
myArray.push("Jack");
myArray.push("max");
myArray.push("ayushi");
myArray.push("Alisha");
myArray.push("Landyen");
myArray.push("New Hello");
myArray.push("45");
myArray.push("65");
myArray.push("7");
myArray.push("98");

console.log(myArray.delete(2));
