class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqHash = {};
        for(let num of nums){            
            freqHash[num] = (freqHash[num] || 0) + 1;
        }
        
        let freqGroups = Array.from({length: nums.length + 1}, () => []);
        for(let item in freqHash){
            const freq = freqHash[item];
            freqGroups[freq].push(item);
        }
        console.log(freqGroups)

        let res = []

        for(let i = freqGroups.length - 1; i > 0; i--){
            if(res.length == k){
                return res;
            } else {
                console.log(freqGroups[i]);
                res = [...res, ...freqGroups[i]];
            }
        }

        return res;
    }
}
