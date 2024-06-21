let a = 5;

// 1st way 
// function factorial(number) {
//     let arr = Array.from(Array(number + 1).keys());
//     console.log(arr.slice(1,));
//     let f = arr.slice(1,).reduce((a, b) => a * b);
//     return f;
// }
// console.log(factorial(a));

// 2nd way 
function factFor(number){
    let fact = 1;
    for (let index = 1; index <= number; index++) {
        fact = fact*index;
    }
    return fact;
}
console.log(factFor(a));