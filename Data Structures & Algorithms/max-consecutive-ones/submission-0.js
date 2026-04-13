class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0;
        let ctr = 0;
        for(let num of nums){
            if(num === 1){
                ctr++;
            } else {
                ctr = 0;
            }
            max = Math.max(max, ctr);
        }
        return max;
    }
}
