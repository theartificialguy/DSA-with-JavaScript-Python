// https://leetcode.com/problems/design-circular-queue
// circular queue
// size = 3
// queue = [2,3,4]
// output = [null,true,true,true,3,true,true,true,4]

var MyCircularQueue = function(k) {
    this.size = k;
    this.queue = [];
    this.current_size = 0;
};

MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) return false;
    this.queue.push(value);
    this.current_size += 1;
    return true;
};

MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) return false;
    this.queue.shift(); // removes top item from arr (arr[0])
    this.current_size -= 1;
    return true;
};

MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) return -1;
    return this.queue[0];
};

MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) return -1;
    return this.queue[this.current_size-1];
};

MyCircularQueue.prototype.isEmpty = function() {
    if (this.current_size === 0) return true;
    return false;
};

MyCircularQueue.prototype.isFull = function() {
    if (this.current_size === this.size) return true;
    return false;
};

let myCircularQueue = new MyCircularQueue(3);
console.log(myCircularQueue.enQueue(1)); // return True
console.log(myCircularQueue.enQueue(2)); // return True
console.log(myCircularQueue.enQueue(3)); // return True
console.log(myCircularQueue.enQueue(4)); // return False
console.log(myCircularQueue.Rear());     // return 3
console.log(myCircularQueue.isFull());   // return True
console.log(myCircularQueue.deQueue());  // return True
console.log(myCircularQueue.enQueue(4)); // return True
console.log(myCircularQueue.Rear());     // return 4