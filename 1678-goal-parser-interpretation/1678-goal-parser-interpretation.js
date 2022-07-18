/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let output = '';
    
    for(let i = 0 ; i < command.length; i++) {
        if (command[i] === '(' && command[i + 1] === ')') {
            output += 'o';
            i = i + 1;
            continue;
        } else if (command[i] === '(' || command[i] === ')') { 
            continue;
        }
        
        output += command[i];
    }
    
    return output;
};