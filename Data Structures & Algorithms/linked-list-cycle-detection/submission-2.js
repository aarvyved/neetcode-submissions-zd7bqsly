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
     * @return {boolean}
     */
    hasCycle(head) {
        let visited = new Set();
        let currNode = head;
        while(currNode != null){
            if(visited.has(currNode)){
                return true;
            }
            visited.add(currNode);
            currNode = currNode.next;
        }
        return false;

    }
}
