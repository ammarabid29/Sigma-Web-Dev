document.querySelectorAll(".box").forEach(e => {
    let ran = Math.floor(Math.random() * 5);
    console.log(ran);
    if (ran == 0) {
        e.style.backgroundColor = "green";
    }
    if (ran == 1) {
        e.style.backgroundColor = "red";
    }
    if (ran == 2) {
        e.style.backgroundColor = "blue";
    }
    if (ran == 3) {
        e.style.backgroundColor = "aqua";
    }
    if (ran == 4) {
        e.style.backgroundColor = "purple";
    }
});