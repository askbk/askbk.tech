export class HuffmanNode {
    constructor(value, frequency, node1, node2) {
        if (node1 && node2) {
            if (node1.freq() > node2.freq()) {
                this.left = node1;
                this.right = node2;
            } else {
                this.left = node2;
                this.right = node1;
            }

            this.frequency = node1.freq() + node2.freq();
            this.value = node1.val() + node2.val();
        } else {
            this.left = null;
            this.right = null;
            this.value = value;
            this.frequency = frequency;
        }

    }

    left() {
        return this.left;
    }

    right() {
        return this.right;
    }

    freq() {
        return this.frequency;
    }

    val() {
        return this.value;
    }
}

export class PriorityQueue {
    constructor() {
        this.elements = [];
    }

    push(el) {
        for (let i = 0; i < this.elements.length; i++) {
            if (el.freq() < this.elements[i].freq()) {
                this.elements.splice(i, 0, el);
                return;
            }
        }

        this.elements.push(el);
    }

    pop() {
        return this.elements.shift();
    }

    length() {
        return this.elements.length;
    }
}
