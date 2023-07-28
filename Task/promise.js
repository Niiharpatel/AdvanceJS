

let promise = new Promise((resolve, reject) => {

    let person = { name: "kush", age: 10 }


    if (person.age<18) {
        resolve(person);
         
    }else{
        reject("Not Eligible");
    }

})

promise
.then((res)=>{
    console.log("Name is:",res.name);
    res.add = 'surat';  // for add key value...
    return res.add
})
// .then((res1) => {
//     console.log("res1:", res1)
//     return console.log(res1)
	
// })

.catch((err)=>{
    console.log(err);
})