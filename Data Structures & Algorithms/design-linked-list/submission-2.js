class ListNode {
    constructor(val = 0, prev = null, next = null){
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class MyLinkedList {
    constructor() {
        this.head = new ListNode(0);
        this.tail = new ListNode(0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        if(index < 0 || index >= this.size) {
            return -1;
        }
        let ctr = 0;
        let prevNode = this.head;
        while(ctr < index){
            prevNode = prevNode.next;
            ctr++;
        }
        return prevNode.prev.val;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if(index < 0 || index >= this.size) {
            return -1;
        }
        let ctr = 0;
        let curr = this.head.next;
        while(ctr < index){
            curr = curr.next;
            ctr++;
        }
        return curr.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        let prevNode = this.head;
        let nextNode = this.head.next;
        
        let newNode = new ListNode(val, prevNode, nextNode);
        prevNode.next = newNode
        nextNode.prev = newNode;
        
        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        let prevNode = this.tail.prev;
        let nextNode = this.tail;

        let newNode = new ListNode(val, prevNode, nextNode);
        prevNode.next = newNode;
        nextNode.prev = newNode;
        
        this.size++;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if(index < 0 || index > this.size) {
            return;
        }
        
        let ctr = 0;
        let prevNode = this.head;

        while(ctr < index){
            prevNode = prevNode.next;
            ctr++;
        }
        let nextNode = prevNode.next;

        let newNode = new ListNode(val, prevNode, nextNode);
        prevNode.next = newNode;
        nextNode.prev = newNode;

        this.size++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if(index < 0 || index >= this.size) {
            return;
        }
        
        let ctr = 0;
        let prevNode = this.head;

        
        // let curr = this.head.next;
        while(ctr < index){
            prevNode = prevNode.next;
            ctr++;
        }
        
        let nodeToDelete = prevNode.next;
        
        let nextNode = nodeToDelete.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        this.size--;
    }
}
