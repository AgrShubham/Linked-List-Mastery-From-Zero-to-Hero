class Node{
    constructor(data){
        this.value=data;
        this.next=null;
    }
}

function printList(head) {
    let current = head;
    let result = [];
    
    while (current !== null) {
        result.push(current.value);
        current = current.next;
    }
    
    console.log(result.join(' -> '));
}

// Test
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);

printList(head);  // Output: 1 -> 2 -> 3