/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Use sentinel node.
 * Time complexity: one pass solution => O(N)
 * Space complexity: constant => O(1)
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let sentinel = new ListNode(0, head);
    let curr = head, prev = sentinel;
    
    while(curr !== null) {
        if (curr.val === val) {
            prev.next = curr.next;            
        } else {
            prev = curr;
        }
        
        curr = curr.next;
    }
    
    return sentinel.next;
};