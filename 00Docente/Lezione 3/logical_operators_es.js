/********************************************
*               && OPERATOR                   
*********************************************/


console.log(true && true && true); // true
console.log(true && true && false); // false
console.log("pippo" && "pluto" && "paperino"); // paperino
console.log("pippo" && true) // true
console.log([] && {} && 1); // 1
console.log(false && 1 && "pippo"); // false
console.log(0 && 1 && "pippo"); // 0

/********************************************
*               || OPERATOR
*********************************************/

console.log(true || true || true); // true
console.log(false || true || false); // true
console.log("pippo" || "pluto" || "paperino"); // pippo
console.log("pippo" || true) // pippo
console.log(true || "pippo"); // true
console.log(!!"pippo"); // true

/********************************************
*               ! MIXED OPERATOR
*********************************************/

console.log(!(true && true && true)); // false
console.log(!(true && true || false)); // false
console.log(!("pippo" && "pluto" && "paperino")); // false
console.log(!("0" && false)); // true
console.log(!("0" && true)); // false
console.log(!(0 || false)); // true
console.log(!(0 || true)); // false

