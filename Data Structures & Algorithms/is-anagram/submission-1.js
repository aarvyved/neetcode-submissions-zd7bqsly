class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // check lengths first
        if(s.length !== t.length){
            return false
        }

        let hash1 = {};
        let hash2 = {};

        // loop over the length of the strings
        for(let i=0; i < s.length; i++){
            let charS = s[i];
            let charT = t[i];
        //    check if the character exists in hashes
            if(charS in hash1){
                hash1[charS]++
            } else {
                hash1[charS] = 1
            }

            if(charT in hash2){
                hash2[charT]++
            } else {
                hash2[charT] = 1
            }
        }

        console.log(hash1);
        console.log(hash2);

        for(const k in hash1){
            // check if the key also exists in hash2
            if(!(k in hash2) || (hash1[k] !== hash2[k])){
                return false;
            }
        }
        return true

    }
}
