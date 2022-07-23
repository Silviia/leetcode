/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Solution using Floyd's algorithm
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    
    return false;
};


/**
 * Solution using a set
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycleSet = function(head) {
    const visited = new Set();
    
    while(head != null) {
        if (visited.has(head)) {
            return true;
        } else {
            visited.add(head);
        }
        
        head = head.next;
    }
    
    return false;
};