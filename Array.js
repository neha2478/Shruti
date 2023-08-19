/**Arrays in JS....**/

// var arr = [10,20,30,40,50,60,80];
/*
for(var i = 0; i <= arr.length-1 ; i++){
    console.log(arr[i]); //will print the elemnts of arr
}
*/
/*
O/p:-
10
20
30
40
50
60
80
*/
// console.log(arr);  
/*
O/p:-
[
  10, 20, 30, 40,
  50, 60, 80
]
*/

// console.log(arr[i]); 
// Op:- undefined...

// var brr = [1, 2, [3, 4, 5, [6,7,[ 8, 9]]], 10];
// console.log(brr[2][3][2][1]); //here first brace 2 will take the nested array index...inside the bid array...
/*
Output:-
9
 */

// console.log(brr[2][3][2][0]);
/*
Output:-
8
*/

// console.log(brr);
/*
Output:-
[ 1, 2, [ 3, 4, 5, [ 6, 7, [Array] ] ], 10 ]
*/

// console.log(brr.flat()); //this will by default the value 1...and flat the first nesed array
/*
Output:-
[ 1, 2, 3, 4, 5, [ 6, 7, [ 8, 9 ] ], 10 ]
*/

// console.log(brr.flat(2));
/*
Output:-
[ 1, 2, 3, 4, 5, 6, 7, [ 8, 9 ], 10 ]
*/

// console.log(brr.flat(3));
/*
Output:-
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
*/

/**Inserting the values to an emty array...**/
/*
var arr2 = []

arr2[0] = 10;

arr2[1] = 20;

arr2[2] = 30;

arr2[3] = 40;

arr2[4] = 50;

arr2[5] = 60;

console.log(arr2);
*/

//Using for each Loop...
/*
arr2.forEach((element) =>{
  console.log(element);
});
*/

/**
 * It is in built higer order method 
 * which accepts another higer order Function as a pramereter
 
 * The povided call back function will be executed once for 
 * every elemnt of the array.

 * Note:- ForEach method doesn't supports the explicit return value.

 * The implicit  return value of the for each method is undefined....
 */

var arr = [12,34,56,78,90];


arr.forEach((x) => {
  if(x % 2 != 0){
    console.log(x); //here we have log the value of x....
  }
});

// console.log(arr); //This will happen when we log the arr


//Using function expression 
//Using return statement...
var ans = arr.forEach((x) => {
  if(x % 2 == 0)
  {
    return x;
  }
});

console.log(ans);


/** 
Map() :- It returns a new array 
      The + call back  function will be executed for each element.
      the callback functionreturns a value will be added to the b
**/

// arr.map((x) => {
//   console.log(x + 50);
// });

/*Output:-
62
84
106
128
140
*/

// var mans = arr.map((x) => {
//   return (x + 500);
// })

// console.log(mans);
/*Output:-
62
84
106
128
140
*/

/*
  Filter():- It is used to filter the array elements with respect to the given call back function..
            It returns a new Array , If the  call back function returns boolean value true.
            Than the particular array will be added to the new Array.`    
// */






/*Today's topic...*/

// var arr = [12,13,24,46,89,70];
// var fans=arr.filter((x)=>
// {
// return x>=18
// }
// )
// console.log(fans);
//    var mans=fans.map((x)=>{
//     if(x>60)
//     {
//       return 2000
//     }
//     else{
//       return 1000;
//     }
//    })
// console.log(mans);
// var ans = mans.reduce((iv,cv)=>{
// return iv+cv
// },12)
// console.log(ans);
// console.log(ans/mans.length);

//Another Way...
var arr = [24,46,89,12,13,70,9]; //Using Number
// var arr = ["pineapple","orange","strawberry","banana","apple"]; //Using String array...
console.log(arr.sort((x,y)=>{ return y-x})[0]);    //logic and passing the index value in sort()
console.log(arr.sort((x,y) => y-x)[arr.length-1]);  //logic and passing the index value in sort()


//Using the chaining Method...
// var fans=(arr.filter((x)=> x>=18).map((x)=>x>60 ?  1000: 2000).reduce((iv,cv)=> iv+cv))
// console.log(fans);



//fill() - What we will pass to the static array ...it will fill the array with that element 
//fill(value, start, end)....
//We want to use this ,when we want to use a static value...to fill in array.
var arr8 = [10,20,39,48,56];
var a = arr8.fill(56);
console.log(a);
/*
//fill(value, start, end)....

var b = arr8.fill(23,0,3);
console.log(b);

*/
var z = arr8.reverse();
console.log(z);

var str=["s","h","r","u","t","i"];
console.log(str.reduce((x,y) => {
  return x+y;
},"hi "));


var str=["s","h","r","u","t","i"];
/*
//reduceRight()
console.log(str.reduceRight((x,y) => {
  return x+y;
},"hi "));
*/
//Using some()
console.log(str.some((x) => {
  return str == "u";
}));
//some()
var age = [12,34,45,67,89]
console.log(age.some((x) => {
  return x >= 45;
}));
//every()
console.log(age.every((x) => {
  return x >= 45;
}));




//Under standing filter method()
// arr.filter((x) => {
//   console.log(x + 20);
// });
/*Output:-
32
33
44
66
109
90 
*/


// var fans = arr.filter((x) => {
//   return x % 2 == 0;
// })
// console.log(fans);

/*

[ 12, 24, 46, 70 ]

*/





//toReverse() - to
//toSplice() - will not affect the orignal array...
//toSorted() -to sort the array....
//with() - change that element with that particular value.

/**----------------------splice()---------------------- */
var arr = [12,13,14,15];
// arr.splice(2,0,34,56);
// console.log(arr);
arr.splice(2,1,41);
console.log(arr);
console.log(arr);

/*--------------------------------------toSpliced()----------------------------- */

// console.log(arr.toSpliced(2,0,35,36));
// arr.reverse();
// console.log(arr.toReversed());
// arr.sort();
// console.log(arr.wth(2,"hi"));
// console.log(arr);


var a1 = [12,23.45,56,78,90];
var x = 1;
for(let i = arr.length ;i <= arr.length+5; i++){
  var crr = [,2];
  var brr = Array.of(12);
  var arr = new Array(12);
  console.log(arr);
}
