/**Practice For Mock....**/

//Function.....
/***
 * 1> Named Function
 * 2> Anonymous Function
 * 3> First Class Function
 * 4> Hof
 * 5> Call back Function...
 * 6> Arrow Function 
 * 7> Generator
 * 8> return
 * 9> Function Expression
 */

//Named Function
/*
function add(x,y) {
    console.log(x+y);
}
add(3,4);
*/
/*
function test(){
    var a = 10;
    var b = 12;
    console.log(a+b);
    console.log("I love India...");
}
test();
console.log(test());
*/

function a(x,y){
    return x+y; //using return type...
}
console.log(a(3,5));

function b(x,y){
    return x+y;
}
console.log(b(8,7,45));
//By default it will take the first two parameters...

//Anynomous Function:-
/*
var test = function(){
    return 10;
}

var foo = function(){
    return 11;
}

console.log(test());
console.log(foo());
console.log(test() + foo());
*/

//Function Expression:-
var fun = function(){
    console.log("My Nmae is Shruti...");
    console.log("I have a Diary!!");
    return 23; //Here it will stop execution....
}
console.log(fun());


//Nested Function
/*
var a = "hello";

function gp(){
    var Gproperty="100 acers";
    var ajji = "saroja";
    console.log(ajji);
    console.log(Gproperty);

    function P(){
        var Pproperty ="50 acers";
        console.log(Pproperty);

        function child() {
            var Cproperty = "10 acers";
            console.log("--------");
            console.log(a);
        }
        return child;
    }
    return P;
}   
gp()()();
*/

var a = 23;
function gp(){
    var gProperty ="200 acers";
    var dadu = "Bhagadhar";

    function P(){
        var Pproperty = "100 acers";
        console.log(Pproperty);

        function child(){
            var cProperty = "10 acers";
            console.log("----------");
        }
        return child;
    }
    return P;
}
gp()()();

var b = 34;
function demo(x,d){
    var a = x;
    var b =  c;
}