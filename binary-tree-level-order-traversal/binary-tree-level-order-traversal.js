/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const levels = [];
    if (root === null) {
        return levels;
    }
    
    helper(root, 0, levels);
    
    return levels;
};

function helper(node, level, levels) {
    // start the current level
    if (levels.length === level) {
        levels.push([]);
    }
    
    // fullfill current level
    levels[level].push(node.val);
    
    // process child nodes for the next levels
    if (node.left !== null) {
        helper(node.left, level + 1, levels);
    }
    if (node.right !== null) {
        helper(node.right, level + 1, levels);
    }
}