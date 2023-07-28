let data = require("./task.json");
// console.log("🚀 ~ file: task.js:2 ~ data:", data);


// ======================================== Task -1 =====================================================

// let arr = [];
// let checkName = (a, b) => {
//     a.map((e) => {
//         return e.city.match(b) ? arr.push({ city: e.city, state: e.state_name, population: e.population }) : null;
//     });

//     return arr;
// }
// console.log(checkName(data));


//By using includes....
// let arr = [];
// let checkName = (a, b) => {
//     a.map((e) => {
//         return e.city.includes(b) ? arr.push({ city: e.city, state: e.state_name, population: e.population }) : null;
//     });

//     return arr;
// }
// console.log(checkName(data));


//By filter method....
// let arr = [];
// let findState = data.filter((e) => {

//     return e.city.match("Del") ? arr.push({
//         city: e.city,
//         state: e.state_name,
//         popu: e.population
//     }) : null;

//     return arr;

// });

// console.log("arr:", arr);



// ================================================== Task - 2 ===============================================
// let sum = 0;

// let findStateName = (find, state) => {
//     data.filter((e) => {
//         return e.state_name === state ? sum += Number(e.population) : null;
//     });

//     return sum;
// }

// console.log("StateName:", findStateName(data, "Mahārāshtra"));


// ================================================== Task - 3 ===============================================

let arr = [];

let findPopulation = (find, len) => {

    let filterData = data.filter((e) => {
        return e.population.length >= len ? arr.push({ city: e.city, population: e.population }) : null;
    });

    return arr;

}
console.log("Population:", findPopulation(data, 6));








