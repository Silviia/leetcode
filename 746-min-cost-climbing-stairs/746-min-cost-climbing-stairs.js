/**
 * Bottom-Up DP (Tabulation)
 * Time and space complexity: O(n)
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    //minF[i] = min( minF[i - 1] + f[i - 1] , minF[i - 2] + f[i - 2]));
    
    const minimumCost = new Array(cost.length + 1).fill(0); // one element longer than costs [we will treat the top floor as the step to reach] and all elements set to 0
    for (let i = 2; i <= cost.length; i++)  {
        let takeOneStep = minimumCost[i - 1] + cost[i - 1];
        let takeTwoSteps = minimumCost[i - 2] + cost[i - 2];
         minimumCost[i] = Math.min(takeOneStep, takeTwoSteps);
    }
    
    return minimumCost[cost.length];
};