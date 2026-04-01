class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = [];
        // const totalProduct = nums.reduce((acc, val) => {
        //     // if(val !== 0) {
        //     //     return acc * val;
        //     // }
        //     // return acc;
        //     return acc * val;
        // }, 1);
        // console.log(totalProduct);
        for(let [ind, num] of nums.entries()){
            let acc = 1;
            for(let [ind2, num2] of nums.entries()){
                
                if((ind2 !== ind)){
                    acc *= num2;
                };
                
            }
            res.push(acc);
        }
        return res;
    }
}
