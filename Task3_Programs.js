/**Programms in JS
 * 1> Print 1 - 10 use for or while loop
 * 2> Print 1 - 10 odd Number
 * 3> Print 1 - 10 even Number 
 * 4> Print Tables
 * 5> Addition of two numbers using prompt() method**/

/**Ans 1>**/

// for(let i = 0 ; i <= 10 ; i++){
//     console.log(i);
// }


// var j = 0
// while ( j <= 10) {
//     console.log(j); //to print j
//     j++; //to increment the value
// }

// let k = 0;
// while (k <= 10) {
//     console.log(k);
//     k++;
// }

//the var and let will give output but const won't....

/**Ans 2> and 3> Print even and odd**/

// for(let i = 0 ; i <= 20 ; i++){
//     if(i % 2 == 0){
//         console.log("The no is even "+ " = "+ i);
//     }
//     else{
//         console.log("The no is odd " + " = " + i);
//     }
// }

// for(let k = 0 ; k <= 20 ; k++){
//     if(k % 2 !== 0){
//         console.log("The no is odd " + " = " + k);
//     }
// }

/**Ans 3> Print Tables**/
let number = 3;
for(let i = 0; i <= 10; i++){
    console.log(number * i);
}

//To print numbers and string we need backticks

var tables = Number(prompt('Enter a number '))