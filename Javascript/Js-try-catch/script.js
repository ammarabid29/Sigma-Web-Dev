let a = prompt("Enter first number")
let b = prompt("Enter second number")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b);

// tryCatch works Synchronous means it can not catch setTimeout function or scheduled code
function main() {
    try {
        console.log("The sum is: ", sum)
        // console.log("The sum is: ", sum * x)
        return true;
    } catch (error) {
        console.log("Error aa gya bhai")
        return false
    }
    // return k bad wala code b chalana ho to finally likhte hain ni to return k bad wala code ni chalta
    finally {
        console.log("Files are being closed and db connection is being closed")
    }
}

let c = main()