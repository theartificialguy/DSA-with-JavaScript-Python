// https://leetcode.com/problems/implement-stack-using-queues/
// implement stack using queues
// implement LIFO using only 2 queues
// implemented stack shud support all stack operations:- push,pop,top,isempty

var MyStack = function() {
    this.q1 = []; // primary
    this.q2 = []; // for copies
};

MyStack.prototype.push = function(x) {
    // empty q1 and copy all items to q2
    while (this.q1.length) this.q2.push(this.q1.shift());
    // push new item in q1 so that it will be the first item (dequeue)
    this.q1.push(x);
    // empty q2 and push back all the old items in same order
    while (this.q2.length) this.q1.push(this.q2.shift());
};

MyStack.prototype.pop = function() {
    return this.q1.shift();
};

MyStack.prototype.top = function() {
    return this.q1[0];
};

MyStack.prototype.empty = function() {
    return this.q1.length === 0;
};