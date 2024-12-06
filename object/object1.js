// let obj={
//     name:"saroj",
//     age:24,
//     phone:9810101010,
// }
//console.log(obj);
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.phone);
// obj.address="ktm"
// console.log(obj);
// obj.age=25;
// console.log(obj);
// obj.name="saurav"
// obj.phone=9824213442;
// console.log(obj);
// delete obj.address;
// console.log(obj);
// obj.address=" "
// console.log(obj);
// const obj = {
//     name: "xyz"
// add:()=> {
//         console.log("hello");
//     }
// }
// obj.add();
// const obj={
//     name:"xyz",
//     phone:{
//         phone1:9801010101,
//         phone2:9842342433
//     }
// }
// console.log(obj.phone.phone2);
// const obj={
//     num:{
//         num1:[1,2,3,4,5],
//         num2:[{
//             name:"xyz"}

//         ]
//         }

//     }
// // 
//   let sum=0;
//   obj.num.num1.forEach(item=>{
//     sum+=item;
//   }
// )

//     console.log(sum);
  
 
//     //   console.log(obj.num.num2[0].name);
    //to list all the activities of Fluffy's catFriends and total weight of catFriends.
    var cat = {
        name: "Fluffy",
        activities: ['play', 'eat cat food'],
        catFriends: [
            {
                name: 'bar',
                activities: ['be grumpy', 'eat bread omelet'],
                weight: 8,
                furcolor: 'white'
            },
            {
                name: 'foo',
                activities: ['sleep', 'pre-sleep naps'],
                weight: 3
            }
        ]
    };
    let totalweight=0;
    let allActivities=[];
    cat.catFriends.forEach(friend=>{
        allActivities=friend.activities
    
        totalweight+=friend.weight;
    })
    console.log(allActivities);
    console.log(totalweight);