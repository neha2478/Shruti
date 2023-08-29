/**Lexcal Scoping....**/

//Higher Order Function.....

/*function Hof(x){
    console.log("I am Shruti!!!");
    x(); //calling the parameter() as  function...
}

Hof(test); //calling the Higer order Function... passing the argument as test( it is call back function)

//Call back Function...
function test() {
    console.log("I am Shabana!!!");
}
*/


//Another Method...
function hof(num, x){
    console.log("I am Hof Function accepts another Function as a parameter!!!");
    var ans = x(num); //calling of function
    console.log(ans);
}

hof(21, even); // caling the function where we will pass the value 21 and function even as an argument...
hof(22, odd); // caling the function where we will pass the value 22 and function odd as an argument...

//Call back Function
function even(num){
    if(num % 2 == 0){
        return num * 2;
    }
    else{
        return num % 2;
    }
}


function odd(num) {
    if(num % 2 != 0){
        return num * 3;
    }  
    else{
        return num % 3;
    }  
}
