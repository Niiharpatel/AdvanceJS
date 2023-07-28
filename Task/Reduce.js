
let arr = [1, 2, 3, 4, 5]

let find = arr.reduce((lastEle, ele) => {

    console.log("LastElement is: ", lastEle);
    console.log("Element Is: ", ele);

    return lastEle + ele;
})

console.log("Reduce:", find);


//reduce print return value....