let addMultiply = prompt("Do you want to add or multiply?")
let num1 = Number(prompt("Number 1:"))
let num2 = Number(prompt("Number 2:"))
function add(a,b) {
    return a + b;
}
function multiply(a,b) {
    return a * b;
}
let result;
if (addMultiply.toLowerCase() === "add") {
    result = add(num1, num2);
} else if (addMultiply.toLowerCase() === "multiply") {
    result = multiply(num1, num2);
} else {
    alert("Invalid.")
    console.log("Invalid.")
}

if (result !== undefined) {
    console.log("The answer is:" + result);
}