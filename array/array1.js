// let arr=[1,2,3,4,5];
// let sum=0;
// for(let i=0;i<arr.length;i++){
    
// console.log(arr[i]);
// console.log(arr.length);
// console.log(arr[2]);
// sum=sum+arr[i];
// }
// console.log(sum);
// for(let i=arr.length-1;i>=0;i--){//reversed array
//     console.log(arr[i]);

//     arr.push(100);
//     console.log(arr);
//     arr.pop();remove last
//     console.log(arr);
//     arr.shift(); remove from first
//     console.log(arr);
//     // arr.shift(13);
//     console.log(arr);
//     arr.slice(0,3);
//     console.log(arr);
//     let arr1=[20,30,45,56,25,53,67];
//     let res=arr.concat(arr1);
//     console.log(res);
// console.log(arr1.toString());
//  let arr2=console.log(arr1.slice(1,3));//split
//  console.log(arr2);
// console.log(arr1.splice(1,2,101));//start,count,new item;

//     console.log(arr1);


// 1.function that filters out even numbers from an array
// function filtereven(arr){
//     return arr.filter(number=>number%2==0);
// }
// const nums=[1,2,3,4,5,6,7,8,9,10,11,12];
// const even=filtereven(nums);
// console.log(even);
    
// //2.filter an array to include only odd oddNumbers.
    
// function filterodd(arr){
//     return arr.filter(num=>num%2!==0);
// }

// const numbers=[1,2,3,4,5,6,7,8,9,10,11,12];
// const odd=filterodd(numbers);
// console.log(odd);


    

// //3. given an array of strings, filter out strings that have more than 3 characters.
// function filterstring(arr){
//     return arr.filter(str=>str.length>3);
// }
// const strings=["Ram","Shyam","hari","Gita", "sita","OM"];
// const result=filterstring(strings);
// console.log(result);


// //4. function that filters out negative numbers from an array.
// function filterneg(arr){
//     return arr.filter(num=>num<0);
// }
// const nums=[10,-2,-3,5,6,-9,40,42,67,45,-10,-18];
// const negativenums=filterneg(nums);
// console.log(negativenums);
//5.given an array of boolean values,filter out the true values.
// function filtertrue(arr){
//     return arr.filter(bol=>bol==true);
// }
// const bolarr=[true,false,false,true,false,true];
// const trueres=filtertrue(bolarr);
// console.log(trueres);
// 6. filter an array of strings to include only those that contain the letter 'a'.
// function filterstring(arr){
//     return arr.filter(str=>str.includes('a'));
// }
// const str=["saroj","sunil","Raj", "himal","sagar","shiva","pramod","kamal"];
// const res=filterstring(str);
// console.log(res);
//7.filter an array of numbers to return only those greater than 5.
// function filtergreaterthan5(arr){
//     return arr.filter(num=>num>5);
// }
// const num=[10,34,23,1,2,3,4,4,56,0];
// const res=filtergreaterthan5(num);
// console.log(res);
//8. function to filter out empty strings from an array.

// function filteremptystr(arr){
//     return arr.filter(str=>str==" ");
// }
// const str=["abc"," ","cde"," ","efg","hij"];
// const res=filteremptystr(str);
// console.log(res);
//9.function to map an array of numbers to an array where number is doubled.
// // function filterdouble(arr){
//     return arr.map(num=>num*2);
// }
// const arr=[1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22];
// const res=filterdouble(arr);
// console.log(res);
//10.convert an array of numbers into an array of strings using map.
// function maptostring(arr){
//     return arr.map(num=>num.toString());
// }
// const nums=[10,12,13,14,15,16,17,18,19,20,21];
// const res=maptostring(nums);
// console.log(res);
// //11. function that converts an array of strings to uppercase using map.
// function mapupper(arr){
// return arr.map(str=>str.toUpperCase());
// }
// const str=["saroj","sunil","upen","dhiraj","bipin"];
// const res=mapupper(str);
// console.log(res);
//12. Given an array of numbers, map it to  an array of "true"(if the number is positive) of false(if the number is negative').
// function  positivity(arr){
//     return arr.map(num=>num>0);
    
