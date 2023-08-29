/**Nested Function**/


// var a = "hello";

// function gp(){
//     var Gproperty="100 acers";
//     var ajji = "saroja";
//     console.log(ajji);
//     console.log(Gproperty);

//     function P(){
//         var Pproperty ="50 acers";
//         console.log(Pproperty);

//         function child() {
//             var Cproperty = "10 acers";
//             console.log("--------");
//             console.log(a);
//         }
//         child();
//     }
//     P();
// }   
// gp();


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
gp()()(); //calling the Function...one by one ()()()for the calling of 3 nested Functions...