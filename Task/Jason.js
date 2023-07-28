const x = require("./Data.json");
console.log("x:", x)  // Type = String..

let details = {
    name: "Nihar",
    age: 23,
    add: "Valsad",
    Course: "Advancejs",
    spouse: null
}

let find = JSON.stringify(details);  //convert object into string..
console.log("find:", find)

let find1 = JSON.parse(find);  //convert string into object..
console.log("find1:", find1);

