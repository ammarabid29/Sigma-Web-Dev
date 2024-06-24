// 5. The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sum(array) {
    if (array.length == 0) {
        return [];
    }
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            break;
        }
        result += array[i];
    }
    return result;

    // return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

let array = [1, 2, 3, 4, -5, -6]
console.log(sum(array));