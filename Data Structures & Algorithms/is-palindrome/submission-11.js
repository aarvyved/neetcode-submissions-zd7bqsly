class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // remove the spaces
        let str = s.split(' ').join('').replace(/[^a-z0-9]/gi, "").toLowerCase();
        let i = 0;
        let j = str.length - 1;
        // start checking from both the ends if the chars are similar
        while(i < j){
            if(str[i] !== str[j]){
                return false
            }
            i++;
            j--;

        }
        return true;
    }
}
