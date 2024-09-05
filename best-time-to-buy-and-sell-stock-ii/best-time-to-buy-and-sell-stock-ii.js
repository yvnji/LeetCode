/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    total_profit = 0
    
    for (i = 0; i < prices.length; i++) {
        if(prices[i] < prices[i+1]) {
            total_profit += prices[i+1] - prices[i]
        }
    }
    return total_profit
};