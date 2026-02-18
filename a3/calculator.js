let validResults = [];
let continueLoop = true;

document.write("<table border='1' style='border-collapse: collapse; margin-bottom: 20px; text-align: center;'>");
document.write("<tr style='background-color: orange;'><th>x</th><th>op</th><th>y</th><th>result</th></tr>");

while (continueLoop) {
    let inputX = prompt("Enter the first number (x):");
    if (inputX === null) break;

    let op = prompt("Enter an operator (+, -, *, /, %):");
    if (op === null) break;

    let inputY = prompt("Enter the second number (y):");
    if (inputY === null) break;

    let x = parseFloat(inputX);
    let y = parseFloat(inputY);
    let result;
    let isError = false;

    if (isNaN(x) || isNaN(y)) {
        result = "wrong input number";
        isError = true;
    } else {
        switch (op) {
            case "+":
                result = x + y;
                break;
            case "-":
                result = x - y;
                break;
            case "*":
                result = x * y;
                break;
            case "/":
                result = y !== 0 ? x / y : "computation error";
                if (result === "computation error") isError = true;
                break;
            case "%":
                result = y !== 0 ? x % y : "computation error";
                if (result === "computation error") isError = true;
                break;
            default:
                result = "computation error";
                isError = true;
        }
    }

    if (!isError) {
        validResults.push(Number(result));
    }

    document.write("<tr><td>" + inputX + "</td><td>" + op + "</td><td>" + inputY + "</td><td>" + result + "</td></tr>");
}

document.write("</table>");

if (validResults.length > 0) {
    let min = Math.min(...validResults);
    let max = Math.max(...validResults);
    let total = validResults.reduce((acc, curr) => acc + curr, 0);
    let avg = total / validResults.length;

    document.write("<table border='1' style='border-collapse: collapse; text-align: center;'>");
    document.write("<tr style='background-color: orange;'><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
}