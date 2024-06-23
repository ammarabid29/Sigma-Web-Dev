// Promise settled means resolve or reject 
// Promise resolve means promise settled successfully
// Promise reject means promise not settled successfully

// async function getData() {
//     // Simulate getting data from a server 
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })
// }

// using fetch api
async function getData() {
    // json placeholder 
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.json()
    return data
}

async function main() {
    console.log("Loading modules")

    console.log("Do something else")

    console.log("Load Data")

    let data = await getData();

    console.log(data);

    console.log("process Data")

    console.log("Task 2")
}

main();


// data.then((v) => {
//     console.log(data);

//     console.log("process Data")

//     console.log("Task 2")
// })
