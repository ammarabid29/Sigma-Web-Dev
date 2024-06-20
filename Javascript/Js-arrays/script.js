let arr = [1, 2, 4, 5, 7];

// array is muteable it can be update but string can not 
arr[0] = 5666;

console.log(arr, typeof arr);
console.log(arr.length);
console.log(arr[0]);

console.log(arr.toString());
console.log(arr.join(" and "));

// last element removed by pop 
arr.pop();
console.log(arr);

// item added on last 
arr.push("Ammar");
console.log(arr);

// first element removed by shift 
arr.shift();
console.log(arr);

// item added on first 
arr.unshift("Abid");
console.log(arr);

// delete item but length of array remain same memory donot deAlocate
delete arr[2];
console.log(arr);

let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [7, 8, 9];

console.log(a.concat(b));
console.log(a.concat(b, c));

let d = [1, 5, 7, 8, 2, 6, 4, 3];
console.log(d.sort());

let numbers = [1, 2, 3, 4, 5];
// first value is starting point and second is how many values you want to delete 
// numbers.splice(1,2);
// last 2 are the new values added to deleted items space
// numbers.splice(1, 2, 22, 33);
console.log(numbers);

// slice makes another array by taking the element of the position value give to onwards
console.log(numbers.slice(2));
// 2nd value is ending point but ending point value is not included
console.log(numbers.slice(1,3));

console.log(numbers.reverse());