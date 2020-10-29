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
 * @return {number[]}
 */
const inorderTraversal = function(root) {
    const res = []
    const handler = (root)=>{
        if(!root) return res
    handler(root.left);
    res.push(root.val);
    handler(root.right)
    }
    handler(root)
    return res
};