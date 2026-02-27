class Node{
    constructor(data){
        this.value=data;
        this.next=null;
    }
}

function insertAtHead(head, data){
    const newNode = new Node(data);
    newNode.next = head;
    return newNode;
}