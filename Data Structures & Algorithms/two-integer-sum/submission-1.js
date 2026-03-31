class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let res = [];
        for(const[i, n] of nums.entries()){
            console.log(i, n);
            const compIndex = nums.indexOf(target - n);

            if((i != compIndex) && (compIndex != -1)){
                res.push(i);
                res.push(compIndex);
                return res.sort();
            }
        }
        
    }
}
