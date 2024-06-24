// 3. The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function mirror(a) {
    if (a.length == 0) {
        return [];
    }
    // convert string to array than reverse then convert back to string 
    let reverse = a.split('').reverse().join('');

    let result = a.concat(reverse);
    return result;
}
let a = "Ammar";
console.log(mirror(a));

