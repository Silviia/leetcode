/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Using set aproach to find target value.
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const set = new Set();
    
    return helper(root, k, set);
};

function helper(root, k, set) {
    if (root === null) {
        return false;
    }
    
    if (set.has(k - root.val)) {
        return true;
    }
    
    set.add(root.val);
    
    return helper(root.left, k, set) || helper(root.right, k, set);
}