class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a-b);
        let res = [];
        for(let i = 0; i < nums.length; i++){
            if(i > 0 && nums[i] == nums[i-1]) continue;
            console.log(nums[i])
            let target = -nums[i];
            let seen = new Set();

            for(let j=i+1; j<nums.length; j++){
                let complement = target - nums[j];
                if(seen.has(complement)){
                    res.push([nums[i], complement, nums[j]]);
                    while ((j + 1 < nums.length) && (nums[j] === nums[j + 1])) {
                        j++;
                    }
                }
                seen.add(nums[j]);
            }
        }

        return res;
    }
}
