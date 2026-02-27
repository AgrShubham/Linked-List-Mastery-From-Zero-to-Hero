class Node{
    constructor(data){
        this.value=data;
        this.next=null;
    }
}

function lengthOfList(head){
    let count = 0;
    let current = head;
    while(current !== null){
        count++;
        current = current.next;
    }
    console.log("Length of the list:", count);
    return count;
}

const head=new Node(1);
head.next=new Node(2);
head.next.next=new Node(3);
head.next.next.next=new Node(4);

lengthOfList(head);