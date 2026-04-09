class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        
        for(let i=0; i<prices.length; i++){
            let sell = prices[i];
            let j = i - 1;
            while(j >= 0){
                let buy = prices[j];
                let profit = sell - buy;
                if(profit > maxProfit){
                    maxProfit = profit;
                };
                j--;
            }    
        }
        return maxProfit;
    }
}
