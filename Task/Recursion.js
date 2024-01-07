// function loop(x) {
//     console.log(x);
//     if (x > 0) {
//         loop(x - 1);
//     } else {
//         console.log("finished....!");
//     }
// }

// loop(3);

let decrementCounter = (number) => {
  // Base case condition....
  if (number === 0) return;
  console.log(number);
  decrementCounter(number - 1);
};
decrementCounter(5);
