// factorial 

// function factorial (n) {
// let result = 1;
// for (let i=2;i<=n;i++){
//     result = result * i;
// }
// return result;
// }

// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(5));


// fibnocci series

// function fibnocci(n) {
//     let fib = [0,1];
//     for (i=2;i<n;i++){
//         fib[i]= fib[i-1] + fib[i-2];
//     }
//     return fib;
// }

// console.log(fibnocci(2));
// console.log(fibnocci(3));
// console.log(fibnocci(7));

// prime numberrrr
// function isPrime(n) {
//     if(n<2) {
//         return false;
//     }
//     for (let i=2;i<=Math.sqrt(n);i++){
//         if(n % i === 0){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(1));
// console.log(isPrime(5));
// console.log(isPrime(4));


// function isPowerOfTwoBetwise(n) {
//     if(n<1) {
//         return false;
//     }
//     return (n&(n-1)) === 0
// }

// function lenierSearch(arr,target) {
//     for(let i=0;i<arr.length;i++) {
//         if(arr[i]==target){
//             return i;
//         }
//     }
//     return -1
// };

// console.log(lenierSearch([-5,2,10,4,6],10));
// console.log(lenierSearch([-5,2,10,4,6],6));


// function bainarysearch(arr,target) {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;

//     while(leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) /2);

//         if(target === arr[middleIndex]) {
//             return middleIndex;
//         }
//         if(target < arr[middleIndex]) {
//             rightIndex = middleIndex -1;
//         } else {
//             leftIndex = middleIndex + 1;
//         }
//     }
//     return -1
// }

// console.log(bainarysearch([-5,2,4,6,10],6));

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkidList {
//     constructor() {
//         this.head = null,
//         this.size = 0;
//     }
//     isEmpty() {
//         return this.size
//     }

//     getSize() {
//         return this.size
//     }
// }

// const list = new LinkidList

// console.log('list is empty',list.isEmpty())
// console.log('list size', list.getSize())

// function bainarysearch(arr,target) {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;

//     while(leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) /2);

//         if(target === arr[middleIndex]) {
//             return middleIndex;
//         }
//         if(target < arr[middleIndex]) {
//             rightIndex = middleIndex -1;
//         } else {
//             leftIndex = middleIndex + 1;
//         }
//     }
//     return -1
// }

// console.log(bainarysearch([-5,2,4,6,10],6));

// function bainarysearch (arr,target) {
//     leftindex = 0;
//     rightIndex = arr.length - 1;

//     while(leftindex <= rightIndex) {
//         let middleIndex = Math.floor((leftindex+ rightIndex)/2);

//         if(target === arr[middleIndex]) {
//             return middleIndex;
//         }
//         if(target < arr[middleIndex]){
//             rightIndex = middleIndex -1;
//         }else {
//             leftindex = middleIndex + 1;
//         }
//     }
//     return -1
//     }
//     console.log(bainarysearch([-5,2,4,6,10],6))


// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     }
//     else {
//         return n * factorial(n - 1);
//     }
// }

// console.log(factorial(5));



function RecursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1);
};

function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[middleIndex]) {
        return middleIndex;
    }

    if (target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1);
    } else {
        return search(arr, target, middleIndex + 1, rightIndex);
    }
}
// Output: 2

console.log(RecursiveBinarySearch( )); 

