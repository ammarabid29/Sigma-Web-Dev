console.log("Hello World");

console.log(document.body.childNodes);

// container k childNodes
// space text node consider ho ga 
console.log(document.body.childNodes[1].childNodes);

console.log(document.body.firstElementChild);
// children me sirf element nodes ate hain 
console.log(document.body.firstElementChild.children);

console.log(document.body.firstElementChild.children[3].nextElementSibling);
console.log(document.body.firstElementChild.children[3].previousSibling);
console.log(document.body.firstElementChild.children[3].previousElementSibling);


let cont = document.body.childNodes[1];
console.log(cont);
console.log(cont.firstChild);
console.log(cont.lastChild);

// free space text node hoti hai firstElementChild ur lastElementChild text node ko ignore kr deta hai 
console.log(cont.firstElementChild);
console.log(cont.lastElementChild);

cont.lastElementChild.style.backgroundColor = "red";

console.log(cont.lastElementChild.parentElement);

// For Table 
console.log(document.body.children[1]);
console.log(document.body.children[1].rows);
console.log(document.body.children[1].caption);
console.log(document.body.children[1].tHead);
console.log(document.body.children[1].tFoot);
console.log(document.body.children[1].tBodies);