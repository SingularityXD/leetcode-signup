/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
    const res = []
    if(!root) return res
    const q = [root]
    while(q.length){
    let len = q.length
        const l = []
        while(len--){
      const h = q.shift()
        l.push(h.val)
        if(h.left) q.push(h.left)
        if(h.right) q.push(h.right)
        }
    res.push(l)
    }
    return res
};