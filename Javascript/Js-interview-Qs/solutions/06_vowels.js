// 6. The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function vowelCounter(str) {
    if (str.length == 0) {
        return [];
    }
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "A" || str[i] == "a" || str[i] == "E" || str[i] == "e" || str[i] == "I" || str[i] == "i" || str[i] == "O" || str[i] == "o" || str[i] == "U" || str[i] == "u") {
            count++;
        }
    }
    return count;
}

let str = "AmmarAbid";
console.log(vowelCounter(str));