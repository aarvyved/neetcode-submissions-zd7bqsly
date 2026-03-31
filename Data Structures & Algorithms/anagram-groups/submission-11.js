class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for (let s of strs) {
            // create an array for all the alphabets 
            const count = new Array(26).fill(0);
            for(let c of s){
                // get the index for the character and increase the count
                const charInd = c.charCodeAt(0) - 'a'.charCodeAt(0);
                count[charInd] += 1;
            }
            const key = count.join(',');
            // use the key as a unique value in hashmap
            if(!res[key]){
                res[key] = [];
            }
            res[key].push(s);
        }
        return Object.values(res);
    }
}