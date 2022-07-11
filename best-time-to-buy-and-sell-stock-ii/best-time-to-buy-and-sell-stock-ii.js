/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let total = 0, valley = prices[0], peak = valley;
    
    for (let i = 0; i < prices.length; i ++) {
        let currentValue = prices[i];
        if (currentValue < peak) {
            total += peak - valley;
            
            valley = prices[i];
            peak = valley;
        } else
            peak = currentValue;
    }
    
    total += peak - valley;
    
    return total;
};