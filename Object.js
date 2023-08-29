/**Object In JavaScript**/
//Creating an Object using new Student
/**
 * 1> We have to create an function and after that we need to create an object....
 * One way of created an object...
 * var Std = {}  //Using a {} curly brackets...
 * var Stud = new Student() //Using a new Object.....
 */


var Std = new Student();

function Student() {
    console.log("I am Student!!");
}
Student();


// Std.name1 = "Naveen";
// Std.id = 100;
// Std.mail = "naveen@gmail.com";
// Std.behaviour = () => console.log("It's a Student");
// Std.Gender = "Female";
// Std.Skills = ["JS", "HTML", "CSS", "React"];
// console.log(Std.mail); //it will print the mail....
// Std.behaviour(); //it will print the behaviour.....



// Another way of creating object....
var std = new Student("Shruti", 4, "shr@gmail.com");
var std2 = new Student("Kiran", 4, "kiran@gmail.com");
var std3 = new Student("Karan", 7, "karan@gmail.com");
console.log(std2);
console.log(std3);
std3.phoneno = 12345678;
console.log(std3.phoneno);

// std2.behaviour();
// std3.behaviour();
// std.behaviour();






/**
 * Using Curly Braces..we will create...an Object...
 */
var Card = {
    name : "Shruti",
    age : 23,
    emailid : "shruti.karmakar18@gmail.com",
    phoneno : 9679069384
}

var Card1 = {
    name : "Neha",
    age : 24,
    emailid : "karmakarneha036@gmail.com",
    phoneno : 9679069384
}

//Output of 1st Object....
console.log(Card);
console.log(Card.age);
console.log(Card.phoneno);
console.log(Card.emailid);
console.log(Card.name, Card.emailid); //Here we tried to pass two types of Data....we tried to log it....


//Output of 2nd ....
console.log(Card1);
console.log(Card1.age);
console.log(Card1.phoneno);
console.log(Card1.emailid);
console.log(Card1.name, Card1.emailid);

// now adding it externally
Card.SchoolName = "K.V.Panagarh";
console.log(Card);
console.log(Card.SchoolName);


Card1.SchoolName = "K.V.CMM";
Card1.State = "Madhya Pradesh(MP)";
console.log(Card1);