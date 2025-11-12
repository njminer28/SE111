let hourlyPay = Number(prompt("Enter your hourly pay ($14.50):"));
let hoursWorked = Number(prompt("Enter your hours worked a week (32):"));
let tax = Number(prompt("Enter your tax rate (20%):"));
let grossPay = hourlyPay * hoursWorked * 2;
let uncleSam = grossPay * (tax / 100);
let netPay = grossPay - uncleSam;

console.log("Gross Pay: $" + grossPay.toFixed(2))
console.log("Uncle Sam's Share: $" + uncleSam.toFixed(2));
console.log("Net Pay: $" + netPay.toFixed(2))

alert(
    "Gross Pay: $" + grossPay.toFixed(2) + "\n" +
    "Uncle Sam's Share: $" + uncleSam.toFixed(2) + "\n" +
    "Net Pay: $" + netPay.toFixed(2)
);

let print = `
    <p>Gross Pay: $${grossPay.toFixed(2)}</p>
    <p>Uncle Sam's Share: $${uncleSam.toFixed(2)}</p>
    <p>Net Pay: $${netPay.toFixed(2)}</p>
    `;
document.getElementById("print").innerHTML = print;