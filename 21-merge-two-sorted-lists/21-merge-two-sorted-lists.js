/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Merging the lists recursively. There will be one call to mergeTwoLists per element in each list.
 * Therefore, the time complexity is linear in the combined size of the lists.
 * Time complexity: O(N+M)
 * Space complexity: O(N+M) - the first call to this function does not return until the ends of both l1 and l2 have been reached
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (list1 === null) {
        return list2;
    }
    
    if (list2 === null) {
        return list1;
    }
    
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};