
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
        let prevNode = null;
        let currNode = head;
        let newList

        // return empty list when head is empty
        if(head == null){
            return new ListNode('', null);
        }
        
        // loop until the nodes are done
        // Approach: build new list as you loop
        while(currNode !== null){
            
            // if(currNode == head) {
            //     newList = new ListNode(currNode.val, null);
            // }
            // create a node with prevNode values
            newList = new ListNode(currNode.val, prevNode);
            prevNode = newList;
            // set next node to traverse
            currNode = currNode.next;   
        }
        return newList;
    }
}
