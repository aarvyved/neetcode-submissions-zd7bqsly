
//  Definition for singly-linked list.
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
 

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prevNode;
        let currNode = head;
        let newList

        if(head == null){
            return new ListNode('', null);
        }
        
        while(currNode !== null){
            console.log('currNode', currNode);

            if(currNode == head) {
                newList = new ListNode(currNode.val, null);
            }
            
            // set link
            newList = new ListNode(currNode.val, prevNode);

            prevNode = newList;
            
            // set next node to traverse
            currNode = currNode.next;

            
            
        }
        
        console.log('newList', newList);
        return newList;
    }
}
