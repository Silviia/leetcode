/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.array = nums;
    this.original = [...nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.array = this.original;
    this.original = [...this.original];
    return this.array;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    // Get an array copy - creating a shallow copy this way - is safe since we are not dealing with multidimensional arrays
    const aux = [...this.array];
    for (let i = 0; i < this.array.length; i += 1) {
        let removeIdx = Math.floor(Math.random() * aux.length);
        this.array[i] = aux[removeIdx];
        aux.splice(removeIdx, 1);
    }
    return this.array;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */