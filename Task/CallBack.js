
function f1(a, b, callback) {
    let c = a + b;

    return callback(c);
}

function f2(total){
    console.log(total);
}


f1(10, 20,f2);
