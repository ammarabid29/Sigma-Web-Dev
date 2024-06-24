// 2. The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.


function doubleArray(array) {
    if (array.length == 0) {
        return [];
    }
    let result = [];
    let pervElement = null;
    for (let i = 0; i < array.length; i++) {
        if (array[i] != pervElement) {
            result.push(array[i],array[i]);
        }
        else {
            result.push(array[i]);
        }
        pervElement = array[i];
    }
    return result;
}
let array = ["Ammar","Ammar", "Abid", "Farrukh", "Ansar"];

let outputArray = doubleArray(array);

console.log(outputArray);