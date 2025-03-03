function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    if (Number(num2) === 0) {
        return "ERROR";
    } else {
        return Math.floor(num1 / num2 * 100000) / 100000;
    };
}

function operate() {
    let result = "";
    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
    };

    num1 = result;
    num2 = "";
    operator = "";
    numToggle = false;
    displayText.textContent = result;
}

let num1 = "";
let num2 = "";
let operator = "";
let numToggle = false; // switches between num1 (false) and num2 (true)

const numBtns = document.querySelectorAll(".num");
const opBtns = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");

const displayContainer = document.querySelector(".display-container");
const displayText = document.querySelector(".display-text");

numBtns.forEach((button) => {
    button.addEventListener("click", () => {
        if (!numToggle) {
            num1 += button.textContent;
            displayText.textContent = num1;
        } else {
            num2 += button.textContent;
            displayText.textContent = num2;
        };
    });
});

opBtns.forEach((button) => {
    button.addEventListener("click", () => {
        operator = button.textContent;
        displayText.textContent = operator;
        if (!numToggle) {
            numToggle = !numToggle // switch to num2
        } else {
            operate();
        };
    });
});

equalBtn.addEventListener("click", () => {
    operate();
});

clearBtn.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    numToggle = false;
    displayText.textContent = 0;
});

