

// let str = "Hello user this is string";

// console.log('Startwith:', str.startsWith("E")); // ==> false
// console.log('Startwith:', str.startsWith("u")); // ==> false
// console.log('Endwith:', str.endsWith("g")); // ==> true
// console.log('Include', str.includes("s")); // ==> true


// ============== 22-06-23 =================== task to reverse string

// let x = "I m nihar";

// let ans = x.split(' ')
// console.log("🚀 ~ file: String.js:14 ~ Ans:", ans)  // for splite words and give output in array..

// let rev = ans.reverse();
// console.log("🚀 ~ file: String.js:17 ~ Rev:", rev)  // for reverse array..

// let con = rev.join(" ");
// console.log("🚀 ~ file: String.js:20 ~ Join:", con)  //  for convert array into string..

// let org = con.split(" ");
// console.log("🚀 ~ file: String.js:25 ~ org:", org)

// let org1 = org.reverse();
// console.log("🚀 ~ file: String.js:28 ~ org1:", org1)

// let org2 = org1.join(' ');
// console.log("🚀 ~ file: String.js:31 ~ org2:", org2)



let array = [1, 60, 5, 7, 80]


// ===================================== to find max number in array using reduce.....
// let ans = array.reduce((a, b) => {
//     return (a > b) ? a : b;
// });
// console.log("🚀 ~ file: String.js:31 ~ ans ~ ans:", ans)




//=============================== to find max number in array using map..
let max = 0;
let ans = array.map((item) => {
    if (max < item) {
        max = item;
    }

})
console.log("Ans:", max)





