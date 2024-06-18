console.log("Hey this is tutorial 55")

// Always use let instead of var 
let a = 5;
a = a + 1;
// var b = 6;
// let c = "harry"
// let _a = "Ammar"
// var 55a = "Abid" variable name not allowed

// console.log(a + b + 9)
// console.log(c)
// console.log(typeof a, typeof b, typeof c)

// const a1 = 6;
// a1 = a1 + 1; Not Allowed due to constant

// var is globally scoped
// let and const are block scped

{
    let a = 66;
    console.log(a)
}

console.log(a);

let x = "Harry bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;
// null ka type object hota hai 

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)

// folowing is object 
// object is combination of a key and a value 
let o = {
    "name": "Ammar",
    "job code": 5600,
    "is_Handsome": true
}
console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);