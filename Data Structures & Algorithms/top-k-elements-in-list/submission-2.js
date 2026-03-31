class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqHash = {};
        for(let num of nums){            
            if(!freqHash[num]){
                freqHash[num] = 0;
            }
            freqHash[num] = freqHash[num] + 1
        }
        
        const sortedVals = Object.entries(freqHash).sort((a,b) => b[1]-a[1]);

        let res = []
        // for(let i = 0; i < k; i++){
        //     res.push(sortedVals[i][0]);
        // }
        const newArr = sortedVals.slice(0,k).map((pair) => pair[0]);
        console.log(newArr);
        // return res;
        return newArr;
    }
}
