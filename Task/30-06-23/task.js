let data = require("./task.json");

// console.log("Data:", data);

// ============================================== Find out statewise city name ============================

// let arr = [];

// let stateName = data.filter((e) => {
//     return e.state_name == "Delhi";
// });
// // console.log("City:", stateName);

// let result = stateName.filter((e) => {
//     arr.push(e.city);
// });
// console.log("result:", arr);



// ======================================== Task-1 ==========================================================
// Get City name from State name using function:

// function getCityByStateName(stateName) {

//     let filterData = data.filter((e) => {
//         return e.state_name === stateName;
//     });

//     console.log("City:", filterData);
//     console.log("Total City is:", filterData.length);


// }

// getCityByStateName('Delhi');



// ======================================== Task-2 =============================================================
// Print city name with 6 or above characters:

// let filterCity = data.filter((e) => {
//     return e.city.length >= 6;
// });
// console.log("City:", filterCity);



// function getCityName() {
//     let filterCity = data.filter((e) => {
//         return e.city.length >= 6;
//     });
//     console.log("City:", filterCity);

//     let printCity = filterCity.map((e) => {
//         return e.city;
//     })
//     console.log("City:", printCity);
// }


// ================================================ Task - 3 ================================================
//Print city name with having population above 100000:

// let filterPopulation = data.filter((p) => {
//     return p.population > 100000;
// });
// console.log("Population:", filterPopulation);



// ================================================ Task - 4 ================================================
//Print city with having highest population in ascending order:

let sorting = data.sort((a, b) => {
    return a.population - b.population
});
console.log("Sorting:", sorting);





