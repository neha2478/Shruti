/*
var num = 12;
var num2 = 13; 
var num3 = "14"; //here one is string so it will take all of that in string 
var z = num3+num2+num
console.log(num3+num2+num); //141312
console.log(typeof z); //string




console.log("12" - 13);//here it is performing operation
console.log("12" - 13 + 14 * 2); //27

//Named Function
function add(arr, mul){
    let brr = [];
    for(let i = 0; i < arr.length; i++){
        brr.push(mul(arr[i]))
    }
}

add([17,15,19,31], (x) => x * 10);
*/

var str = "Hi Hello Good Morning";

// console.log(str.slice(7,13)); //o Good

// console.log(str.slice(-11,-5)); //ood Mo

// console.log(str.substring(10,15)); //ood M

//The count of thr elements to be Fetch
// console.log(str.substr(5,3)); //llov

// var str2 = "Shruti Karmakar"

// console.log(str2.split(""));

//Output:-
/**
 * [
  'S', 'h', 'r', 'u',
  't', 'i', ' ', 'K',
  'a', 'r', 'm', 'a',
  'k', 'a', 'r'
]
 */
//Without using split method....

// var str2 = "Shruti Karmakar";
// var arr = [];
/*
for(let i = 0 ; i <= str2.length; i++){
    arr[i] = str2.charAt(i); //Using charAt() method it will take each character....
}

console.log(arr);
*/
/** Output:-
 * [
  'S', 'h', 'r', 'u', 't',
  'i', ' ', 'K', 'a', 'r',
  'm', 'a', 'k', 'a', 'r',
  ''
]
 * 
 */

var str = "Hi Hello Good Morning";

var arr1 = [];

for(let i = 0 ; i <= str.length; i++){
    arr1[i] = str.charAt(i); //Using charAt() method it will take each character....
}

console.log(arr1);

/**
 * [
  'H', 'i', ' ', 'H', 'e', 'l',
  'l', 'o', ' ', 'G', 'o', 'o',
  'd', ' ', 'M', 'o', 'r', 'n',
  'i', 'n', 'g', ''
]
*/

function Demo(x,d) {
    function test(z) {
        function foo(3) {
            console.log(3);           
        }
    }
}