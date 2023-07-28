// let a = 5;
// let b = 4;

// if (a > b) {

//     console.log("true");

// } else {

//     console.log("false");

// };

// =======================================================================================================

// var a = "apple";
// var b = "pineapple";

// if (a.length > b.length) {
//     console.log("true");

// } else {
//     console.log("false");
// }


// =================================================================================================

// var a = "2";
// var b = "12";

// if (a.length > b.length) {
//     console.log("true");

// } else {
//     console.log("false");
// }


// =============================================================================================================

// var a = undefined;
// var b = null;

// if (a == b) {
//     console.log("true");

// } else {
//     console.log("false");
// }

// ============================================================================================================

// var a = undefined;
// var b = null;

// if (a === b) {
//     console.log("true");

// } else {
//     console.log("false");
// }

// ================================================================================================================

// var a = null;
// var b = "\n0\n";

// if (a == b) {
//     console.log("true");

// } else {
//     console.log("false");
// }


// ================================================================================================================

// var a = null;
// var b = +"\n0\n";

// if (a === b) {
//     console.log("true");

// } else {
//     console.log("false");
// }



// ========================================================================================================

// let a = 0;

// (a == 0) ? console.log("Hello User") : null


// ==========================================  Data Types and Objects ==============================================

// a)Create an empty object user:

// let user = {};

// b)Add the property name with the value John:

// let user = { name: "John" };

// c)Add the property surname with the value Smith:

// let user = {
//     name: "John",
//     surname: "Smith"
// };

// d) Change the value of the name to Pete:

// let user = {
//     name: "John",
//     surname: "Smith"
// };

// user.name = "Pete";
// console.log("🚀 ~ file: Q-2.js:125 ~ user:", user)

// e)  Remove the property name from the object:

// let user = {
//     name: "John",
//     surname: "Smith"
// };

// delete user.name
// console.log("🚀 ~ file: Q-2.js:135 ~ user:", user);


// =========================================================================================================

// let fruits = ["Apple", "Pear", "Orange"];

// let shoppingCart = fruits;

// shoppingCart.push("Banana");

// console.log(fruits.length);  // Ans is = 4


// ===============================================================================================================

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let users = [john, pete, mary];

// let names = users.map((e) => {
//     console.log(e.name);
// })


// ==================================================================================================================

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };
// let users = [john, pete, mary];


// let userMapped = users.map((e) => {

//     return { Fullname: e.name + " " + e.surname, Id: e.id }  // OR...

//     // return `{Fullname: ${e.name + e.surname} ,id: ${e.id}}`

// })
// console.log("UserMapped:", userMapped);

// // console.log(userMapped[0].Id);

// console.log(userMapped[0].Fullname);


// ==================================================================================================================

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };


// function sumSalaries(salaries) {

//     let sum = 0;

//     for (const total of Object.values(salaries)) {
//         sum = sum + total;
//     }
//     return sum;
// }
// console.log(sumSalaries(salaries));



// =========================================================================================================

// let user = { name: "John", years: 30 };

// // Destructuring.......
// let { name, years: age, isAdmin = false } = user;

// console.log(name);     // Output: John
// console.log(age);      // Output: 30
// console.log(isAdmin);  // Output: false


// =========================================================================================================

// let user = { name: "John Smith", age: 35 };

// // Convert object to JSON
// let userJSON = JSON.stringify(user);
// console.log("🚀 ~ file: Q-2.js:221 ~ userJSON:", userJSON)

// Read JSON back into another variable
// let anotherUser = JSON.parse(userJSON);

// console.log(anotherUser);


// =====================================================================================================

let arr = "Nihar Patel";
let ans = arr.split(" ").join("");

console.log("name:", ans);










