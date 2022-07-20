
var MyQueue = function() {
    this.stack = [];
};

/** 
 * Push element x to the back of the queue
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {   
    const newStack = [];
    
    while(this.stack.length > 0) {
        newStack.push(this.stack.pop());
    }
    
    newStack.push(x);
    
    while(newStack.length > 0) {
        this.stack.push(newStack.pop());
    }
};

/**
 * Removes the element from the front of the queue and returns it
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.stack.length > 0 ? this.stack.pop() : undefined;
};

/**
 * Returns the element at the front of the queue
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack.length > 0 ? this.stack[this.stack.length - 1] : undefined;
};

/**
 * Returns true if the queue is empty, false otherwise
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */