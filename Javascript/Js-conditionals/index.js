console.log("Hello I am conditional tutorial")

let age = 1;
// let grace = 2;

// age += grace; //same work for all operators

// console.log(age + grace);
// console.log(age - grace);
// console.log(age * grace);
// console.log(age / grace);
// console.log(age ** grace); // age to the raise power grace
// console.log(age % grace);

// === for equal value and type 
// !== for not equal value and type both
if (age >= 18) {
    console.log("You can drive");
}
else if (age == 0) {
    console.log("Are you kidding!");
}
else if (age == 1) {
    console.log("Are you again kidding!");
}
else {
    console.log("You cannot drive");
}

let a = 6;
let b = 8;
//Ternary Expression
let c = a > b ? (a - b) : (b - a);
console.log(c);

/*
Translate to:
i(a > b){
    let c = a - b;    
}
else{
    let c = b - a;
}
*/
