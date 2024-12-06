// let time = 10; 

// if (time < 12) {
//     console.log("Morning");
// } else {
//     console.log("Afternoon");
// }


let today=new Date();
let hrs=today.getHours();
if(hrs<12){
    console.log("morning");

}
else{
    console.log("evening");
    console.log(hrs);
}
