class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedVal = "";
        for (let s of strs){
            encodedVal += `${s.length}#${s}`
        }
        return encodedVal;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        let i = 0;
        
        while(i < str.length) {
            let j = i;
            while(str[j] !== "#"){
                j++;
            }
            let length = parseInt(str.substring(i, j));
            
            // set i to start of word location
            i = j + 1;
            // set j to end of word location
            j = i + length;
            res.push(str.substring(i, j));
            // set i to the position of the next number where j is
            i = j;
        }
        return res;
    }
}
