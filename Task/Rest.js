// let a = [10, 20, 25, 5, 30]

// let b = [1, 20, 200, 100, 50]


function find(a, b, ...c) {
    console.log("a, b :", a,",", b);
    console.log("c :", c);
    return a + b;
}

console.log("find:", find(1, 2, 3, 4));
