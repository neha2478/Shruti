/**
 * Learning Symbol Primitive Datatype....
 * 
**/

var a = Symbol(12);
console.log(a);
//The output will be Symbol(12)

var b = Symbol(12);
console.log(typeof b);
//Output:- symbol

/**First example**/
var a = true;
var b = "true";
console.log(a == b); //it will check only value "=="
console.log(a === b); //it will check values and datatype both "==="
console.log(typeof a);
console.log(typeof b);

/**Second example**/
var a = 12;
var b = "12";
console.log(a == b);
console.log(a === b);
console.log(typeof b);
console.log(typeof a);

console.log("true" == 1); //the true is string so if we compare both values we will get false
console.log(true == 1); //the boolean value of true is 1 and 1 both values are equal