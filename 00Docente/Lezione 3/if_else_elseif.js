/*******************************************
 *                 IF - ELSE
 *
 *  if (condition) {
 *      // code to be executed if condition is true
 *  } else {
 *      // code to be executed if condition is false
 *  }
 *
 ********************************************/

// example 1
if (true) {
  console.log("true");
}

// example 2
let a = 1;
if (a > 0) {
  console.log("a is greater than 0");
} else {
  console.log("a is less than 0");
}

// example 3
let b = 0;
if (b > 0) {
  console.log("b is greater than 0");
} else {
  console.log("b is less than 0");
}

/********************************************
 *            IF - ELSE IF - ELSE
 *
 *  if (condition1) {
 *      // code to be executed if condition1 is true
 *  } else if (condition2) {
 *      // code to be executed if condition1 is false and condition2 is true
 *  } else {
 *      // code to be executed if condition1 and condition2 are false
 *  }
 *
 ********************************************/

// example 4
let c = 0;
if (c > 0) {
  console.log("c is greater than 0");
} else if (c < 0) {
  console.log("c is less than 0");
} else {
  console.log("c is equal to 0");
}

// example 5
let d = 5;
if ((d = 0)) {
  console.log("d is equal to 0");
} else if ((d = 1)) {
  console.log("d is equal to 1");
} else if ((d = 2)) {
  console.log("d is equal to 2");
} else if ((d = 3)) {
  console.log("d is equal to 3");
} else if ((d = 4)) {
  console.log("d is equal to 4");
} else if ((d = 5)) {
  console.log("d is equal to 5");
} else {
  console.log("d is greater than 5");
}

/********************************************
 *  MIXED COMPARISON OPERATORS
 *********************************************/

// example 6
let e = 5;

if (e > 0 && e < 10) {
  console.log("e is greater than 0 and less than 10");
} else {
  console.log("e is less than 0 or greater than 10");
}