let pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello user this is promise 1");
    resolve("Hello user this is promise 1");
  }, 4000);
});

let pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello user this is promise 2");
    resolve("Hello user this is promise 2");
  }, 3000);
});

Promise.all([pr1, pr2]).then(function (values) {
  // promise.all wait for both promises to b complete and then print at same time without any delay.
  console.log(values);
});
