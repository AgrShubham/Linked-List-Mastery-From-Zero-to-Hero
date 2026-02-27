class Node{
    constructor(data){
        this.value=data;
        this.next=null;
    }
}

//creating nodes manually
const node1= new Node(5);
const node2= new Node(10);
const node3= new Node(15);
const node4= new Node(20);
const node5= new Node(25);

//linking nodes together
node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node5;

//printing the nodes
let current=node1;
while(current !== null){
    console.log(current.value);
    current=current.next;
}

