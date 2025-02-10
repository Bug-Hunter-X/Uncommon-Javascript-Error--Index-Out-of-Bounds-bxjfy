# Uncommon Javascript Error: Index Out of Bounds

This repository demonstrates a common yet easily overlooked error in JavaScript: accessing an array element with an index that's outside the array's valid range (index out of bounds). The `getArray` function attempts to handle this with an error, but the calling code needs to be more carefully written to avoid the error in the first place.

## Bug Description

The `bug.js` file contains a function `getArray` designed to retrieve an element from an array based on its index.  However, the calling code attempts to access an index (6) greater than the array's maximum valid index (4).

## Solution

The `bugSolution.js` file corrects this by improving the input validation before calling `getArray`, ensuring that the index is always within the bounds of the array. This prevents the error from occurring, leading to more robust code.

## How to Run

1. Clone the repository.
2. Run `node bug.js` to observe the error.
3. Run `node bugSolution.js` to see the corrected version.