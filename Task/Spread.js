
let arr = [1, 2, 3, 4, 5, 6, 7]
let arr2 = arr;  // Refrence...
let arr3 = [...arr, 10];  // Copy..

console.log("Array:", arr2);

console.log("Array3:", arr3);


let obj1 = { a: 10, b: 5 };

let obj2 = obj1;  //Reference of object..

let obj3 = { ...obj1 };  // Copy of object.. 

obj1.a = 20;

console.log("obj2 :", obj2);
console.log("obj3 :", obj3);