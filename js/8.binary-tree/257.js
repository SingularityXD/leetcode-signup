/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let treeArr = [];
    const dfs = (node, path) => {
        if (node) {
            path += node.val.toString();
            if (node.left === null && node.right === null) {
                treeArr.push(path);
            } else {
                path += '->';
                dfs(node.left, path);
                dfs(node.right, path);
            }
        }
    }
    dfs(root, '');
    return treeArr;
};