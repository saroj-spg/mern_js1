// // function sum(a,b){
// //     let c=a+b;
// //     return c;
    
   
// // }
// // let res=sum(1,2);
// // console.log(res);
// //for loop to print from 1 to 10;
// // function num_print(){
// //     for(let i=1;i<10;i++){
// //         console.log(i);
// //     }
// // }
// // num_print();
// // //to calculate and return the sum the first n natural numbers.

// // function sum(n){
// //     let sum=0;
// //     for(let i=1;i<=n;i++){
// //     sum+=i;
  

// // }
// // return sum;
// // }
// // let res=sum(30);
// // console.log(res);
// //to print all even numbers between 1 and 20
// // function even_print() {
// //     for (let i = 1; i <= 20; i++) {
// //         if (i % 2 == 0) {
// //             console.log(i);  
// //     }
// // }
// // }
// // even_print();
// // //print for odd numbers from 1 to 20
// // function odd_print(){
// //     for(let i=1;i<=20;i++){
// //         if(i%2!==0){
// //         console.log(i);
// //     }
// // }
// // }
// // odd_print();

// // function factorial(n) {
// //     if (n < 0) {
// //         return "Factorial is not defined for negative numbers.";
// //     }
// //     let result = 1;
// //     for (let i = 1; i <= n; i++) {
// //         result *= i;
// //     }
// //     return result;
// // }


// // const num = 5;
// // console.log(`Factorial of ${num} is: ${factorial(num)}`); // 
// // function mTableOfFive() {
// //     for (let i = 1; i <= 10; i++) {
// //         console.log(`5 x ${i} = ${5 * i}`);
// //     }
// // }
// // mTableOfFive();
// // function printReverseOrder() {
// //     for (let i = 10; i >= 1; i--) {
// //         console.log(i);
// //     }
// // }
// // printReverseOrder();

// // function printMultiplesOfThree() {
// //     for (let i = 1; i <= 30; i++) {
// //         if (i % 3 === 0) {
// //             console.log(i);
// //         }
// //     }
// // }
// // printMultiplesOfThree();
// // function sumOfEvens() {
// //     let sum = 0;
// //     for (let i = 1; i <= 50; i++) {
// //         if (i % 2 === 0) {
// //             sum += i;
// //         }
// //     }
// //     return sum;
// // }

// // const result = sumOfEvens();
// // console.log(`The sum of all even numbers between 1 and 50 is: ${result}`);

// // function sumOfOdds() {
// //     let sum = 0;
// //     for (let i = 1; i <= 50; i++) {
// //         if (i % 2 !== 0) {
// //             sum += i;
// //         }
// //     }
// //     return sum;
// // }

// // const result = sumOfOdds();
// // console.log(`The sum of all odd numbers between 1 and 50 is: ${result}`);
// // 11. Print all numbers between 1 and 100 divisible by 5
// function printDivisibleBy5() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 5 === 0) {
//             console.log(i);
//         }
//     }
// }

// // 12. Print the first 10 numbers in the Fibonacci sequence
// function printFibonacci() {
//     let a = 0, b = 1;
//     for (let i = 0; i < 10; i++) {
//         console.log(a);
//         let next = a + b;
//         a = b;
//         b = next;
//     }
// }

// // 13. Count and return the number of digits in a given positive integer
// function countDigits(n) {
//     let count = 0;
//     for (let digit of n.toString()) {
//         count++;
//     }
//     return count;
// }

// // 14. Print the square of each number from 1 to 10
// function printSquares() {
//     for (let i = 1; i <= 10; i++) {
//         console.log(i ** 2);
//     }
// }

// // 15. Calculate and return the sum of the squares of the first `n` natural numbers
// function sumOfSquares(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i ** 2;
//     }
//     return sum;
// }

// // 16. Print the cube of each number from 1 to 10
// function printCubes() {
//     for (let i = 1; i <= 10; i++) {
//         console.log(i ** 3);
//     }
// }

// // 17. Find and return the smallest number greater than 0 that is divisible by both 3 and 4
// function smallestDivisibleBy3And4() {
//     for (let i = 1; ; i++) {
//         if (i % 3 === 0 && i % 4 === 0) {
//             return i;
//         }
//     }
// }

// // 18. Print the first 10 even numbers
// function printFirst10EvenNumbers() {
//     for (let i = 1; i <= 10; i++) {
//         console.log(i * 2);
//     }
// }

// // 19. Print all numbers from 1 to 100 that are divisible by both 2 and 5
// function printDivisibleBy2And5() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 2 === 0 && i % 5 === 0) {
//             console.log(i);
//         }
//     }
// }

// // 20. Calculate and return the sum of all multiples of 3 or 5 below 100
// function sumOfMultiplesOf3Or5() {
//     let sum = 0;
//     for (let i = 1; i < 100; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }
