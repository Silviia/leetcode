const cache = {0: 0, 1: 1};
/**
 * Top-down approach using memoization, time, space complexity O(n)
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n <= 1)
        return n;
    
    if (cache[n] !== undefined)
        return cache[n];
    
    cache[n] = fib(n-1) + fib(n-2);
    
    return cache[n];
};

/**
 * Iterative aproach, times, space complexity: O(N)
 * Bottom-up
 */
var fibIterative = function(n) {
    if (n <= 1)
        return n;
    
    const f = [];
    f [0] = 0, f[1] = 1;
    
    for (let i = 2; i <= n; i ++)
        f[i] = f[i - 1] + f[i - 2];
    
    return f[n];
};

/**
 * Recursive aproach, high complexity
 */
var fibRec = function(n) {
    if (n <= 1)
        return n;
    
    if (n > 1)
        return fib(n-1) + fib(n-2);
};