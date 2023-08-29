/**Number
 * 1> PDT 
 * 2> IN JS There are no Datatype both Float andInteger value**/

/**
 * Number Methods:- 
 * 1> Number Coonstructor:- Number() - Used to convert / tyecast into number
 * 
 * //There are methods of windoes object
 * 2> parseInt() :- returns only thr integer value
 * 3> paseFloat() :- returns no along with the Floationg value
 * 
 * 4> toString():- It will convert into string Datatype
 * 
 * 5> toFixed():- to fix the Floationg value of a no
 * 6> toprecision:- to fix the number length
 */

//Number()
var a = Number(true); //converting boolean to number
var b = Number("10"); //converting string to number
console.log(a);
console.log(b); 
/**
 * Output:-
 * 1
 * 10**/

//toString():-
var num = 23;
var num1 = 34;
console.log(typeof num);
console.log(num.toString());
console.log(num1.toString());
console.log(num.toString()+ num1.toString()); //here they will add as string 
//Output:-2334
console.log(23+45); //68


//toFixed():-
//here we can pass the no of floationg value we want...
// var c = 12.34567;
// console.log(c.toFixed(3));
//Output:-12.346
// console.log(c.toFixed()); 
//Output:-
//12 (Only integer value by default if we won't pass any value as parameter)

//toPrecisison:- tell the specified  length of the no
var z = 13.3714;
console.log(z.toPrecision(2));
//Output:- 13





//parseInt():- returns the integer value of the no 
// var num8 = 12.5678;
// console.log(parseInt(num8));

//paseFloat:- returns the floationg value along with integer too
// Converts a string to a floating-point number.
var num9 = 12.5678;
console.log(parseFloat(num9));

var num10 = 12;
console.log(parseFloat(num10));

var x = 12.67890;
console.log(parseInt(x));
console.log(parseFloat(x));