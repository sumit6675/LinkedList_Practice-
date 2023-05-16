class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}
class linkedlist{
    constructor(value){
        this.head={
            value:value,
            next:null,
            prev:null
        }
        this.length=1
        this.tail=this.head
    }
    appned(value){
        const newNode=new Node(value)
        newNode.prev=this.tail
        this.tail.next=newNode
        this.tail=newNode
         this.length++
         return this
    }
    prepend(value){
        const newNode=new Node(value)
        newNode.next=this.head
        this.head.prev=newNode
        this.head=newNode
        this.length++
        return this
    }
    insert(value,index){
        if(index>=this.length){
            return this.appned(value)
        }
        if(index===0){
            return this.prepend(value)
        }
        let count=0
        let start=this.head
        const newNode=new Node(value)
        while(count<index-1){
            start=start.next
            count++
        }
        const follwer=start.next
        start.next=newNode
        newNode.next=follwer
        newNode.prev=start
        follwer.prev=newNode
        this.length++
        return this
    }
    // print(){
    //     const arr=[]
    //     let curr=this.head
    //     while(curr){
    //         arr.push(curr.value)
    //         curr=curr.next
    //     }
    //    return {
    //     arr:arr,
    //     length:this.length,
    //     tail:this.tail.value
    //    }
    // }
    delete(index){
       let leader=this.treverseToIndex(index-1)
       leader.next=leader.next.next
       this.length--
       return this
    }
    treverseToIndex(index){
        if(index>this.length){
            return {
                msg:"index is greater than length",
                length:this.length,
                tail:this.tail
            }
        }
        let counter=0
        let curr=this.head
        while(counter!==index){
            curr=curr.next
            counter++
        }
        return curr
    }
}
const dummy=new linkedlist(2)
dummy.appned(15)
dummy.appned(10)
dummy.prepend(5)
dummy.prepend(4)
dummy.insert(100,2)
dummy.insert(0,0)
// dummy.delete(2)
console.log(dummy)
