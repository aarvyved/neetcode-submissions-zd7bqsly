class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let zeroCnt = 0;
        const totalProduct = nums.reduce((acc, val) => {
            if(val !== 0){
                return acc *= val;
            } else {
                zeroCnt++;
                return acc;
            }
        }, 1);
        console.log(totalProduct);
        
        if(zeroCnt > 1){
            return Array(nums.length).fill(0);
        }

        let res = [];
        for(let num of nums){
            if(zeroCnt > 0){
                const val = (num === 0) ? totalProduct : 0;
                res.push(val);
            } else {
                res.push(totalProduct / num)
            }
        };
        return res;
    }
}
