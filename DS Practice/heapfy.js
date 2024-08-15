// Function to heapify a subtree rooted with node i
function heapify(arr, n, i) {
	let largest = i; // Initialize largest as root
	let left = 2 * i + 1; // Left child
	let right = 2 * i + 2; // Right child
  
	// If left child is larger than root
	if (left < n && arr[left] > arr[largest]) {
	  largest = left;
	}
  
	// If right child is larger than largest so far
	if (right < n && arr[right] > arr[largest]) {
	  largest = right;
	}
  
	// If largest is not root
	if (largest != i) {
	  [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
  
	  // Recursively heapify the affected sub-tree
	  heapify(arr, n, largest);
	}
  }
  
  // Main function to perform heap sort
  function heapSort(arr) {
	let n = arr.length;
  
	// Build a maxheap
	for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
	  heapify(arr, n, i);
	}
  
	// One by one extract elements from heap
	for (let i = n - 1; i > 0; i--) {
	  // Move current root to end
	  [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap
  
	  // Call max heapify on the reduced heap
	  heapify(arr, i, 0);
	}
  }
  
  // Example usage
  const arr = [12, 11, 13, 5, 6, 7];
  console.log("Unsorted array:", arr);
  
  heapSort(arr);
  console.log("Sorted array:", arr);
  






  function heapSort(arr) {
    const n = arr.length

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];

        heapify(arr, i, 0)
    }
}

function heapify(arr, n, i) {
    let largest = i
    let left = 2 * i + 1
    let right = 2 * i + 2

    if (left < n && arr[left] > arr[largest]) {
        largest = left
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        heapify(arr, n, largest)
    }
}

const myArray = [12, 11, 13, 5, 6, 7];
heapSort(myArray);
console.log("heapSort",myArray);




// maxheap 

class BinaryHeap {
  constructor() {
      this.heap = [];
  }

  // Helper method to get the parent index of a given node
  parentIndex(index) {
      return Math.floor((index - 1) / 2);
  }

  // Helper method to get the left child index of a given node
  leftChildIndex(index) {
      return 2 * index + 1;
  }

  // Helper method to get the right child index of a given node
  rightChildIndex(index) {
      return 2 * index + 2;
  }

  // Helper method to swap two nodes in the heap
  swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  // Method to insert a new value into the heap
  insert(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
  }

  // Method to maintain heap property after insertion
  heapifyUp(index) {
      let parent = this.parentIndex(index);

      while (index > 0 && this.heap[index] > this.heap[parent]) {
          this.swap(index, parent);
          index = parent;
          parent = this.parentIndex(index);
      }
  }

  // Method to remove and return the maximum value (root) from the heap
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

  // Method to maintain heap property after deletion
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

  // Method to convert an arbitrary array into a heap
  buildHeap(array) {
      this.heap = array;
      for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
          this.heapifyDown(i);
      }
  }

  // Method to get the maximum value without removing it
  peek() {
      return this.heap.length > 0 ? this.heap[0] : null;
  }

  // Method to get the size of the heap
  size() {
      return this.heap.length;
  }
}

// Example Usage:
const heap = new BinaryHeap();
heap.insert(10);
heap.insert(20);
heap.insert(5);
heap.insert(6);
heap.insert(1);
heap.insert(8);

console.log('Heap:', heap.heap); // Output: [ 20, 10, 8, 6, 1, 5 ]

console.log('Extracted Max:', heap.extractMax()); // Output: 20
console.log('Heap after extraction:', heap.heap); // Output: [ 10, 6, 8, 1, 5 ]

heap.buildHeap([3, 9, 2, 1, 4, 5]);
console.log('Heap after building:', heap.heap); // Output: [ 9, 4, 5, 1, 3, 2 ]
