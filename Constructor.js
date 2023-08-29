//WE can declare a constructor in 4 ways...

var Student = {
    name: "Raj",
    id: 123,
    skills: ["HTML", "JS", "SQL", "DBMS"],
    behaviour: () =>{
        console.log("Hi I will tell my behaviour");
    }
};

console.log(Student);
Student.behaviour();
console.log(Student.behaviour());

Student.gf = {
    name: "Rajini",
    id: 123
}

// console.log(Student);


//Updating the above constructor...

Student.skills = ["HTML", "JS", "SQL", "DBMS", "Hibernet", "Mongo dB"];
console.log(Student);

//Delete - to delete the property from Object
delete Student.skills; //delete keyword...
console.log(Student);

//Using constructor and class and new keyword and 

class Demo {
    constructor(id, name1){
        this.name1 = name1;
        this.id = id;
    }

    behaviour = (x) =>{
        // console.log("Hi my name is Shruti!!!");
        return x;
    }
}

//Creating an object of constructor
var s1 = new Demo("Kiran", 559); //passing the value from constructor...
console.log(s1);
Demo.behaviour(34);
// console.log(Demo.behaviour);