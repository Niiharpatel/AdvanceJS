// const f = (x) =>{
//     console.log("x:",x);
//     // console.log(f);


//     return x + 1;
// }

// const f1 = (x) =>{
//     console.log("x:",x);
//     console.log(f1);

//     return x+1;
// }

// const f2 = (x) =>{
//     console.log("x:",x);
//     console.log(f2);

//     return x+1; 
// }

// function fun() {
//         throw new Error("..STOP..");
//       setTimeout(() => {
//         console.log("Error");
//       }, 5000);
//     }

// async function mainfun() {

//         try {
//             let x1 = await f(0);
//             let x2 = f1(x1);
//             fun(); 
//             let x3 = f2(x2);

//             console.log("x3:",x3);

//         } catch (error) {
//             console.log(error);
//             console.log(fun);
            
//         }
//     } 


// mainfun();



try {
    let x =['1','2','3','4','5'];

    console.log(x);
    // console.log(x(5));  // for print catch message... 
    
} catch (e) {
    console.log("You entering wrong code");
    
}