// User clicks a number button





// const ceeEE = document.querySelector("#CE");


// const clearCalc = document.querySelector("#clear");

// const backbutton = document.querySelector("#back");

// const divbutton = document.querySelector("#div");

// const callNumButton = document.querySelectorAll(".7");


var changeToOrangeColor = () => {
    document.getElementById("CE").style.color = "darkorange";
}
var changeToBlack = () => {
    document.getElementById("CE").style.color = "black";
}
// var changeToOrangeColor = () => {
//     document.getElementById("C").style.color = "darkorange";
// }
// var changeToBlack = () => {
//     document.getElementById("C").style.color = "black";
// }




    // User continues to click numbers
    // Each number is added to the FIRST NUMBER
    // FIRST NUMBER is shown on the screen
// User clicks an operator button
    // OPERATOR is stored in a variable
// User clicks more number buttons
    // Creating SECOND NUMBER
    // SECOND NUMBER is shown on the screen
// User clicks equals button
    // CALCULATE function uses FIRST NUMBER, SECOND NUMBER and OPERATOR to create the RESULT
// RESULT is shown on the screen

    


    
    
    
// CALCULATE FUNCTION
    // - can ADD, SUBTRACT, DIVIDE or MULTIPLY
    // - can PERCENTAGE
    // - can SQUARE ROOT
    // - can handle three or more numbers

// const num1 = Number(prompt("Enter the first number: "));
// const operator = prompt("Enter the operator: ");
// const num2 = Number(prompt("Second number: "));
// // const result = prompt(" The result is" + result);
// alert(`${num1} ${operator} ${num2}`);

// CODE below gives calculation for multiplication, addition, subtraction and division
let result;
const calculate = (num1, num2, operator) => {
    if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
       result = num1 - num2;
    } else {
        result = num1/num2;
    } 
    return result;
};
alert("the result is " + calculate(num1, num2, operator));
