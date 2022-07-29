/********* Dynamic programming solution *********/
/**
 * Based on the recursion solution, we know memo[0] = 0 and that memo[i] depends on memo[i - coin] =>
 * memo[i] = min(memo[i], memo[i-coin] + 1); 
 * Using dynamic programming for a better time, space complexity.
 * Space complexity O(S)
 * Time complexity: O(N*S)
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // Array structure to store the results
    // We initialize each entry with a max value
    const dp = Array(amount + 1).fill(amount + 1); 
    
    dp[0] = 0; // To make up the amount 0, we need 0 coins
    // Update entries
    for (let i = 1; i <= amount; i += 1) {
        // For each entry dp[i]  we need to choose coins to make up the amount i
        for (let j = 0;  j < coins.length; j += 1) {
            let coin = coins[j];
            // Check if value of current coin is bigger than current amount
            if (i - coin < 0) {
                continue;
            }
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    
    // We return dp amount if it has been updated
    return dp[amount] === (amount + 1) ? -1 : dp[amount];
};



/********* Recursion with memoization solution *********/
/**
 * Using recursion, but storing partial results in a memo table. For each subproblem if we 
 * already calculated the result, we can reuse it.
 * Space complexity: O (S), time complexity O (S*N) where S is the amount.
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChangeRecMemo = function(coins, amount) {
    const memo = [];
    return recursiveHelper(coins, amount, memo); 
};

function recursiveHelper(coins, amount, memo) {
    if (amount < 0) {
        return -1;
    }
    
    if (amount === 0) {
        return 0;
    }
    
    if (memo[amount] !== undefined) {
        return memo[amount]
    }
    
    let minCount = Infinity;
    for (let i = 0; i < coins.length; i += 1) {
        let coin = coins[i];
        let count = recursiveHelper(coins, amount - coin);
        if (count === -1) {
            continue;
        }
        minCount = Math.min(minCount, count + 1);
    }
    
    memo[amount] = minCount === Infinity ? -1 : minCount;
    return memo[amount];
}


/********* Recursive solution *********/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChangeRecursive = function(coins, amount) {
    return recursiveHelper(coins, amount);
};


/**
 * Space complexity is O(amount), time complexity - amount problem to solve = > amount at power of N - where N is the number of denominations
 */
function recursiveHelper(coins, amount) {
    if (amount < 0) {
        return -1;
    }
    
    if (amount === 0) {
        return 0;
    }
    
    let minCount = Infinity;
    for (let i = 0; i < coins.length; i += 1) {
        let coin = coins[i];
        let count = recursiveHelper(coins, amount - coin);
        if (count === -1) {
            continue;
        }
        minCount = Math.min(minCount, count + 1);
    }
    
    return minCount === Infinity ? -1 : minCount;
}