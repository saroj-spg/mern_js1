// // // let name="hello";

// // // for(let i=name.length-1;i>=0;i--){
// // //     console.log(name[i]);
   
// // // }


// // // let firstName="saroj"
// // // let lastName = "Gautam";
// // // // let fullname=firstName+" "+lastName;
// // // // console.log(fullname);
// // // let fullname = firstName.concat(lastName);
// // // console.log(fullname);
// // //template literal
// // // let x=5;
// // // let message=`sum is ${x}`
// // // console.log(message);
// // // console.log(message.length);
// // str="i love nepal";
// // str1="SPG"
// // console.log(str.toUpperCase());
// // console.log(str1.toLowerCase());
// // console.log(str.trim());//white space remove
// // console.log(str1.replace("SPG","saurav"));
// // console.log(str.slice(0,7));//specific parts separation
// // console.log(str1.charAt(2));
// // console.log(str.startWith("i"));
// // console.log(str.endWith("l"));
// // 1. Count how many times the letter 'e' appears in the string "Hello EveryOne".
// function countE(str) {
//     let count = 0;
//     for (let char of str.toLowerCase()) {
//         if (char === 'e') count++;
//     }
//     return count;
// }
// console.log(countE("Hello EveryOne"));

// // 2. Check if a string starts with 'H' and ends with 'e'.
// function startsWithHEndsWithE(str) {
//     if (str.startsWith('H') && str.endsWith('e')) {
//         console.log("True");
//     } else {
//         console.log("False");
//     }
// }
// startsWithHEndsWithE("Hello EveryOne");

// // 3. Print only the uppercase letters in a string.
// function printUppercase(str) {
//     for (let char of str) {
//         if (char === char.toUpperCase() && isNaN(char)) {
//             console.log(char);
//         }
//     }
// }
// printUppercase("Hello EveryOne");

// // 4. Replace every occurrence of "Hello" with "Hi".
// function replaceHelloWithHi(str) {
//     let result = str.replace(/Hello/g, "Hi");
//     console.log(result);
// }
// replaceHelloWithHi("Hello EveryOne, Hello World");

// // 5. Count the number of vowels (a, e, i, o, u).
// function countVowels(str) {
//     let count = 0;
//     const vowels = "aeiou";
//     for (let char of str.toLowerCase()) {
//         if (vowels.includes(char)) count++;
//     }
//     return count;
// }
// console.log(countVowels("Hello EveryOne"));

// // 6. Concatenate the first letter of each word to form a new string.
// function firstLetters(str) {
//     let words = str.split(" ");
//     let result = "";
//     for (let word of words) {
//         result += word.charAt(0);
//     }
//     return result;
// }
// console.log(firstLetters("Hello EveryOne"));

// // 7. Check if a string is a palindrome.
// function isPalindrome(str) {
//     let trimmed = str.toLowerCase().replace(/[^a-z]/g, '');
//     if (trimmed === [...trimmed].reverse().join("")) {
//         console.log("Palindrome");
//     } else {
//         console.log("Not a Palindrome");
//     }
// }
// isPalindrome("Madam");

// // 8. Trim extra spaces and check if the string is empty.
// function trimAndCheckEmpty(str) {
//     let trimmed = str.trim();
//     if (trimmed === "") {
//         console.log("String is empty");
//     } else {
//         console.log("String is not empty");
//     }
// }
// trimAndCheckEmpty("   ");

// // 9. Convert letters to opposite cases.
// function toggleCase(str) {
//     let result = "";
//     for (let char of str) {
//         result += char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
//     }
//     return result;
// }
// console.log(toggleCase("Hello EveryOne"));

// // 10. Slice the first 5 characters and check if it's "Hello".
// function checkFirst5Chars(str) {
//     if (str.slice(0, 5) === "Hello") {
//         console.log("True");
//     } else {
//         console.log("False");
//     }
// }
// checkFirst5Chars("Hello EveryOne");

// // 11. Replace every vowel with an asterisk (*).
// function replaceVowelsWithAsterisk(str) {
//     return str.replace(/[aeiou]/gi, '*');
// }
// console.log(replaceVowelsWithAsterisk("Hello EveryOne"));

// // 12. Check if a string contains "Hello" and replace it with "Hi".
// function replaceHelloIfFound(str) {
//     if (str.includes("Hello")) {
//         return str.replace("Hello", "Hi");
//     } else {
//         return str;
//     }
// }
// console.log(replaceHelloIfFound("Hello EveryOne"));

// // 13. Count the number of spaces in a string.
// function countSpaces(str) {
//     let count = 0;
//     for (let char of str) {
//         if (char === ' ') count++;
//     }
//     return count;
// }
// console.log(countSpaces("Hello EveryOne"));

// // 14. Check if the length of a string is greater than 10.
// function checkStringLength(str) {
//     if (str.length > 10) {
//         console.log(str.toUpperCase());
//     } else {
//         console.log(str.toLowerCase());
//     }
// }
// checkStringLength("Hello EveryOne");

// // 15. Print the index of each letter 'o'.
// function indexOfO(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === 'o') {
//             console.log(i);
//         }
//     }
// }
// indexOfO("Hello EveryOne");

// // 16. Trim a string and check if its length is even or odd.
// function checkLengthEvenOdd(str) {
//     let trimmed = str.trim();
//     if (trimmed.length % 2 === 0) {
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// }
// checkLengthEvenOdd("   Hello   ");

// // 17. Check if the first and last characters are the same.
// function checkFirstLastSame(str) {
//     if (str.charAt(0) === str.charAt(str.length - 1)) {
//         console.log("Same");
//     } else {
//         console.log("Different");
//     }
// }
// checkFirstLastSame("abcba");

// // 18. Replace the first 3 characters with "ABC".
// function replaceFirst3Chars(str) {
//     if (str.length >= 3) {
//         return "ABC" + str.slice(3);
//     }
//     return str;
// }
// console.log(replaceFirst3Chars("Hello"));

// // 19. Reverse a string using a loop.
// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }
// console.log(reverseString("Hello EveryOne"));
