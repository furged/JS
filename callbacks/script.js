// Ensures that a function is not going to run before a task is completed.
// Helps us develop asynchronous code.
// (When one function has to wait for another function) that helps us avoid errors and potential problems
// Ex. Wait for a file to load

let a = 10;
let b = 20;

addNumbers(a, b, displayDOM);

function addNumbers(num1, num2, callback) { //callback is not a keyword btw
    let sum = num1 + num2;
    callback(sum);
}

function displayConsole(output) {
    console.log(output);
}
function displayDOM(output) {
    document.getElementById("output").innerHTML = output;
}