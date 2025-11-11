// Node


class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1
    }
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++

    }

    pop() {

        if (!this.head) return null;

        if (this.length == 0) {
            this.head = null;
            this.tail = null;
            return 0;
        }

        let temp = this.head;
        let prev = this.head;

        while (temp.next) {
            prev = temp;
            temp = prev.next
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;

        return temp;
    }

    unShift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return value;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return value;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }
        var chacheVal = this.head.value;
        var cache = this.head.next;
        this.head = cache;
        this.length--;

        if (this.length == 0) {
            this.tail = null;
        }
        return chacheVal;
    }

    getFirst() {
        const result = this.head;
        return result;
    }

    getLast() {
        return this.tail ?? undefined;
    }

    get(index) {
        var temp = this.head;
        var count = 0;

        while (temp != null) {
            if (index == count) {
                return temp;
            }
            temp = temp.next;
            count++;
        }

    }


}

const lks = new LinkedList(1);
lks.push(23);
lks.push(34);
lks.push(67);
lks.push(45);
lks.push(65);
lks.push(12);
lks.pop();
lks.pop();
lks.unShift(110);
lks.unShift(20);
lks.shift();
lks.getFirst();
lks.getLast();




const res = lks.get(3);
console.log(res);

console.log(lks);

