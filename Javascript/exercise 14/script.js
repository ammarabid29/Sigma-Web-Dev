async function initializingHacking() {
    let random = Math.ceil(Math.random() * 7000);
    console.log(random)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Initializing Hacking")
        }, random);
    })
}

async function readFiles() {
    let random = Math.ceil(Math.random() * 7000);
    console.log(random)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Reading your Files")
        }, random);
    })
}

async function detectPassword() {
    let random = Math.ceil(Math.random() * 7000);
    console.log(random)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Password files Detected")
        }, random);
    })
}

async function sendPassword() {
    let random = Math.ceil(Math.random() * 7000);
    console.log(random)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Sending all passwords and personal files to server")
        }, random);
    })
}

async function cleanUp() {
    let random = Math.ceil(Math.random() * 7000);
    console.log(random)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Cleaning up")
        }, random);
    })
}

async function main() {
    let data1 = await initializingHacking();
    let html1 = `<p>${data1}
            <span class="blinking-dots"><span class="dot">.</span><span class="dot">.</span><span
                    class="dot">.</span></span>
        </p>`;
    document.querySelector(".container").insertAdjacentHTML("beforeend", html1)

    let data2 = await readFiles();
    let html2 = `<p>${data2}
            <span class="blinking-dots"><span class="dot">.</span><span class="dot">.</span><span
                    class="dot">.</span></span>
        </p>`;
    document.querySelector(".container").insertAdjacentHTML("beforeend", html2)
    
    let data3 = await detectPassword();
    let html3 = `<p>${data3}
            <span class="blinking-dots"><span class="dot">.</span><span class="dot">.</span><span
                    class="dot">.</span></span>
        </p>`;
    document.querySelector(".container").insertAdjacentHTML("beforeend", html3)

    let data4 = await sendPassword();
    let html4 = `<p>${data4}
            <span class="blinking-dots"><span class="dot">.</span><span class="dot">.</span><span
                    class="dot">.</span></span>
        </p>`;
    document.querySelector(".container").insertAdjacentHTML("beforeend", html4)

    let data5 = await cleanUp();
    let html5 = `<p>${data5}
            <span class="blinking-dots"><span class="dot">.</span><span class="dot">.</span><span
                    class="dot">.</span></span>
        </p>`;
    document.querySelector(".container").insertAdjacentHTML("beforeend", html5)
}
main();