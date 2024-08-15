

class Trie {
    constructor() {
      this.children = {};
      this.isEndWord = false;
    }
  
    insert(word) {
      let curr = this;
      for (let char of word) {
        if (!curr.children[char]) {
          curr.children[char] = new Trie();
        }
        curr = curr.children[char];
      }
      curr.isEndWord = true;
    }
  
    search(word) {
      let curr = this;
      for (let char of word) {
        if (!curr.children[char]) {
          return false;
        }
        curr = curr.children[char];
      }
      return curr.isEndWord;
    }
  
    startsWith(prefix) {
      let curr = this;
      for (let char of prefix) {
        if (!curr.children[char]) {
          return false;
        }
        curr = curr.children[char];
      }
      return true;
    }
  }
  
  // Example usage:
  const trie = new Trie();
  trie.insert('apple');
  trie.insert('app');
  trie.insert('ape');
  console.log(trie.search('app')); // Output: true
  console.log(trie.search('apple')); // Output: true
  console.log(trie.search('ape')); // Output: true
  console.log(trie.search('apples')); // Output: false
  console.log(trie.startsWith('app')); // Output: true
  console.log(trie.startsWith('ap')); // Output: true
  console.log(trie.startsWith('bat')); // Output: false

  

//   insert(word):

// Starts at the root (this).
// Iterates over each character in the word.
// If the character is not a child of the current node, it creates a new node.
// Moves to the child node corresponding to the character.
// After processing all characters, marks the current node as the end of the word.
// search(word):

// Starts at the root (this).
// Iterates over each character in the word.
// If the character is not a child of the current node, it returns false.
// Moves to the child node corresponding to the character.
// After processing all characters, checks if the current node is marked as the end of the word.
// startsWith(prefix):

// Starts at the root (this).
// Iterates over each character in the prefix.
// If the character is not a child of the current node, it returns false.
// Moves to the child node corresponding to the character.
// If all characters are found, returns true.
// By ensuring that the methods reference the root correctly (this), the Trie class will now function as expected.