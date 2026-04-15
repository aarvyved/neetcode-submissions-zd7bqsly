class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = [];
        nums.forEach((n, i) => {
            ans.push(n);
        });
        return ans.concat(nums);
    }
}
