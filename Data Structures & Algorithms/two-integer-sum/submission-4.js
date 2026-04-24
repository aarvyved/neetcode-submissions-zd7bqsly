class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {}
        let res = [];
        for(const[i, n] of nums.entries()){

            
            const diff = target - n;
            if(diff in map){
                return [map[diff] ,i]
            }

            map[n] = i
            
        }
        return res;
        
    }
}
