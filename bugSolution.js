function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null or undefined cases
  }
  if (typeof x === 'string' || Array.isArray(x)) {
    return x.length; // Access length only for strings and arrays
  } else {
    return -1; // Or throw a more descriptive error
  }
}

console.log(foo([1, 2, 3])); // Output: 3
console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 0
console.log(foo(5)); // Output: -1
console.log(foo("hello")); //Output: 5