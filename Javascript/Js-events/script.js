// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


let button = document.getElementById("btn");

button.addEventListener("dblclick", () => {
    // alert("I was clicked");
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!";
})

button.addEventListener("contextmenu", () => {
    alert("Don't hack us by Right click Please");
})

// List of keyboard events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#keyboard_events

document.addEventListener("keydown", (e) => {
   console.log(e, e.key,e.keyCode);
})