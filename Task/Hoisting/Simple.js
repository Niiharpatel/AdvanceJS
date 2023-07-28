


function find() {
    let x;
    {
        //let x;  // here u have to use var or declare the variable outside..
        x = "Hello user this is hoisting";
    }
    return x;
}

console.log("Ans is :", find());