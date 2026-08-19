/********* COMPARISON OPERATORS **********
*
* comparison operators are used to compare two values
* comparison operators are used to determine the relationship between variables or values
*
* comparison operators are:
* == (equal to)
* === (strict equal to)
* != (not equal to)
* !== (strict not equal to)
* > (greater than)
* < (less than)
* >= (greater than or equal to)
* <= (less than or equal to)
*
*****************************************/

console.log(1 == "1")

/***************** == vs === ***************
*
* == operator compares two values for equality after converting them to the same type (if possible) (loose equality)
* === operator compares two values for equality without converting them to the same type and returns true only if they are of the same type (strict equality)
*
********************************************/

/************** COMPARISON VALUES **********
*
* comparison values are the the result of a comparison operator
* comparison values are either true or false
*
* comparison values are:
* true
* false
*
* and in javascript, comparison values could also be:
* thruthy
* falsy
*
* thruthy and falsy are values that are converted to true or false when evaluated in a boolean context
*
********************************************/

/************** TRUTHY AND FALSY VALUES *********
*
* THRUTHY VALUES
* true
* 1
* '0'
* 'false'
* {}
* []
* function() {}
*
* FALSEY VALUES
* false
* 0
* -0
* ''
* null
* undefined
* NaN
*
*************************************************/


// controllare se un numero è pari

let numero = 10;

if (numero % 2) {
    console.log(numero + " è pari.")
} else {
    console.log(numero + " è dispari")
}




