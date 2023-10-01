// Singly Linked Lists

// Linked List is a linear data structure in which data is stored in a non-sequential manner i.e. randomly in memory.
// Several nodes connected together forms a LL.
// A Node is a basic building block of a LL which consist of 2 parts:-
//  1) Data value
//  2) Next pointer which points to next Node of that LL in memory

const Node = function (data) {
    this.data = data;
    this.next = null;
};

const LinkedList = function () {
    this.head = null;
};

LinkedList.prototype.insert_at_tail = function (value) {
    // append in a LL
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
    // insert at begining of a LL
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