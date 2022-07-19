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
    
    return helper(levels, root, 0);    
};

function helper(levels, node, level) {
   // Start the current level
    if (levels.length === level)
        levels.push([]);
    
    // Add element to current level
    levels[level].push(node.val);
    
    // Process childrens for the next level
    if (node.left != null) {
        helper(levels, node.left, level + 1);
    }
    if (node.right != null) {
        helper(levels, node.right, level + 1);
    }
    
    return levels;
}