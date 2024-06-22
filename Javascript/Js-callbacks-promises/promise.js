console.log('This is Promises');

// Promise is promise of code execution

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Ammar")
        }, 3000);
    }
})

// prom1.then((a) => {
//     console.log(a);
// }).catch((error) => {
//     console.log(error);
// })

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Ammar 2")
        }, 3000);
    }
})

// let p3 = Promise.all([prom1, prom2]);
// settled ka matlab hai chalna ur resolve ka matlab hai correct answer
// let p3 = Promise.allSettled([prom1, prom2]);
// let p3 = Promise.race([prom1, prom2]);
// wait for first promise to fullfil(not rejected)
// let p3 = Promise.any([prom1, prom2]);
// let p3 = Promise.resolve([prom1, prom2]);
let p3 = Promise.reject([prom1, prom2]);
p3.then((a) => {
    console.log(a);
}).catch((error) => {
    console.log(error);
})