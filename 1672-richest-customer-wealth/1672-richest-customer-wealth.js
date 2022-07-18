/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;
    const m = accounts.length; // Number of customers
    const n = accounts[0].length; // Number of accounts
    
    for(let i = 0; i < m; i++) {
        let sum = 0; // Calculates sum for one customer
        for(let j = 0; j < n; j++) {
            sum += accounts[i][j];
        }
        maxWealth = Math.max(sum, maxWealth);
    }
    
    return maxWealth;
};