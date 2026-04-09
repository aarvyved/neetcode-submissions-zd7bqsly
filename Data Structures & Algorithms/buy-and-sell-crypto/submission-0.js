class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l, r = 0;
        let maxProfit = 0;
        
        for(let i=0; i<prices.length; i++){
            let paidPrice = prices[i];
            
            for(let j=i+1; j<prices.length; j++){
                let sellPrice = prices[j];
                if(sellPrice > paidPrice){
                    let profit = sellPrice - paidPrice
                    if(profit > maxProfit){
                        maxProfit = profit;
                    }
                }
            }
        }
        return maxProfit;
    }
}
