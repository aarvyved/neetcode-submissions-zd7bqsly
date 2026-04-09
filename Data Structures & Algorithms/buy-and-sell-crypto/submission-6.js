class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lowestPrice = 100;
        let maxProfit = 0;
        for(let price of prices){
            lowestPrice = Math.min(lowestPrice, price);
            maxProfit = Math.max(maxProfit, (price - lowestPrice))
        }
        return maxProfit;
    }
}
