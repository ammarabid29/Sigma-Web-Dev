function nice(name) {
    console.log("Hey " + name + " you are nice");
    console.log("Hey " + name + " you are good");
    console.log("Hey " + name + " your Tshirt is nice");
    console.log("Hey " + name + " your course is good too");
}

// function invocation
// a way to use a function 
// nice("Ammar");

// nice("Abid");

// c is optional variable
function sum(a, b, c = 3) {
    console.log(a, b, c);
    return a + b + c;
}

result1 = sum(4, 5);
result2 = sum(7, 3);
result3 = sum(11, 4, 1);

console.log("The sum of these numbers is: ", result1);
console.log("The sum of these numbers is: ", result2);
console.log("The sum of these numbers is: ", result3);

// Arrow function 
// used to save a function in variable
const func1 = (x) => {
    console.log("I am an arrow function", x);
}

func1(23);
func1(33);
func1(11);