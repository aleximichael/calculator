function add(num1, num2) {
    return (Number(num1) + Number(num2)) * 100000 / 100000;
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
    numToggle = 0;
    displayText.textContent = result;
}

let num1 = "";
let num2 = "";
let operator = "";
let numToggle = 1; // switch between 1 (Add to Num1), 2 (Add to Num2), and 0 (Reset Num1) 

const numBtns = document.querySelectorAll(".num");
const opBtns = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".delete");

const displayContainer = document.querySelector(".display-container");
const displayText = document.querySelector(".display-text");

numBtns.forEach((button) => {
    button.addEventListener("click", () => {

        if (numToggle === 0) {
            num1 = "";
            numToggle = 1;
        }

        if (numToggle === 1) {
            if (!(button.textContent === "." && num1.includes('.'))) {
                num1 += button.textContent;
                displayText.textContent = num1;
            };
        } else if (numToggle === 2) {
            if (!(button.textContent === "." && num2.includes('.'))) {
                num2 += button.textContent;
                displayText.textContent = num2;
            };
        };

    });
});

opBtns.forEach((button) => {
    button.addEventListener("click", () => {
        operator = button.textContent;
        displayText.textContent = operator;
        if (numToggle === 1 || numToggle === 0) {
            numToggle = 2; // switch to num2
        } else {
            operate();
        };
    });
});

equalBtn.addEventListener("click", () => {
    if (numToggle === 2) {
        operate();
    };
});

clearBtn.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    numToggle = 1;
    displayText.textContent = 0;
});

delBtn.addEventListener("click", () => {
    
    if (num2 !== "") {
        num2 = num2.slice(0,-1);
    } else if (operator !== "") {
        operator = "";
    } else if (num1 !== "") {
        num1 = num1.slice(0,-1);
    };

    if (num2 !== "") {
        displayText.textContent = num2;
    } else if (operator !== "") {
        displayText.textContent = operator;
    } else if (num1 !== "") {
        displayText.textContent = num1;
    } else {
        displayText.textContent = 0;
    };
});