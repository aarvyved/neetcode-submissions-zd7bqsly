class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let longest = 0
        for(let num of nums){
            if(!numSet.has(num-1)){
                let seq = 1;
                while(numSet.has(num + seq)){
                    seq++;
                }
                longest = Math.max(seq, longest);
            }
            
        }
        return longest;
    }
}
