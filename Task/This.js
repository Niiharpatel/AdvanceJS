

let person = {
    name: "Nihar",
    lname: "Patel",
    find: function () {
        return this.name + " " + this.lname;
    },
};
console.log(person.find());