// User clicks a number button
const zero = document.querySelector("#CE");
const clearCalc = document.querySelector("#clear");
const backbutton = document.querySelector("#back");
const symbol = document.querySelectorAll(".symbol")
const callNumButton = document.querySelectorAll(".number");
const equalSymbol = document.querySelector("#equalSym");
const posnegSymbyol = document.querySelector("#posnegSym");
const entryScreen = document.querySelector("#calc-box_entry");
const entryResult = document.querySelector("#calc-box_result");
let num1;
let num2;
let operator;

zero.addEventListener("click",(event) => {
    entryScreen.innerHTML = "0";
});

clearCalc.addEventListener("click", (event) => {
    entryScreen.innerHTML = " ";
    entryResult.innerHTML = " ";
});

backbutton.addEventListener("click", (event) => {
    entryScreen.innerHTML = " ";
});

callNumButton.forEach((number) => {
    number.addEventListener("click",(event)=>{
    entryScreen.innerHTML += number.innerHTML;
})
});

symbol.forEach((opers) => {
    opers.addEventListener("click" ,(event) => {
        num1 = entryScreen.innerHTML;
        console.log(num1);
        entryScreen.innerHTML = opers.innerHTML;
        operator = entryScreen.innerHTML;
        entryScreen.innerHTML = " ";
        console.log(operator);
    })
});


equalSymbol.addEventListener("click", (event) => {
    num2 = entryScreen.innerHTML;
    console.log(num2);
    entryScreen.innerHTML = "=";
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
const calculate = () => {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    console.log(num1, num2);
    if (operator == "*") {
        entryResult.innerHTML = num1 * num2;
    } else if (operator == "+") {
        entryResult.innerHTML = num1 + num2;
    } else if (operator == "-") {
        entryResult.innerHTML = num1 - num2;
    } else if (operator == "/") {
        entryResult.innerHTML = num1/num2;
    } else {
        entryResult.innerHTML = "Not Valid";
    }
};

equalSymbol.addEventListener("click", calculate);
