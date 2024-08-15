class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert a value into the BST
    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Find the closest value to a given number in the BST
    findClosestValue(target) {
        return this.findClosest(this.root, target, this.root.value);
    }

    findClosest(node, target, closest) {
        if (node === null) {
            return closest;
        }
        if (Math.abs(target - closest) > Math.abs(target - node.value)) {
            closest = node.value;
        }
        if (target < node.value) {
            return this.findClosest(node.left, target, closest);
        } else if (target > node.value) {
            return this.findClosest(node.right, target, closest);
        } else {
            return closest;
        }
    }

    // Inorder traversal for testing
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.value);
            this.inorder(node.right);
        }
    }
}

// Example usage:
const bst = new BinarySearchTree();
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(7);
bst.insert(13);

console.log("Inorder traversal:");
bst.inorder(bst.root);

const target = 12;
console.log(`Closest value to ${target}:`, bst.findClosestValue(target)); // Should print 13


//Explanation
// Insertion: The insert method inserts a new value into the BST by traversing the tree and placing the new value in its appropriate position.
// Find Closest Value: The findClosestValue method initiates the search for the closest value by calling the findClosest helper method with the root node, target value, and an initial closest value.
// The findClosest method recursively traverses the tree.
// If the current node is closer to the target than the previous closest value, update the closest value.
// Depending on whether the target is less than or greater than the current node's value, recursively call the method on the left or right subtree, respectively.
// If the target equals the current node's value, return the current node's value as it is the closest.
// Inorder Traversal: This is included for testing purposes to verify the tree structure.
// This implementation ensures that you find the closest value to a given number efficiently by leveraging the properties of the BST.//