// }
// const nums=[1,-2,2,-3,6,9,-5];
// const res=positivity(nums);
// console.log(res);
//13. function that adds a to each number in an array using map.
// function mapplusone(arr){
//     return arr.map(num=>num+1);
// }
// const nums=[10,20,30,40,50];
// const res=mapplusone(nums);
// console.log(res);\
//14. function  to return an array of first letter of each string using map.
// function mapfirstchar(arr){
//     return arr.map(char=>char.charAt(0));
// }
// const strings=["saroj","upen","Bipin","Roshan","Kalpana","prakriti"];
// const res=mapfirstchar(strings);
// console.log(res);
//15. convert an array of string to an array of their length using map
// function maptolen(arr){
//     return arr.map(str=>str.length);
// }
// const strings=["saroj","upen","Bipin","Roshan"];
// const res=maptolen(strings);
// console.log(res);
      
//16.a function that squares each number in an array using map.
// function numsquare(arr){
//             return arr.map(num=>num*num);
// }
// const nums=[12,13,14,15,16,17,18];
// const res=numsquare(nums);
// console.log(res);
//17.foreach to log each element of an array to the console.
// function logArray(arr){
//     arr.forEach(element => {
//         console.log(element);
//     });
// }
// const game=['football','cricket','volleyball','basketball'];
// logArray(game);
//18.function that uses `forEach` to calculate the sum of an array of numbers.
// function calculateSum(numbers) {
//     let sum = 0;
//     numbers.forEach(number => {
//       sum += number;
//     });
//     return sum;
//   }
  
//   const nums = [1, 2, 3, 4, 5];
//   const total = calculateSum(nums);
//   console.log(total); 
  
//19.Use `forEach` to multiply each number in an array by 2 and log the results.
// function mulnumby2(arr){
//     arr.forEach(num=>  {
      
//         console.log(num*2);
//     });
// }
// const nums=[12,19,13,34,23];
// mulnumby2(nums);
//20.. Use `forEach` to log each string in an array in uppercase
// function upper(arr){
//     arr.forEach(str=>{
//         console.log(str.toUpperCase());
//     });
// }
// const strings=['saroj','sunil','upen','bipin','dhiraj'];
// upper(strings);
//21.`forEach` to add an exclamation mark to each string in an array and log the new strings.
//   function addexclamationMark(arr){
//     arr.forEach(str=>{

//     console.log(str+"!");
// });
//   }
// const strings=['saroj','sunil','upen','bipin'];

// addexclamationMark(strings);
//22.`forEach` to log the index and value of each element in an array.
// function logIndexAndValue(array) {
//     array.forEach((value, index) => {
//       console.log(`Index: ${index}, Value: ${value}`);
//     });
//   }
//   const items = ['Apple', 'Banana', 'Cherry'];
//   logIndexAndValue(items);
//23.Use `forEach` to log only the odd numbers from an array.
// function logodd(arr){
//     arr.forEach(element => {
//         if(element%2!==0){
//         console.log(element);
//         }
//     });

// }
// const nums=[1,2,3,4,5,6,7,8,9];
// logodd(nums);
  
//24.function that uses `forEach` to log numbers greater than 10 from an array
//   function loggreaterthan10(arr){
    
//     arr.forEach(element => {
//         if(element>10){
//         console.log(element);
//         }
//     });
// }
  
//   const nums=[1,34,21,42,2,32,7,8,9];
//   loggreaterthan10(nums);
//25.forEach to concatenate all strings in an array into a single string and log it.
// function concatallstr(arr){
//     let conctstr="";
//     arr.forEach(str => {
//         conctstr+=str;
//         console.log(conctstr);
//     });
// } 
// const strings=["saroj","Prasad","Gautam"];
// concatallstr(strings);


// function mulby5(arr){
// arr.forEach(num=>{
//     console.log(num*5);
// }
// );
// }
// const nums=[12,23,45,80];
// mulby5(nums);
// const nums=[1,2,3,4,5,6,7];

//     let sum=0;
//     nums.forEach((nums)=>{
//         if(nums%2==0){
//             sum=sum+nums;
        
//         }
       
//     }
//     )
//     console.log(sum);
// let arr=[1,2,3,4,5,6,7];
// let arrfilter=arr.filter(items=>{
//     return items%2==0;
// });
// console.log(arrfilter);
// const sum=(a,b)=>{
//     console.log(a+b);
// }
// sum(3,5);
// let sum =(a,b)=>a+b;
// let x=sum(5,6);
// console.log(x);
// let sum=()=>{
//     console.log("sum");
// }
// function xyz(a){
//     console.log("xyz");
//     a(); 
// }
// xyz(sum);
//write a function that will take the function that will calculate the sum of two numbers.

// let sumNum=(a,b)=>{
//      console.log(a+b);
// }

// function sumcal(sum){
// console.log("sumCal");

//     sum(2,4);
// }
// sumcal(sumNum);
