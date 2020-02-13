class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
};

const has_path = (root, sum) => {
    if (root === null) {
        return false;
    }

    if (root.val === sum && root.left === null && root.right === null) {
        return true;
    }

    return (has_path(root.left, sum - root.val) || has_path(root.right, sum - root.val));
};

// TC: O(n)
// SC: O(n)

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has path: ${has_path(root, 23)}`);
console.log(`Tree has path: ${has_path(root, 16)}`);