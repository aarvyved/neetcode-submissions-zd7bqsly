class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const counterHash = {};
        for(const n of nums){
            if(n in counterHash){
                return true
            } else {
                counterHash[n] = 1
            }
        }
        return false;
    }
}
