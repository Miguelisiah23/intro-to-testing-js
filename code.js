// helloWorld function 
const helloWorld = function () {
    return "Hello, World!";
}

function sayHello(input) {
    if (typeof input === "string") {
        return "Hello, " + input + "!";
    }
    return "Hello, World!";
}

function isFive(input) {
    return input === 5;
}

function isEven(input) {
    if (typeof input === "number") {
        return input % 2 === 0;
    }
    return false;
}
