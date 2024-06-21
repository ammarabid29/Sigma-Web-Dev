console.log("Ammar")

// let boxes = document.getElementsByClassName("box");
// boxes[2].style.backgroundColor = "red";

// document.getElementById("redBox").style.backgroundColor = "red";

// first box change ho ga 
// document.querySelector(".box").style.backgroundColor = "green";

// sare box change ho ge 
// ye node list me multiple element return krta hai is liye forEach me arrow function laga k change kre ge ta k each element ko return kre list ko ni
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "green";
});

// sare div aa jaye ge 
// console.log(document.getElementsByTagName("div"));

// value match krta hai e.g div 5 me id #redBox hai to answer true aye ga
let e = document.getElementsByTagName("div");
console.log(e[4].matches("#redBox"));
console.log(e[2].matches("#redBox"));

// closest parent ko match krta hai 
console.log(e[3].closest(".container"));
console.log(e[3].closest("html"));

// jab element 2 element 1 k ander ho ya element2 element1 k equal ho tb true print krta hai 
console.log(document.querySelector(".container").contains(e[2]));
console.log(document.querySelector(".container").contains(e[0]));
console.log(document.querySelector(".container").contains(document.querySelector("body")));
console.log(document.querySelector("body").contains(document.querySelector(".container")));
