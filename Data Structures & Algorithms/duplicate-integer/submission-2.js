class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // let hasDupe = false;
        const counterHash = {};
        for(const n of nums){
            if(n in counterHash){
                return true
            } else {
                counterHash[n] = 1
            }
        }
        return false
        // for(const key of Object.keys(counterHash)){
        //     if(counterHash[key] > 1) {
        //         hasDupe = true
        //     }
        // }
        // return hasDupe;
    }
}
