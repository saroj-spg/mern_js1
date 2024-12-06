

// let day = "Saturday"; 

// if (day === "Saturday" || day === "Sunday") {
//     console.log(day + " is a weekend.");
// } else {
//     console.log(day + " not weekend.");
// }

let date=new Date();
let day=date.getDay();
if(day=="saturday"||day=="sunday"){
    console.log(day + " is a weekend.");

}
else{
    console.log("not weekend", day);
}