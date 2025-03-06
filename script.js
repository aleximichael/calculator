// Key Variables
let num1 = "";
let num2 = "";
let operator = "";
let numToggle = 1; // switch between 1 (Add to Num1), 2 (Add to Num2),and 0 (Reset Num1) 

// Display Text
const displayContainer = document.querySelector("#display-container");
const displayText = document.querySelector("#display-text");

// Keyboard + Button Input
const calcBtns = document.querySelector('#button-container');

calcBtns.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case "num":
            runNumber(target.textContent);
            break;
        case "operator":
            runOperator(target.textContent);
            break;
        case "equals":
            runEquals();
            break; 
        case "clear":
            runClear();
            break;
        case "delete":
            runDelete();
            break;
        case "neg":
            runInverse();
            break;
    };
});

document.addEventListener('keydown', (event) => {
    const numKeys = ['Digit1', 'Digit2', 'Digit3', 'Digit4',
        'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0'];

    if (event.shiftKey && event.code === 'Digit8') {
        runOperator('×'); // Multiplication symbol
    } else if(numKeys.includes(event.code)) {
        runNumber(event.code.slice(-1));
    } else if (event.shiftKey && event.code === 'Equal') {
        runOperator('+');
    } else if (event.code === 'Equal' || event.code === 'Enter') {
        runEquals();
    } else if (event.code === 'Slash') {
        runOperator('÷'); // Division symbol
    } else if (event.code === 'Minus') {
        runOperator('-');
    } else if (event.code === 'Backspace') {
        runDelete();
    } else if (event.code === 'Period') {
        runNumber('.');
    };
});

// Calculator Functions

function operate() {
    
    let result = "";

    num1 = Math.floor(Number(num1) * 1000); 
    num2 = Math.floor(Number(num2) * 1000);

    console.log(num1);
    console.log(num2);

    switch (operator) {
        case "+":
            result = (num1 + num2) / 1000;
            break;
        case "-":
            result = (num1 - num2) / 1000;
            break;
        case "÷":
            if (num2 === 0) {
                result = "ERROR";
            } else {
                result = num1  / num2;
            };
            break;
        case "×":
            result = num1 * num2 / (1000 * 1000);
            break;
    };
        
    result = result.toString();
    
    num1 = result;
    num2 = "";
    operator = "";
    numToggle = 0;
    displayText.textContent = result;
}

function runNumber(button) {

    if (numToggle === 0) {
        num1 = ""; // reset calculation if a number is entered immediately 
        // after getting a result
        numToggle = 1;
    };

    if (numToggle === 1) {
        if (!(button === '.' && num1.includes('.'))) { 
            num1 += button;
            displayText.textContent = num1;
        };
    } else if (numToggle === 2) {
        if (!(button === '.' && num2.includes('.'))) { 
            num2 += button;
            displayText.textContent = num2;
        };  
    };
}

function runOperator (button) {
    operator = button;
    displayText.textContent = operator;
    if (numToggle === 1 || numToggle === 0) {
        numToggle = 2; // switch to num2
    } else {
        operate();
    };
}

function runEquals() {
    if (numToggle === 2 || numToggle === 0) {
        operate(); // only operate if there are two numbers
    };  
}

function runClear() {
    num1 = "";
    num2 = "";
    operator = "";
    numToggle = 1;
    displayText.textContent = 0;
}

function runDelete() {
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
}

function runInverse() {
    if (numToggle === 1 || numToggle === 0) {
        num1 = (num1*-1).toString();
        displayText.textContent = num1;
    } else if (numToggle === 2) {
        num2 = (num2*-1).toString();
        displayText.textContent = num2;
    };
}