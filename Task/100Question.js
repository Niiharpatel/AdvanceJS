// 1. Reverse string ==============================================================================================

// let data = "Nihar";
// let str = "";   //for store reverse string..

// for (let i = data.length - 1; i >= 0; i--) {
//     str = str + data[i];
// }
// console.log(str);


// 2. Find the maximum number in an arr. ==========================================================================

// let arr = [1, 5, 2, 7, 25, 90, 0];
// let max=[]; //for store maximum value..


// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] > max) {

//         max = arr[i];

//     }
// }
// console.log("Maximum Number is:", max)


// 3. Calculate  the  factorial  of  a  number. =====================================================================

// let n = 10;
// let ans = 1;

// if (n === 0) {
//     console.log(`Factorial of ${n} is:`, ans);
// } else {
//     for (let i = 1; i <= n; i++) {

//         ans = ans * i;

//     }
//     console.log(`Factorial of ${n} is:`, ans);
// }


// 4. Check if a given number is prime. ===========================================================================

// function checkPrime(n) {

//     if (n === 1) {
//         return false;
//     } else if (n === 2) {
//         return true;
//     } else {

//         for (let i = 0; i < n; i++) {
//             if (n % i === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }

// console.log(23)


// 5. Remove duplicates from an array. ========================================================================

// let arr = [1, 2, 1, 4, 3];

// let ans = [...new Set(arr)];

// console.log(ans);


// let arr = [1, 2, 3, 4, 4, 5];

// const ans = arr.reduce((a, b) => {
//     if (a.indexOf(b) < 0) a.push(b);
//     return a;
// }, []);

// console.log(ans)


// 6. Check if a given string is a palindrome. ==================================================================

// function fun(name) {

//     let data = name.split('').reverse().join('')

//     name == data ? console.log(`${name} Is palindrome`) : console.log(`${name} is not palindrome`)

// }

// fun("Nihar");


// 7.  Capitalize the first letter of each word in a sentence. =================================================

// let data = "nihar patel";
// let data2 = data.split(" ");

// let ans = data2.map((e) => {
//     return e[0].toUpperCase() + e.substring(1);
// }).join(" ")

// console.log(ans);


// 8.Find  the  intersection  of  two  arrays. =================================================================

// let arr1 = [1, 2, 3, 4];
// let arr2 = [10, 5, 2, 6, 3];

// let ans = arr1.filter(x => arr2.includes(x))
// console.log("ans", ans);


// 10. Convert  a  number  to  its  binary  representation.=====================================================

// let num = 25;

// let ans = num.toString(2);   // base of binary number is 2
// console.log("ans", ans);


// 11. Implement  a  function  to  perform  a  deep  copy  of  an  object.=======================================

// Deep copy means if we copy obj1 into obj2 and modify obj2 it not affect obj1..

// obj1 = {
//     name: "Nihar",
//     age: 23,
//     city: "Valsad"
// }

// obj2 = { ...obj1 }

// obj2.name = "Guru";
// obj2.age = 30;
// obj2.city = "Surat"

// console.log("obj1", obj1);
// console.log("obj2", obj2);

// ===== Shallow Copy =====

// let data = { name: "Nihar" };

// let data2 = data;
// data2.name = "Guru"

// console.log("data", data);
// console.log("data2", data2);


//14.Find  the  second  largest  number  in  an  array. ==============================================================

// arr = [12, 35, 1, 37, 10, 1]

// arr.sort();  // [1, 1, 10, 12, 35, 37]

// let second_largest = 0;

// for (let i = arr.length - 2; i >= 0; i--) {

//     if (arr[i] != arr[arr.length - 1]) {
//         second_largest = arr[i];
//         break;
//     }
// }

// console.log("Second largest number is: ", second_largest);


// 15. Sort  an  array  of  objects  based  on  a  specific  property. ================================================

// let arr = [{ name: "Nihar", age: 23, city: "Valsad" }, { name: "guru", age: 20, city: "surat" }, { name: "Cherishma", age: 25, city: "Valsad" }]

// arr.sort((a, b) => {
//     return a.age - b.age;
// })

// arr.forEach(e => {
//     console.log(`${e.name} ${e.age} ${e.city}`)

// });


// 16.  Calculate  the  sum  of  all  even  numbers in an  array ======================================================

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let str = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {

//         str = str + arr[i];

//     }

// }

// console.log("Sum of even number is", str);


// 17.Check if two arrays are equal(have the same elements in the same order). ===========================


