console.log("Ammar is a Hacker");        // Synchronous
console.log("Abid is a Hacker");         // Synchronous
setTimeout(() => {
    console.log("I am inside setTimeout");  // Asynchronous
}, 2000);
setTimeout(() => {
    console.log("I am inside setTimeout 2"); // Asynchronous
}, 2000);
console.log("The End");                  // Synchronous

// Synchronous code executes in a single, sequential order
// Asynchronous code allows other operations to continue before it finishes

// The following is example of loadscript callback functions. its means that functions inside functions make the code very complex that makes callback hell so we use promises to manage our code
const fn = () => {
    console.log("Nothing");
}
const callback = (arg, fn) => {
    console.log(arg);
    fn();
}
const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry", fn);
    document.head.append(sc);
}
// prism link is attached 
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

