let x = "Hello";
let y = "world!"

console.log(x + " " + y);
setInterval(()=>{
    console.log("Heyyy")
}, 1000)
console.log(__dirname); //tell us path name
console.log(__filename); //tell us file name

// run thie by --> node app.js




// Module code to exports

// Modules

let a = "adeel"
let b = "rob"
let c = "hello"

let persons = {
    name:"adeel",
    age : 22
}

module.exports.person = persons
module.exports = {a,b,c}