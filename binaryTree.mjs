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
                if (newNode.right === null) {
                    node.right = newNode;
                    break
                } else {
                    node = node.right;
                }
            } else {
                if (newNode.left === null) {
                    node.left = newNode;
                    break
                } else {
                    node = node.left;
                }
            }
        }
    }
    deleteItem(value){

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
