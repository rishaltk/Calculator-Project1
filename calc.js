let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';

function appendToDisplay(value) {
    display.value += value;
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    display.value = '';
}
function clearAll() {
    currentInput = '';
    currentOperator = '';
    clearDisplay();
}

function setOperator(operator) {
    currentInput = display.value;
    currentOperator = operator;
    clearDisplay();
}
function calculatePercentage() {
    let inputValue = display.value;
    if (inputValue !== '') {
        display.value = parseFloat(inputValue) / 100;
    }
}

let darkMode = false; // Initial dark mode state

function toggleDarkMode() {
    darkMode = !darkMode; // Toggle dark mode state

    // Get the toggle button element
    const toggleButton = document.getElementById('toggleMode');

    // Change the button text or inner HTML based on the dark mode state
    toggleButton.innerHTML = darkMode ? '☼' : '☾';

    // You can also apply additional styles for dark mode if needed
    if (darkMode) {
        document.body.classList.add('dark-mode'); // Assuming you have a dark mode CSS class
    } else {
        document.body.classList.remove('dark-mode');
    }

    // Add other dark mode toggling logic here if necessary
}


function calculate() {
    let secondInput = display.value;
    if (currentInput !== '' && secondInput !== '') {
        switch (currentOperator) {
            case '+':
                display.value = parseFloat(currentInput) + parseFloat(secondInput);
                break;
            case '-':
                display.value = parseFloat(currentInput) - parseFloat(secondInput);
                break;
            case '*':
                display.value = parseFloat(currentInput) * parseFloat(secondInput);
                break;
            case '/':
                display.value = parseFloat(currentInput) / parseFloat(secondInput);
                break;
            case '%':
                display.value = parseFloat(currentInput) % parseFloat(secondInput);
                break;
            default:
                break;
        }
        currentInput = '';
        currentOperator = '';
    }
}
// Event listeners for each button
document.getElementById('add').addEventListener('click', () => setOperator('+'));
document.getElementById('subtract').addEventListener('click', () => setOperator('-'));
document.getElementById('multiply').addEventListener('click', () => setOperator('*'));
document.getElementById('divide').addEventListener('click', () => setOperator('/'));
document.getElementById('backspace').addEventListener('click', backspace);
document.getElementById('clear').addEventListener('click', clearAll);
document.getElementById('equals').addEventListener('click', calculate);
document.getElementById('percentage').addEventListener('click', calculatePercentage);

