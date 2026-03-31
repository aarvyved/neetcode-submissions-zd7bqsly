class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hashMap = {};
        for(const [ind, str] of strs.entries()){
            const sortedStr = str.split('').sort().join('');
            if(!(sortedStr in hashMap)){
                hashMap[sortedStr] = []
            }
            hashMap[sortedStr].push(str);
        }
        return Object.values(hashMap);
    }
}
