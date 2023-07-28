let p1 = {
    name: "Nihar",
    age: 23,
    add: "Valsad"

};

let p2 = {
    name: "raj",
    age: 25,
    add: "Surat"
}

function printName(para) {
    console.log("====================>", para);
}

printName(p1.name)
printName(p2.name)

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    find() {
        console.log("Name is:", this.name)
    }

    find1() {
        console.log("Name is:", this.age)

    }
}


