class Linkedlist {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.length = 1;
    this.tail = this.head;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    const currentNode = this.head;
    newNode.next = currentNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index > this.length - 1) {
      console.log("Error inserting");
      return;
    }
    if (index === this.length - 1) {
      this.append(value);
      return;
    }
    const newNode = {
      value: value,
      next: null,
    };
    let indexNode = this.head;
    let currentIndex = 0;
    while (currentIndex !== index - 1) {
      indexNode = indexNode.next;
      currentIndex++;
    }
    const nextToIndexNode = indexNode.next;
    indexNode.next = newNode;
    newNode.next = nextToIndexNode;
    this.length++;
    return this;
  }

  deleteNode(index) {
    if (index > this.length - 1) {
      console.log("index is out of bounds");
      return;
    }
    let count = 0;
    let currentNode = this.head;
    while (count !== index - 1) {
      count++;
      currentNode = currentNode.next;
    }
    currentNode.next = currentNode.next.next;
    return this;
  }

  print() {
    console.log(this);
  }

  printArrayFormate() {
    let newNode = this.head;
    const array = [];
    while (newNode) {
      array.push(newNode.value);
      newNode = newNode.next;
    }
    console.log(array.join("-->"));
  }

  /*You are given the pointer to the head node of a sorted linked list,
  where the data in the nodes is in ascending order.
  Delete nodes and return a sorted list with each distinct value in the original list. 
  The given head pointer may be null indicating that the list is empty.*/

  DeleteDuplicateInSorted(){
    let currentNode=this.head
    while(currentNode!==null && currentNode.next!==null){
      if(currentNode.value===currentNode.next.value){
        currentNode.next=currentNode.next.next
      }else{
        currentNode=currentNode.next
      }
    }
  }

  printHead() {
    console.log(this.head);
  }

  printTail() {
    console.log(this.tail);
  }

  printLength() {
    console.log(this.length);
  }
}
const newLinkedList = new Linkedlist(5);
newLinkedList.append(12);
newLinkedList.append(13);
newLinkedList.append(13);
newLinkedList.append(14);
newLinkedList.append(15);
newLinkedList.prepend(0);
newLinkedList.insert(5, 16);
//newLinkedList.insert(100,16)
newLinkedList.insert(3, 17);
newLinkedList.insert(6, 18);
newLinkedList.deleteNode(6);
newLinkedList.deleteNode(3);
newLinkedList.DeleteDuplicateInSorted() //13 value node get deleted
newLinkedList.printArrayFormate();
