// https://leetcode.com/problems/min-stack
// MIN STACK

let MinStack = function () {
    this.stack = [];
    this.min = Number.POSITIVE_INFINITY;
};

MinStack.prototype.push = function (val) {
    this.stack.push(val);
    // keep maintaining min value while pushing
    if (val < this.min) this.min = val;
}

MinStack.prototype.pop = function () {
    const popped = this.stack.pop();
    // if min was popped
    if (popped === this.min) {
        // find next min
        let _min = Number.POSITIVE_INFINITY;
        for (let i=0; i<this.stack.length; i++) {
            if (this.stack[i] < _min) _min = this.stack[i];
        };
        this.min = _min;
    }
}

MinStack.prototype.top = function () {
    return this.stack[this.stack.length-1];
}

MinStack.prototype.getMin = function () {
    // O(1)
    return this.min;
}

// case 1
const minStack1 = new MinStack();
minStack1.push(-2);
minStack1.push(0);
minStack1.push(-3);
console.log(minStack1.getMin()); // return -3
minStack1.pop();
console.log(minStack1.top());    // return 0
console.log(minStack1.getMin()); // return -2

// case 2
const minStack2 = new MinStack();
minStack2.push(-2);
minStack2.push(0);
minStack2.push(-1);
console.log(minStack2.getMin()); // return -2
console.log(minStack2.top());    // return -1
minStack2.pop();
console.log(minStack2.getMin()); // return -2