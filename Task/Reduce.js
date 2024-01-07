let arr = [1, 2, 3, 4, 5];

let find = arr.reduce((lastEle, ele) => {
  console.log("LastElement is: ", lastEle);
  console.log("Element Is: ", ele);

  return lastEle + ele;
}, 10);

console.log("Reduce:", find);

//reduce print return value....
