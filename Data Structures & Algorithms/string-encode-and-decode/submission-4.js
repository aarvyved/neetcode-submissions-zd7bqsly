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
        console.log(encodedVal);
        
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
            console.log('j', j);
            let length = parseInt(str.substring(i, j));
            console.log('length', length);
            
            i = j + 1;
            j = i + length;
            res.push(str.substring(i, j));
            i = j
        }

        console.log(res);
        return res;
        
    }
}
