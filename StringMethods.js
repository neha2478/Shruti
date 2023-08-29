/**Learning the String Functions**/
/**
 * toUpper()
 * toLower()
 * charAt()
 * charCodeAt()
 * Slice()
 * substring()
 * substr()
 * conact()
 * trim()
 * trimstartswith()
 * trimendswith()
 * replace()
 * split()
 * includes()
 * startswith()
 * endswith()
**/
/*
var name1 = "Preetham";

console.log(name1.length);

console.log(name1.toUpperCase());

console.log(name1.toLowerCase());

console.log(name1.charAt(name1[3]));

console.log(name1.indexOf("a"));

console.log(name1.indexOf("e"));

// console.log(name1.indexOf("e", 4));

console.log(name1.indexOf("e", 3));


var str = "   KUNAL SHRUTI MOHAN    ";

//We can use negative index...
//console.log(str.slice(7));
//console.log(str.slice(7,18));
//console.log(str.slice(-7,-1));

//substring()...
//substring() is similar to slice().
//We can't use negative indexing in the substring().....
//starting index to the next index of the index upto which she wanna put...
//console.log(str.substring(2));
console.log(str.substring(1,6)); 
console.log(str.substring(-1,-6)); 

//Using trim() ....it will remove the spaces...
//console.log(str.trim("")); //it will remove all the spaces... from starts and ends with...(Not between he words)
//console.log(str.trim());
//console.log(str.trimStart()); //Only starting spaces character
//console.log(str.trimEnd()); //Only ending spaces character

//console.log();
*/







/**For Practice...**/

var str = "Shruti Karmakar";
console.log(str.length);
//O/P - 15

console.log(str.toUpperCase());//Convertiong all into Uppercase
//O/p - SHRUTI KARMAKAR

console.log(str.toLowerCase());//Convertiong all into Lowercase
//O/p:- shruti karmakar

console.log(str.charAt(4)); //Gives character at particular index
//O/P:- t

console.log(str[4]); //gives character at 4 th index
//O/P:- t

console.log(str.charCodeAt(6));
//It will give the ASCI value of character at particular index here we are passing index value there

//Another example:-

// var name = "Kamala Hassan";
// for(let i = 0 ; i <= str.length - 1 ; i++){
//     console.log(str.charCodeAt(i)); //here it will return the ASCI value of each character .....as we are passing i
// }

console.log(str.indexOf("a")); //8 first a there in string
//We can fech particular index of the character if we pass character anf didex both as parameter
var str2 = "nayana"
console.log(str2.indexOf("a", 4)); //that 4th a in the string is 4 //O/p - 8
console.log(str2.indexOf("a", 2));//O/p - 3

//Slice - .slice(startingindex, last index) , -ve indexing is possible ..and -ve index starts from -1
//-ve index .slice(-6, -1)
var str3 = "sandeep Kumar"
console.log(str3.slice(4)); //eep Kumar
console.log(str3.slice(5,6)); //e
console.log(str3.slice(-6, -1));// Kuma


//Half index of - returns specified characters from Last
// substring(startingindex, last index)
//-ve index is considered as 0 
console.log(str.substring(3,7)); //uti
console.log(str.substring(-3,-1)); //didn't go O/p

//cocat()
var z = "Movi Name "
var x = "hum";
var y = "tum";
console.log(z.concat(x,y));
//Output:-
// Movi Name humtum

//Includes:- will check that the string have that thing or not
console.log(str.includes("kar")); //true

//startsWith() - must have starting char
console.log(str.startsWith("Shr")); //true
console.log(str.startsWith("uti")); //false
console.log(str.startsWith("Sh")); //true

//endsWith:-must have ending char
console.log(str.endsWith("ar")); //true

//replace - only replace that particular thing with that thing....
console.log(str.replace("t", "i")); 
//O/p:- Shruii Kzrmakar
console.log(str.replace("a", "z"));
// O/p:- Shruti Kzrmakar


//replaceAll - 
console.log(str.replaceAll("a","z"));
//O/p:- Shruti Kzrmzkzr

//Split:- split te string with array acc to the input we give
let string = "Sandeep Kumar"
console.log(string.split(""));
/**
 * Output:-
 * [
    'S', 'a', 'n', 'd',
    'e', 'e', 'p', ' ',
    'K', 'u', 'm', 'a',
    'r'
   ]
 */

console.log(string.split("deep"));
//Output
//  [ 'San', ' Kumar' ]
