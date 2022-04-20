// helloWorld function 
const helloWorld = function () {
    return "Hello, World!";
}

function sayHello(input) {
    if(typeof input === "string") {
        return "Hello, " + input + "!";
    }
    return "Hello, World!";
}