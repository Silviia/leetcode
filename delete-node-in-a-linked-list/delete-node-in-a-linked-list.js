/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    if (node.next == null) {
        return;
    }
    
    let curr = node;
    let prev = null;
    while(curr.next != null) {
        curr.val = curr.next.val;
        prev = curr;
        curr = curr.next;
    }
    
    prev.next = null;
};