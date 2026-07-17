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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let listArr = [];
        let currNode = head;

        while (currNode) {
            listArr.push(currNode);
            currNode = currNode.next;
        }
        console.log(listArr);

        let listLength = listArr.length;

        // Special case: removing the head node
        if (n === listLength) {
            return head.next;
        }

        // General case: connect node before target to node after target
        let targetIndex = listLength - n;
        listArr[targetIndex - 1].next = listArr[targetIndex + 1] || null;

        return head;
    }
}
