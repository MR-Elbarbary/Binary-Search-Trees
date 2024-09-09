import { BinaryTree } from "./binaryTree.mjs";

let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 74, 89]

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

let tree = new BinaryTree();
tree.buildTree(arr);
prettyPrint(tree.root);

console.log(tree.isBalanced());

tree.levelOrder((node) => console.log(node.value));
console.log("in order");
tree.inOrder((node) => console.log(node.value), tree.root);
console.log("pre order");
tree.preOrder((node) => console.log(node.value), tree.root);
console.log("post order");
tree.postOrder((node) => console.log(node.value), tree.root);
tree.insert(100);
tree.insert(103);
tree.insert(107);
tree.insert(110);
tree.insert(115);
tree.insert(136);
prettyPrint(tree.root);
console.log(tree.isBalanced());
tree.rebalance();
prettyPrint(tree.root);
console.log(tree.isBalanced());