let name = "Nihar";
let surname = "Patel";

let prDetails = {
  name: "Nihar",
  surname: "Patel",
  age: 23,
  add: {
    city: "Valsad",
  },
  vehical: ["passion", "unicon", { a: 10 }],

  info: (x) => {
    console.log("x", x);
    return x + 1;
  }

};



console.log("prDetails :", prDetails.add.city);

console.log("prDetails :", prDetails.vehical[1]);

console.log("prDetails :", prDetails.vehical[2].a);

console.log(typeof prDetails);  // for find type of perticular variable..

console.log(typeof prDetails.toString());  // for convert any datatype into string..

console.log("values :", Object.values(prDetails));  // only print the value from object..

console.log("Keys :", Object.keys(prDetails));  // only print the keys from object..

console.log("object :", Object.entries(prDetails));  // print whole object details..

console.log("fun :", prDetails.info(10));  // for print function used in object..


//   For Concate two Array....

let Arr = ["Nihar", "Patel"];
let Arr2 = ["Valsad", "23"];
let Arr3 = ["Java", "Python"]

// let concat = Arr.concat(Arr2, Arr3);

// console.log("concat:", concat);   // for merge two array..


let concat = [...Arr, ...Arr2, ...Arr3];  // 2nd way...

console.log("concat:", concat);



// Ex...............

console.log("=============================================================")
let employee = [
  {

    firstname: "Nihar",
    lastname: "Patel",
    mobileno: 11111111,
    birthdate: "11-11-99",
    subject: ["Ajs", "Python"],
    add: {
      city: "Valsad"
    }

  },


  {
    firstname: "Raj",
    lastname: "Patel",
    mobileno: 22222222,
    birthdate: "02-05-2000",
    subject: ["Css", "Html"],
    add: {
      city: "Surat"
    }
  }

]

console.log(employee)  // print all details of object..

console.log("Employee first name is:", employee[0].firstname);
console.log("Employee first name is:", employee[1].firstname);

employee.map((e) => {
  console.log(e.firstname + ' ' + e.lastname);
})

