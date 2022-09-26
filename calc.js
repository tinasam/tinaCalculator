// User clicks a number button
const zero = document.querySelector("#CE");
// const zero = document.getElementById("#CE");
const clearCalc = document.querySelector("#clear");
const backbutton = document.querySelector("#back");
const symbol = document.querySelectorAll(".symbol")
const callNumButton = document.querySelectorAll(".number");
const equalSymbol = document.querySelector("#equalSym");
const posnegSymbyol = document.querySelector("#posnegSym");
const entryScreen = document.querySelector("#calc-box_entry");
const entryResult = document.querySelector("#calc-box_result");

zero.addEventListener("click",(event) => {
    entryScreen.innerHTML = "0";
});

clearCalc.addEventListener("click", (event) => {
    entryScreen.innerHTML = " ";
});

backbutton.addEventListener("click", (event) => {
    entryScreen.innerHTML = " ";
});

callNumButton.forEach((number) => {
    number.addEventListener("click",(event)=>{
    entryScreen.innerHTML += number.innerHTML;
})
});


    
    
    
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
// let result;
// const calculate = (num1, num2, operator) => {
//     if (operator === "*") {
//         result = num1 * num2;
//     } else if (operator === "+") {
//         result = num1 + num2;
//     } else if (operator === "-") {
//        result = num1 - num2;
//     } else {
//         result = num1/num2;
//     } 
//     return result;
// };
// alert("the result is " + calculate(num1, num2, operator));
