import { mergeSort } from "./mergeSort.mjs";

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BinaryTree {
    constructor() {
        this.root = null;
    }
    buildTree(arr){
        arr = mergeSort(arr);
        filter(arr);
        let root = midArr(arr, 0, arr.length -1);
        this.root = root;
    }
    insert(value){
        let newNode = new Node(value);
        let node = this.root;
        while (true) {
            if (newNode.value > node.value) {
                if (node.right === null) {
                    node.right = newNode;
                    break
                } else {
                    node = node.right;
                }
            } else {
                if (node.left === null) {
                    node.left = newNode;
                    break
                } else {
                    node = node.left;
                }
            }
        }
    }
    find(value){
        let node = this.root;
        while (node !== null) {
            if (node.value === value) {
                return node
            } else if (value > node.value) {
                node = node.right;
            } else {
                node = node.left;
            }
        }
        return null
    }
    levelOrder(callback){
        let queue = [];
        queue.push(this.root);
        while (queue.length !== 0) {
            let node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            callback(node);
        }
    }
    inOrder(callback, node){
        if (!node) {
            return
        }
        callback(node);
        this.inOrder(callback, node.left);
        this.inOrder(callback, node.right);
    }
    preOrder(callback, node){
        if (!node) {
            return
        }
        this.preOrder(callback, node.left);
        callback(node);
        this.preOrder(callback, node.right);
    }
    postOrder(callback, node){
        if (!node) {
            return
        }
        this.postOrder(callback, node.left);
        this.postOrder(callback, node.right);
        callback(node);
    }
    height(node){
        if (!node) {
            return 0
        }
        let left = this.height(node.left);
        let right = this.height(node.right);
        if (left > right) {
            return left +1
        } else {
            return right + 1
        }
    }
    depth(value){
        let node = this.root;
        let counter = 0;
        while (node !== null) {
            if (node.value === value) {
                return counter
            } else if (value > node.value) {
                node = node.right;
                counter++;
            } else {
                node = node.left;
                counter++;
            }
        }
        return null
    }
    isBalanced(){
        return this.balanceChecker(this.root); 
    }
    rebalance(){
        let arr = [];
        this.preOrder((node) =>{arr.push(node.value)},
        this.root);
        console.log(arr);
        this.buildTree(arr);
    }
    balanceChecker(node) {
        if (node === null) {
            return true
        }
        let left = this.height(node.left);
        let right = this.height(node.right);
        if ((Math.abs(left - right) !== 1) && (Math.abs(left - right) !== 0)) {
            return false
        }
        return (this.balanceChecker(node.left) && this.balanceChecker(node.right))
    }
}

function midArr(arr, start, end) {
    if (start > end) {
        return null;
    }
    let mid = Math.floor((start + end) / 2);
    let node = new Node(arr[mid]);
    node.left = midArr(arr, start, mid-1);
    node.right = midArr(arr, mid+1, end);
    return node
}

function filter(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i+1]) {
            arr.splice(i+1, 1);
            i--;
        }
    }
}
