class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let length = nums.length + 1;
        let l = 0;
        let sum = 0;

        for(let r=0; r < nums.length; r++){
            
            sum += nums[r];
            while(sum >= target) {
                sum -= nums[l]
                length = Math.min(length, r - l + 1);
                l++
            }
            
            
        }
        return length === nums.length + 1 ? 0 : length;
    }
}
