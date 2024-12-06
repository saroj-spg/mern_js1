// function abc(...x){
//     console.log(x);
//     console.log(x[5]);
// }
// abc(1,2,3,4,5,6,7,8,9,10,11,12,13,14);
//function that take a numbers of items.find total even numbers,sum of even numbers,greater than 3 item, sum of less than 4 numbers.
let sum=0;
let count=0;
const fun=(...x)=>{

for(let i=0;i<x.length;i++){
// if(x[i]%2==0){

//     count++;
//     sum+=x[i];

// }
// }
// console.log(count);
// console.log(sum);
// };
// fun(1,2,3,4,5,6,7,8,9,10,11,12,13)

// if(x[i]>3){
//     console.log(x[i]);
// }
// }

// }
// fun(1,2,3,4,5)
if(x[i]<4){
    sum+=x[i];


}
}
console.log(sum);
}
fun(1,2,3,4,5)