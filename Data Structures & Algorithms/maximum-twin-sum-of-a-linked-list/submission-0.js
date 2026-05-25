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
     * @return {number}
     */
    pairSum(head) {
        let valArr = [];
        let node = head;
        
        while(node){
            valArr.push(node.val);
            node = node.next;
        }

        console.log('arr', valArr);
        
        let sum = 0;
        let length = valArr.length;
        for(let i=0; i< length; i++){
            const total = valArr[i] + (valArr[length - 1 - i]);
            sum = Math.max(sum, total);
        }
        return sum;
        
        
    }
}
