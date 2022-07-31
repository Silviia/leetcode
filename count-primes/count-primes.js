/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const isPrime = [];
    for (let i = 2; i < n; i += 1) {
        isPrime[i] = true;
    }
    for (let i = 2; i * i < n; i += 1) {
        if (!isPrime[i]) {
            continue;
        }
        for (let j = i * i; j < n; j += i) {
            isPrime[j] = false;
        }
    }
    let count = 0;
    for (let i = 2; i < n; i += 1) {
        if (isPrime[i]) {
            count += 1;
        }
    }
    return count;
};