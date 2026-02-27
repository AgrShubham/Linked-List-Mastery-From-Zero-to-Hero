//Challenge 1.1: Build a Simple Node
//Goal: Understand what a node is.

// node is just a container(constructor) with data and a pointer

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// below code generates nodes manually

const node1= new Node(10);
const node2= new Node(20);
const node3= new Node(30);

// connect the node

node1.next= node2;
node2.next= node3;

// now we have the linked list: 10 -> 20 -> 30 -> null


// Printing all the values

let current = node1;
while (current != null){
    console.log(current.val);
    current= current.next;
}