// Input: [5, 3, 8, 2, 1]
// Output: [1, 2, 3, 5, 8]


// function bubbleSort(arr) {
// 	const length = arr.length;
// 	for(let i = 0; i < length - 1; i++) {
// 		for(let j = 0 ; j< length - 1;j++ ) {
//            if(arr[j] > arr[j+1]) {
// 			[arr[j],arr[j+1]] =[arr[j+1],arr[j]];
// 		   }
// 		}
// 	}
// 	return arr;
// }

// console.log(bubbleSort([5, 3, 8, 2, 1]))


//--------------------- Bubble sort with string ----------------------------------//

// const students = [
//     { name: "Alice", score: 85 },
//     { name: "Bob", score: 90 },
//     { name: "Charlie", score: 75 },
//     { name: "David", score: 90 },
//     { name: "Eve", score: 75 }
// ];

// console.log(bubbleSortStudents(students));
/* Output:
[
    { name: "Bob", score: 90 },
    { name: "David", score: 90 },
    { name: "Alice", score: 85 },
    { name: "Charlie", score: 75 },
    { name: "Eve", score: 75 }
]
*/


// function BubbleSortStudents(students) {
//    const length = students.length;
//    for(let i = 0; i<length -1;i++) {
// 	let swapped = false;
// 	for(let j=0;j<length -1 ;j++) {
// 		if(students[j].score < students[j+1].score){
// 			[students[j],students[j+1]] = [students[j+1],students[[j]]];
// 			swapped = true;
// 		}
// 	}
// 	if(!swapped) break;
//    }

//    return students;
// }

// const students = [
//     { name: "Alice", score: 85 },
//     { name: "Bob", score: 90 },
//     { name: "Charlie", score: 75 },
//     { name: "David", score: 90 },
//     { name: "Eve", score: 75 }
// ];

// console.log(BubbleSortStudents(students));

// ======= simple way to string bubbble sorting


// function bubbleSortStudents(students) {
//     students.sort((a, b) => {
//         // Sort by score in descending order
//         if (a.score !== b.score) {
//             return b.score - a.score;
//         } else {
//             // If scores are equal, sort by name alphabetically
//             return a.name.localeCompare(b.name);
//         }
//     });
//     return students;
// }


// Input: [5, 3, 8, 2, 1]
// Output: [1, 2, 3, 5, 8]


// function BubbleSort(arr) {
//     let swapped;

//     do{
//          swapped = false;
//         for(let i = 0;i<arr.length;i++){
//             if(arr[i] > arr[i+1]){
//                 let temp = arr[i];
//                 arr[i] = arr[i+1];
//                 arr[i+1] = temp;
//                 swapped = true;
//             }
//         }
//     } while(swapped);
//  }

// const arr =[5, 3, 8, 2, 1]
// BubbleSort(arr);
// console.log(arr);


function selectionSort(arr) {
    const n = arr.length; // Get the length of the array
    for (let i = 0; i < n - 1; i++) { // Iterate over the array up to the second-to-last element
        let minIndex = i; // Assume the current index is the index of the minimum element
        for (let j = i + 1; j < n; j++) { // Iterate over the unsorted portion of the array
            if (arr[j] < arr[minIndex]) { // If we find an element smaller than the current minimum
                minIndex = j; // Update the index of the minimum element
            }
        }
        if (minIndex !== i) { // If the index of the minimum element has changed
            // Swap the current element with the minimum element
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr; // Return the sorted array
}

// Example usage:
const arr = [7, 2, 1, 6, 8, 5, 3, 4]; // Define an array to be sorted
console.log("Original array:", arr); // Print the original array
const sortedArr = selectionSort(arr); // Sort the array using the selectionSort function
console.log("Sorted array:", sortedArr);


class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.items[0];
      }
      return null;
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    print() {
      console.log(this.items.toString());
    }
  }
  
  const queue = new Queue();
  console.log(queue.isEmpty());
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  console.log(queue.size());
  queue.print();
  console.log(queue.dequeue());
  console.log(queue.peek());
  queue.print();

  







  // circular

  class CircularQueue {
    constructor(capacity) {
      this.items = new Array(capacity);
      this.rear = -1;
      this.front = -1;
      this.currentLength = 0;
      this.capacity = capacity;
    }
  
    isFull() {
      return this.currentLength === this.capacity;
    }
  
    isEmpty() {
      return this.currentLength === 0;
    }
  
    size() {
      return this.currentLength;
    }
  
    enqueue(item) {
      if (!this.isFull()) {
        this.rear = (this.rear + 1) % this.capacity;
        this.items[this.rear] = item;
        this.currentLength += 1;
        if (this.front === -1) {
          this.front = this.rear;
        }
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      const item = this.items[this.front];
      this.items[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      this.currentLength -= 1;
      if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
      }
      return item;
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.items[this.front];
      }
      return null;
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
      } else {
        let i;
        let str = "";
        for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
          str += this.items[i] + " ";
        }
        str += this.items[i];
        console.log(str);
      }
    }
  }
  
  const queue = new CircularQueue(5);
  console.log(queue.isEmpty());
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.enqueue(40);
  queue.enqueue(50);
  console.log(queue.size());
  queue.print();
  console.log(queue.isFull());
  console.log(queue.dequeue());
  console.log(queue.peek());
  queue.print();
  queue.enqueue(60);
  queue.print();

  
  // object

  class Queue {
    constructor() {
      this.items = {};
      this.front = 0;
      this.rear = 0;
    }
  
    enqueue(element) {
      this.items[this.rear] = element;
      this.rear++;
    }
  
    dequeue() {
      const item = this.items[this.front];
      delete this.items[this.front];
      this.front++;
      return item;
    }
  
    peek() {
      return this.items[this.front];
    }
  
    size() {
      return this.rear - this.front;
    }
  
    isEmpty() {
      return this.rear - this.front === 0;
    }
  
    print() {
      console.log(this.items);
    }
  }
  
  const queue = new Queue();
  console.log(queue.isEmpty());
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  console.log(queue.size());
  queue.print();
  console.log(queue.dequeue());
  console.log(queue.peek());
  console.log(queue.isEmpty());
  queue.print();
  