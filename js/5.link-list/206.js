/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
    let cursor = head;
    let recursor = null;
    while(cursor){
        let tmp = cursor.next;
        cursor.next = recursor;
        recursor = cursor;
        cursor = tmp;
    }
    return recursor;
};