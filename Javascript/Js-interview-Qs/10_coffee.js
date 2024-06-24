// 10. The Coffee Machine:
//     In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

async function brewCoffee(coffee) {
    let promise = new Promise((resolve, reject) => {
        let timeout= Math.random();
        setTimeout(() => {
            resolve(`${coffee} is ready`);
        }, timeout);
    });
    return promise;
}

async function main(){
    let coffee = await brewCoffee("Capacino");
    console.log(coffee);
}

main()