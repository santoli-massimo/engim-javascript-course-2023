/*****************************************
 *               == vs ===
 ******************************************/

// example 1
console.log("'1' == 1", 1 == "1");
console.log(1 == "1"); // true
console.log("'1' === 1", 1 === "1");
console.log(1 === "1"); // false

// example 2
console.log("'0' == false", 0 == false);
console.log(0 == false); // true
console.log("'0' === false", 0 === false);
console.log(0 === false); // false

// example 3
console.log("'' == false", "" == false);
console.log("" == false); // true
console.log("'' === false", "" === false);
console.log("" === false); // false

// example 4
console.log("null == undefined", null == undefined);
console.log(null == undefined); // true
console.log("null === undefined", null === undefined);
console.log(null === undefined); // false

// example 5
console.log("NaN == NaN", NaN == NaN);
console.log(NaN == NaN); // false
console.log("NaN === NaN", NaN === NaN);
console.log(NaN === NaN); // false

// example 6
console.log("0 == null", 0 == null);
console.log(0 == null); // false
console.log("0 === null", 0 === null);
console.log(0 === null); // false

// example 7
console.log("0 == undefined", 0 == undefined);
console.log(0 == undefined); // false
console.log("0 === undefined", 0 === undefined);
console.log(0 === undefined); // false

// example 8
console.log("0 == ''", 0 == "");
console.log(0 == ""); // true
console.log("0 === ''", 0 === "");
console.log(0 === ""); // false

// example 9
console.log("0 == '0'", 0 == "0");
console.log(0 == "0"); // true
console.log("0 === '0'", 0 === "0");
console.log(0 === "0"); // false

// example 10
console.log("false == 'false'", false == "false");
console.log(false == "false"); // false
console.log("false === 'false'", false === "false");
console.log(false === "false"); // false

// example 11
console.log("false == '0'", false == "0");
console.log(false == "0"); // true
console.log("false === '0'", false === "0");
console.log(false === "0"); // false

// example 12
console.log("false == undefined", false == undefined);
console.log(false == undefined); // false
console.log("false === undefined", false === undefined);
console.log(false === undefined); // false

// example 13
console.log("false == null", false == null);
console.log(false == null); // false
console.log("false === null", false === null);
console.log(false === null); // false

/*****************************************
 *               >, <, >=, <=
 ******************************************/

console.log("1 > 2", 1 > 2);
console.log(1 > 2); // false
console.log("1 < 2", 1 < 2);
console.log(1 < 2); // true
console.log("1 >= 2", 1 >= 2);
console.log(1 >= 2); // false
console.log("1 <= 2", 1 <= 2);
console.log(1 <= 2); // true
console.log("1 > 1", 1 > 1);
console.log(1 > 1); // false
console.log("1 < 1", 1 < 1);
console.log(1 < 1); // false
console.log("'a' > 'b'", "a" > "b");
console.log("a" > "b"); // false
console.log("'a' < 'b'", "a" < "b");
console.log("a" < "b"); // true
console.log("'a' >= 'b'", "a" >= "b");
console.log("a" >= "b"); // false
console.log("'a' <= 'b'", "a" <= "b");
console.log("a" <= "b"); // true
console.log("'a' > 'A'", "a" > "A");
console.log("a" > "A"); // true
console.log("'a' < 'A'", "a" < "A");
console.log("a" < "A"); // false
console.log("'pippo' > 'pluto'", "pippo" > "pluto")
console.log("pippo" > "pluto"); // false
console.log("'pippo' < 'pluto'", "pippo" < "pluto");
console.log("pippo" < "pluto"); // true
console.log("'pippo' >= 'pluto'", "pippo" >= "pluto");
console.log("pippo" >= "pluto"); // false
console.log("'pippo' <= 'pluto'", "pippo" <= "pluto");
console.log("pippo" <= "pluto"); // true
