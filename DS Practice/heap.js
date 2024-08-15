class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    // Function to swap elements at two indices in the heap
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Function to insert a value into the heap
    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    } // Complexity: O(log n)

    // Function to heapify the array from bottom to top
    shiftUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] > this.heap[index]) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    // Function to heapify the array from top to bottom
    shiftDown(index) {
        const length = this.heap.length;
        let smallestIndex = index;

        while (true) {
            const leftChildIndex = 2 * smallestIndex + 1;
            const rightChildIndex = 2 * smallestIndex + 2;

            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }

            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }

            if (smallestIndex !== index) {
                this.swap(index, smallestIndex);
                index = smallestIndex;
            } else {
                break;
            }
        }
    } // Complexity: O(log n)

    // Function to remove the top element from the heap
    remove() {
        if (this.heap.length === 0) {
            return null;
        }
        const removedValue = this.heap[0];
        const lastValue = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = lastValue;
            this.shiftDown(0);
        }
        return removedValue;
    } // Complexity: O(log n)

    // Function to build a heap from an array
    buildHeap(arr) {
        this.heap = [...arr];
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.shiftDown(i);
        }
    } // Complexity: O(n)

    // Function to peek or return the top element in the heap
    peek() {
        return this.heap[0];
    }

    // Function to get the parent of the given index in the heap
    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    // Function to get the left child of the given index in the heap
    leftChild(index) {
        return 2 * index + 1;
    }

    // Function to get the right child of the given index in the heap
    rightChild(index) {
        return 2 * index + 2;
    }

    // Function to display the current state of the heap
    display() {
        console.log(this.heap);
    }
}

// Example usage
const heap = new MinHeap();
heap.insert(15);
heap.insert(5);
heap.insert(20);
heap.insert(10);
heap.display(); // Output: [5, 10, 20, 15]

// To test buildHeap
// const arr = [10, 1, 2, 5, 70, 0, 8, 3];
// heap.buildHeap(arr);
// heap.display(); // Output: [0, 1, 2, 3, 70, 10, 8, 5]

// To test remove
// heap.remove();
// heap.display(); // Output: [1, 3, 2, 5, 70, 10, 8]



// max Heap 

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Helper methods
    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChildIndex(index) {
        return 2 * index + 1;
    }

    rightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index) {
        let parent = this.parentIndex(index);
        while (index > 0 && this.heap[index] > this.heap[parent]) {
            this.swap(index, parent);
            index = parent;
            parent = this.parentIndex(index);
        }
    }

    extractMax() {
        if (this.heap.length === 0) {
            return null;
        }

        const max = this.heap[0];
        const end = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.heapifyDown(0);
        }

        return max;
    }

    heapifyDown(index) {
        let left = this.leftChildIndex(index);
        let right = this.rightChildIndex(index);
        let largest = index;

        if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
            largest = left;
        }

        if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest = right;
        }

        if (largest !== index) {
            this.swap(index, largest);
            this.heapifyDown(largest);
        }
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    size() {
        return this.heap.length;
    }
}

// Example usage:
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(5);
console.log('Max-Heap:', maxHeap.heap); // Output: [20, 10, 5]
console.log('Extracted Max:', maxHeap.extractMax()); // Output: 20
console.log('Heap after extraction:', maxHeap.heap); // Output: [10, 5]
