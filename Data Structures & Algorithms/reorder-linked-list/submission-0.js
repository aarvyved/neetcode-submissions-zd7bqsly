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
        console.log('real slow', slow);

        let mid = slow.next;
        slow.next = null;

        console.log('mid', mid);

        // reverse the second half
        let prev = null;
        while(mid){
            let tmp = mid.next;
            mid.next = prev;
            prev = mid;
            mid = tmp;
        }
        
        console.log('prev', prev);
        
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