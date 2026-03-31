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
        console.log(freqHash);
        // const sortedVals = Object.values(freqHash).sort().reverse();
        
        const sortedVals = Object.entries(freqHash).sort((a,b) => a[1]-b[1]).reverse();
        console.log(sortedVals);

        let res = []
        for(let i = 0; i < k; i++){
            res.push(sortedVals[i][0]);
        }
        
        return res;
    }
}
