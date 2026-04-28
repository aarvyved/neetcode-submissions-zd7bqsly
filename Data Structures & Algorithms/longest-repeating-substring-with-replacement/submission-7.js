class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        let charSet = new Set(s);
        
        for (let c of charSet){
            let l = 0;
            let ctr = 0;
            for(let r = 0; r < s.length; r++){
                if(s[r] === c){
                    ctr++;
                }

                while(r - l + 1 - ctr > k){
                    if(s[l] === c){
                        ctr--;
                    }
                    l++;
                }
                res = Math.max(res, r - l + 1);
            }
        }
        return res;

    }
}
