console.log("Script initializing")

// following both can be used 
// let boxes=document.querySelector(".container").children
let boxes = document.getElementsByClassName("box");

function getRandomColor() {
    // numbers between 0 to 255 
    // formula = min + Math.random(max-mix) 
    // Math.ceil = 4.22 = 5
    // Math.floor = 4.22 = 4
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1},${val2},${val3})`
}
Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
})