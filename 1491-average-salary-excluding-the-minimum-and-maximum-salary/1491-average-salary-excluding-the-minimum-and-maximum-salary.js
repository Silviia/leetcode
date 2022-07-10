/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let maxSalary = -Infinity, minSalary = Infinity, sum = 0;
    
    for (let i = 0; i < salary.length; i ++) {
        let currentSalary = salary[i];
        
        minSalary = Math.min(minSalary, currentSalary);
        maxSalary = Math.max(maxSalary, currentSalary);
        sum += currentSalary;
    }
    
    return (sum - minSalary - maxSalary) / (salary.length - 2)
};