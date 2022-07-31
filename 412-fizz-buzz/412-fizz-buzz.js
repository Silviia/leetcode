/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const response = [];
    
    for (let i = 1; i <= n ; i += 1) {
        let divisibleBy3 = i % 3 === 0;
        let divisibleBy5 = i % 5 === 0;
        
        let ansStr = '';
        
        if (divisibleBy3) {
            ansStr += 'Fizz';
        }
        
        if (divisibleBy5) {
            ansStr += 'Buzz';
        }
        
        if (ansStr === '') {
            // Not divisible by 3 or 5, add the number
            ansStr += i;
        }
        
        response.push(ansStr);
    }
    
    return response;
};