
// function loop(x) {
//     console.log(x);
//     if (x > 0) {
//         loop(x - 1);
//     } else {
//         console.log("finished....!");
//     }
// }

// loop(3);


function count(num) {


    console.log(num);  //Display the number..


    const total = num - 1; // Decrease the num value..


    if (total > 0) {
        count(total);   // Recursion...
    }
}

count(5); //  Call the function for get answer..
