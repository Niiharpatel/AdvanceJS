let num = [1, 2, 9, 20, 34];

let a = num.toString();  // 1,2,9,20,34 =>convert array into string
console.log(a);

let b = num.join('-');  // 1-2-9-20-34
console.log(b);

let c = num.pop();  // 34 => pop the last element from array and give it on new array
console.log(c)


num.push(34);
console.log(num)  // [1, 2, 9, 20, 34] => push add the element at last of array and return original array


let d =num.shift()
console.log(d)  // 1 => cut the first element from array and give it on new array

num.unshift(1)
console.log(num)  // [1, 2, 9, 20, 34] =>  add the element at start of array and return original array

