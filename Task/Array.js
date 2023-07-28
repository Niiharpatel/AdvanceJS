

let array = ['a', 'b', 'c', 'd', 'e'];

let newArray = array.map((a, b) => {
    console.log("a - ", a);
    console.log("b - ", b);

    return a + b;
});

console.log("array - ", array);
console.log("newarray - ", newArray);


// // Reduce...

// let total = array.reduce((lastEle, ele) => {
//     console.log("LastElement is: ", lastEle);
//     console.log("Element Is: ", ele);

//     return lastEle + ele;
// })

// console.log("Reduce:", total);

// // Filter..

// let fil = [1, 2, 3, 4, 5, 6];

// let filteraray = fil.filter((e) => e > 5);
// console.log("filter array is: ", filteraray);

// // Reverse..
// let rev = array.reverse((e) => e);
// console.log(rev);

// // Toreverse.......
// const find = [1, 2, 3, 4]

// const ans = find.toReversed();
// console.log("Toreverse: ", ans);


// // Toshorted...

// const find1 = [1, 2, 30, 4]

// const ans1 = find1.toSorted();
// console.log("Tosort: ", ans1);

// // Tosplice.....

// const find2 = [1, 2, 3, 4]

// const ans2 = find2.toSpliced(0, 2);  // counting from 0 index  delete total 2 value...
// console.log("Tospliced: ", ans2);



// // Splice...

// let spli = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // let spl = spli.splice(2)
// // console.log(spl)

// let spl1 = spli.splice(2, 2)
// console.log(spl1)
