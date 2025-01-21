# JavaScript Unhandled TypeError when accessing 'length' property

This repository demonstrates a common JavaScript error: attempting to access the `length` property of a value that is not an array or string.  The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version.

## Bug Description
The function `foo` attempts to access the `length` property of the input `x`. This works correctly if `x` is an array or string, but throws a `TypeError` if `x` is `undefined`, `null`, or a number. 

## Solution
The corrected code includes comprehensive type checking to handle various input types. The solution demonstrates best practices for robust error handling in JavaScript. 