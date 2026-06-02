class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    hash = {};
    climbStairs(n) {
        if(n <= 2){
            return n;
        }
        
        if(!this.hash[n]){    
            this.hash[n] = this.climbStairs(n-1) + this.climbStairs(n-2);
        }
        return this.hash[n];
    }
}
