class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t==="") return "";

        let countT = {};
        for(let char of t){
            countT[char] = (countT[char] || 0) + 1;
        }
    
        
        
        let window = {};
        let have = 0;
        let need = Object.keys(countT).length;
        
        let res = [-1. -1];
        let resLen = Infinity;
        let l = 0;

        for(let r = 0; r < s.length ; r++){
            let currChar = s[r];
            window[currChar] = (window[currChar] || 0 ) + 1;

            if(window[currChar] === countT[currChar]){
                have++;
            }

            while(have === need){
                if(r - l + 1 < resLen){
                    res = [l, r];
                    resLen = r - l + 1;
                }

                let leftChar = s[l];
                window[leftChar]--;

                if(countT[leftChar] && window[leftChar] < countT[leftChar]){
                    have--;
                }
                l++;
            }
        }

        const [start, end] = res;
        return resLen === Infinity ? "" : s.substring(start, end + 1);
    }
}
