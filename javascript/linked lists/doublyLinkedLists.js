// Doubly Linked Lists

// same as singly linked list, the difference is that the Node now contains the reference of both next and prev nodes. Hence it allows bidirectional traversal.
// it's only advantage is when there is a need to move backwards.

// Application :- LRU Cache

// LRU Cache -> discards least recently used item (key-value pair)
// https://leetcode.com/problems/lru-cache/
// data structures used -> hashmap for cache, DLL for maintaining order
// hashmap structure -> key:node
// last recently used -> right after head
// least recently used -> right before tail
// why DLL -> O(1) insertion & deletion

// https://youtu.be/xDEuM5qa0zg

const Node = function (data) {
    this.data = data;
    this.next = null;
    this.prev = null;
};

const LinkedList = function () {
    this.head = null;
};

LinkedList.prototype.insert_at_tail = function (value) {
    // append in a DLL
    const new_node = new Node(value);
    let curr = this.head;
    if (curr === null) {
        this.head = new_node;
        return;
    };
    while (curr.next !== null) {
        curr = curr.next;
    };
    curr.next = new_node;
};

LinkedList.prototype.insert_at_head = function (value) {
    // insert at begining of a DLL
    const new_node = new Node(value);
    new_node.next = this.head;
    this.head = new_node;
};

LinkedList.prototype.delete_head = function () {
    if (this.head === null) {
        console.log("Linked List empty!");
        return;
    };
    this.head = this.head.next;
};

LinkedList.prototype.delete_tail = function () {
    if (this.head === null) {
        console.log("Linked List empty!");
        return;
    };
    let curr = this.head;
    // check when LL has only 1 node
    if (curr.next === null) {
        this.delete_head();
        return;
    }
    // for LL having more than 1 node
    while (curr.next.next !== null) {
        curr = curr.next;
    };
    curr.next = null;
};

LinkedList.prototype.reverse = function () {
    // inplace reversal O(n)
    let prev = null;
    let curr = this.head;
    while (curr !== null) {
        // save ref to next before changing dir
        next_node = curr.next;
        // changing dir i.e. pointing to prev "-->" = "<--"
        curr.next = prev;
        // updating prev to current (curr) node
        prev = curr;
        // incrementing curr node with saved ref to next node
        curr = next_node;
    };
    // finally making tail the head
    this.head = prev;
}

LinkedList.prototype.log = function () {
    let result = "";
    let curr = this.head;
    while (curr !== null) {
        result += curr.data.toString() + " ";
        curr = curr.next;
    };
    console.log(result.trim()); // removes leading & trailing spaces if any
};

const ll = new LinkedList();
ll.insert_at_tail(1);
ll.insert_at_tail(2);
ll.insert_at_tail(3);
ll.insert_at_tail(4);
ll.log();
ll.insert_at_head(-1);
ll.insert_at_head(-2);
ll.insert_at_head(-3);
ll.insert_at_head(-4);
ll.log();
ll.delete_head();
ll.delete_head();
ll.log();
ll.delete_tail();
ll.delete_tail();
ll.log();
ll.reverse();
ll.log();