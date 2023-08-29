/**Learning Function Concepts...in Js**/

/***
 * Syntax:-
 * 
 * function declaration:- function
 * test- function_name 
 * () - for parameters
 * {} //Function body
 * test() - function calling
 * 
 * eg:-
 *  function test(){
 *  var a = 10;
 *  var b = 12;
 *  console.log(a + b);
 *   console.log("I am a test Function");
 * }
 */

//Task:- Named Function
//add() , mul() , div() , sub()


/* Example
function add(){
    var a = 12;
    var b = 13;
    console.log(a + b);
}

add(); //Function Calling 
*/


function add(a,b){
    console.log(a+b);
    console.log("Test function");
}
add(2,3);
console.log(add);
console.log(add(3,4));

//Output
// 5
// [Function: add]
// 7

//Add Function - Named Function
function add(a,b) {
    console.log(a+b);
}
add(3,4)


function mul(a,b) {
    console.log(a*b);
}
mul(3,4)

function div(a,b) {
    console.log(a/b);
}
div(3,4)

function sub(a,b) {
    console.log(a-b);
}
sub(3,4)