class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let window = {};
        let l = 0;
        for(let r = 0; r< nums.length; r++){
            let currNum = nums[r];
            console.log(currNum);
            if(currNum in window){
                if(window[currNum] !== r){
                    let absVal = Math.abs(window[currNum] - r);
                    if(absVal <= k){
                        return true;
                    }
                }
            }
            
            
            window[currNum] = r;
        }
        return false;
    }
}
