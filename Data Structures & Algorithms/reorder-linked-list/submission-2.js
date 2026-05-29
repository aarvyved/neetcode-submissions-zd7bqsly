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
     * @return {void}
     */
    reorderList(head) {
        // if (!head || !head.next) return head;

        let slow = head, fast = head;
        
        while(fast && fast.next){
            fast = fast.next.next;
            slow = slow.next;
        }
        // break the list so we have two halves
        let mid = slow.next;
        slow.next = null;

        // reverse the second half
        let prev = null;
        while(mid){
            let tmp = mid.next;
            mid.next = prev;
            prev = mid;
            mid = tmp;
        }

        // reorder linked list now
        let first = head, second = prev;
        while(second){
            let nextFirst = first.next;
            let nextSecond = second.next;
            
            first.next = second;
            second.next = nextFirst;
            
            first = nextFirst;
            second = nextSecond;
        }

        return head;
    }
}