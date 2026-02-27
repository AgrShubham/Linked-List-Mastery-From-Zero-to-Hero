class Node{
    constructor(data){
        this.value=data;
        this.next=null;
    }
}

function printList(head){
    let current=head;
    let result=[];
    while(current !== null){
        result.push(current.value);
        current= current.next;
    }
    console.log(result.join(' -> '));
}