async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
}

function sum(a, b, c) {
    return a + b + c;
}
// imidiatly invoked function expression iife 
(async function main() {
    // let a = await sleep();
    // console.log(a);
    // let b = await sleep();
    // console.log(b);

    // let [x, y, ...rest] = [1, 5, 7, 8, 9, 10];
    // console.log(x, y, rest);

    let obj = {
        a: 1,
        b: 2,
        c: 3
    }
    let { a, b } = obj;
    console.log(a, b);

    let arr = [1, 4, 6];
    console.log(sum(arr[0],arr[1],arr[2]));
    console.log(sum(...arr));
})();

// Hosting is imp concept which means
// 1: if we declare a variable with var and give it a value at last of block then its declaration will be considered at the top of block but not initialization
// 2: let and const are block types but var variable is available throughout the code if initialized outside of any function 