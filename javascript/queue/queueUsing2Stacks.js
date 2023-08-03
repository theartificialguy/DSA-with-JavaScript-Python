// https://leetcode.com/problems/implement-queue-using-stacks/
// implement queue using 2 stacks
// implement queue operations like enqueue,dequeue,peek,empty only using stack operations like push,pop,top,isEmpty

var MyQueue = function() {
    this.s1 = [];
    this.s2 = [];
};

MyQueue.prototype.push = function(x) {
    while (this.s1.length) this.s2.push(this.s1.pop());
    this.s1.push(x);
    while (this.s2.length) this.s1.push(this.s2.pop());
};

MyQueue.prototype.pop = function() {
    return this.s1.pop();
};

MyQueue.prototype.peek = function() {
    return this.s1[this.s1.length-1]; // as we have to use stack op
};

MyQueue.prototype.empty = function() {
    return this.s1.length === 0;
};