/* 
Create a faulty calculator using JavaScript
This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:
+ ---> -
* ---> +
- ---> /
/ ---> **
It performs wrong operation 10% of the times
*/

let random = Math.random();

// prompt give value in string so firstly convert it to float by parseFloat 
let a = parseFloat(prompt("Enter first number"));
let b = parseFloat(prompt("Enter second number"));
let c = prompt("Enter operation");

if (random > 0.1) {
    // accurate calculations 90% of the time
    if (c == "+") {
        result = a + b;
    }
    else if (c == "-") {
        result = a - b;
    }
    else if (c == "*") {
        result = a * b;
    }
    else if (c == "/") {
        result = a / b;
    }
}
else {
    // faulty calculations
    if (c == "+") {
        result = a - b;
    }
    else if (c == "*") {
        result = a + b;
    }
    else if (c == "-") {
        result = a / b;
    }
    else if (c == "/") {
        result = a ** b;
    }
}

console.log(result);

