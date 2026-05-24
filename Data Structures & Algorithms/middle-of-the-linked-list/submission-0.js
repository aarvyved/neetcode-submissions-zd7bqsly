/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    middleNode(head) {
        let slow = head, fast = head;
        // console.log('head', head);
        while (fast && fast.next){
            console.log('slow', slow);
            console.log('fast', fast);
            
            slow = slow.next;
            fast = fast.next.next;
            
        }
        
        return slow;
    }
}
