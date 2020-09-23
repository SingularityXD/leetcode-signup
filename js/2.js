/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    const l3 = new ListNode(0);
    let c1 = l1
    let c2 = l2
    let c3  = l3
    let tens = 0
    while(c1 || c2){
        const sum = (c1 ? c1.val : 0) + (c2 ? c2.val : 0) + tens
        c3.next = new ListNode(sum % 10)
        tens= Math.floor(sum/10)
        c1 && (c1 = c1.next)
        c2 && (c2 = c2.next)
        c3 = c3.next;
    }
    tens && (c3.next = new ListNode(tens))
    return l3.next;
};