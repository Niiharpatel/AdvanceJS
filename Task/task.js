
// let person = [
//     { name: "kush", age: 12 },
//     { name: "tej", age: 10 },
//     { name: "smit", age: 25 },
//     { name: "ram", age: 20 },
// ];

// let array = person.map((fname) => {
//     console.log(fname.name)

// });

// To find maximum age from multiple object...

// let max = 0;
// let get = {};

// let array = person.map((x) => {
//     if (x.age > max) {

//         max = x.age
//         get = x

//     }
// });

// console.log("Max age is:", max)
// console.log("Name is:", get)



// first return object,   add age with name,   print address..


// 17-6-23 task........

// function f1(data) {

//     data.age = 23;
//     console.log(data.fname + " " + data.lname + " " + data.age);

// }


// function f2(fname, lname, callback) {

//     let person = {
//         fname: fname,
//         lname: lname
//     }
//     // console.log(person.fname + " " + person.lname);

//     callback(person);

// }

// f2("Nihar", "Patel", f1);



// Promises.....

// let promise = new Promise((resolve, reject) => {

//     let person = {
//         name: "Nihar",
//         surname: "Patel",
//         age: 23,
//     }

//     if (person.age > 20) {
//         resolve(person);
//     } else {
//         reject("Not Applicable...");
//     }
// })

// promise
//     .then((res) => {

//         console.log(res);
//         res.add = 'Valsad';

//         console.log(res.add);
//     })

//     .catch((err) => {
//         console.log(err);
//     })



//Try Catch.............

// function find() {

//     var x = { name: "Nihar" }   //store name...

//     return console.log(x.name)

// }

// function find1() {

//     var x1 = { surname: "Patel" }  // store surname..

//     return console.log(x1.surname)
// }

// function find2() {

//     var x2 = { add: "Valsad" }  // store address..

//     return console.log(x2.add)
// }

// function bug() {
//     throw new Error("======= Error =======");  // throw error..
//     setTimeout(() => {
//         console.log("Error");
//     }, 5000);
// }



// function mainfun() {

//     try {
//         let x1 = find();  // store function in x1...
//         let x2 = find1(x1);  // store x1 in x2...
//         let x3 = find2(x2);  // store x2 in x3...

//     } catch (error) {
//         console.log(error);

//     }
// }


// mainfun();



// Task 24-06-23............

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for (let i = 0; i < arr.length; i++) {

//     if (i == 7) {
//         break;
//     }

//     console.log("element:", arr[i])
// }

// For of loop............

// for (const x of arr) {
//     console.log(":", x)

// }


// Map.............
// let newarr = arr.map((i) => {
//     console.log("Element:", i);
// })



// Remove duplication from array....
// let arr, arr1, total, dup;

// arr = [1, 2, 3, 4, 5, 6]

// arr1 = [1, 2, 3, 4]

// total = arr.concat(arr1);
// console.log("total:", total)

// dup = [...new Set(total)]
// console.log("Dup:", dup)


// ======================= 26-06-23 ======================>

// -> Want to re-use variable name so which variable mathod should i use
//  Ans:We can use var method.
// ------------------------------------------------------------------------------------------

// -> give the list which variavble name not works in js
// 1. let a = 0
// 2. let "a" = 0
// 3. let 'a' = 0
// 4. let 10 = 0
// 5. let 1 = 0
// Ans: 2,3,4,5
// ------------------------------------------------------------------------------------------

// let x = 100
// var y = 100
// const z = 100
// {
// x = 90
// y = 90
// z = 90
// console.log("x:",x);  // print 90..
// console.log("y",y);  // print 90..
// console.log("z:",z);  // throw an error bcz we can't redeclare or reassign const..
// }

// console.log(x);  // print 90 bcz value of x reassign..
// console.log(y);  // print 90 bcz value of y reassign..
// console.log(z);  // throw an error bcz we can't redeclare or reassign const..



// ------------------------------------------------------------------------------------------

// -> task - 2

// console.log(x) ___________________ point - x2
// console.log(x) ___________________ point - y2
// console.log(x) ___________________ point - z2

// {
//     let x = 100
//     var y = 100
//     const z = 100
// }

// console.log(x) ___________________ point - x1
// console.log(y) ___________________ point - y1
// console.log(z) ___________________ point - z1


// what will print at x1 - throw an error bcz let is work for that perticular block...
// what will print at y1 - 100
// what will print at z1 - throw an error bcz const is work for that perticular block...
// what will print at x2 - (Undefined)Throw an error bcz variable is use befor initialization...
// what will print at y2 - (Undefined)Throw an error bcz variable is use befor initialization...
// what will print at z2 - (Undefined)Throw an error bcz variable is use befor initialization...


// ==================================== Object =========================================>

// ---> make one object who contain your detail like - name,age,multiple vehicles
// -name,and one function print your name and then do below given task

// 1. print all value of your details object
// 2. add a function name printAge inside object who print age from outside
// 3. get all key
// 4. get all value
// 5. add one key for city name and store your city name on it  from outside
// 6. delete age key from object
// 7. make one function name addAge who print age with add some year which one pass by user.


let user = {
    name: "Nihar",
    age: 23,
    Vehicles: ["Bullet", "Pulser", "Splendor"]
}
// // console.log("User:", user); // 1. print all value of your details object..

// user.printAge = function () {
//     console.log(this.age);
// };

// user.printAge();  // 2. add a function name printAge inside object who print age from outside..
// console.log("User:", user);

// console.log(Object.keys(user)); // 3 print all keys of  object..

// console.log(Object.values(user)); // 4 print all value of object..

// user.city = "Valsad";
// console.log("City add:", user)  // 5 add city..

// // delete user.age;
// // console.log(user);  // 6 for delete key..

// user.addAge = function () {
//     console.log("🚀 ~ file: task.js:288 ~ addAge ~ add:", this.age + 1)
// }

// user.addAge();


// console.log("User:", user)


// ======================================== 27-06-23 ====================================================

// let arr = [1, 2, 3, 4, 5, 6]
// delete arr[1];

// // console.log("🚀 ~ file: task.js:299 ~ arr:", arr)
// console.log("🚀 ~ file: task.js:299 ~ arr:", arr[1])

// arr[1] = 9;  // add value on index 1...
// console.log("🚀 ~ file: task.js:305 ~ arr:", arr)














