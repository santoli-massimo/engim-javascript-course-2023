/************** LOGICAL OPERATORS **********
* logical operators are used to combine two or more expressions
* logical operators are used to determine the logic between variables or values
* logical operators are && (and), || (or), ! (not)
*/

/***************** && operator  ************
* returns the first falsy value or the last value if all values are thruthy
*
* table of truth values for && operator
*
* true && true = true
* true && false = false
* false && true = false
* false && false = false
*
********************************************/

// example
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false


/***************** || operator  ************
* returns the first thruthy value or the last value if all values are falsy
*
* table of truth values for || operator
*
* true || true = true
* true || false = true
* false || true = true
* false || false = false
*
********************************************/

// example
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

/***************** ! operator  ************
* returns the opposite of the value
*
* table of truth values for ! operator
*
* !true = false
* !false = true
*
********************************************/

// example
console.log(!true); // false
console.log(!false); // true