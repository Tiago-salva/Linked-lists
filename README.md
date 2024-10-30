# Linked Lists Project

This project implements a **Linked List** data structure in JavaScript. It is part of "The Odin Project" curriculum, designed to help understand the logic and construction of linked lists through key functions for node manipulation.

## Features

- Basic linked list implementation with essential operations.
- Node creation with methods to add, remove, and search for elements.
- Conversion of the list to a string format for easy visualization of node structure.

## Functionality

### Main Methods

1. **`append(value)`** - Adds a node to the end of the list.
2. **`prepend(value)`** - Adds a node to the beginning of the list.
3. **`size()`** - Returns the total number of nodes in the list.
4. **`head()`** - Returns the first node in the list.
5. **`tail()`** - Returns the last node in the list.
6. **`atIndex(index)`** - Returns the node at the specified index.
7. **`pop()`** - Removes the last node from the list.
8. **`contains(value)`** - Checks if a value exists in the list and returns `true` if found, otherwise `false`.
9. **`find(value)`** - Returns the index of the node containing the specified value or `null` if not found.
10. **`toString()`** - Returns the list in a string format like `( value ) -> ( value ) -> null`.
11. **`insertAt(value, index)`** - Inserts a new node with a given value at the specified index.
12. **`removeAt(index)`** - Removes the node at the specified index.

## Getting Started

1. Clone the repository.
2. Run `node` in the terminal to start a Node.js environment.
3. Test each method by creating a linked list instance and calling methods on it.

Example:
```javascript
const list = new LinkedList();
list.append(5);
list.append(10);
console.log(list.toString()); // Output: ( 5 ) -> ( 10 ) -> null
