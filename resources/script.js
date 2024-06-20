const one = document.getElementById('1').addEventListener('click', () => displayNum(1));
const two = document.getElementById('2').addEventListener('click', () => displayNum(2));
const three = document.getElementById('3').addEventListener('click', () => displayNum(3));
const four = document.getElementById('4').addEventListener('click', () => displayNum(4));
const five = document.getElementById('5').addEventListener('click', () => displayNum(5));
const six = document.getElementById('6').addEventListener('click', () => displayNum(6));
const seven = document.getElementById('7').addEventListener('click', () => displayNum(7));
const eight = document.getElementById('8').addEventListener('click', () => displayNum(8));
const nine = document.getElementById('9').addEventListener('click', () => displayNum(9));
const zero = document.getElementById('0').addEventListener('click', () => displayNum(0));

const clear = document.getElementById('clear');
const display = document.getElementById('display');
const divide = document.getElementById('/').addEventListener('click', () => displayOperator('/'));
const equals = document.getElementById('=');
const minus = document.getElementById('-').addEventListener('click', () => displayOperator('-'));
const mutliply = document.getElementById('*').addEventListener('click', () => displayOperator('*'));
const plus = document.getElementById('+').addEventListener('click', () => displayOperator('+'));


let aNum = '';
let bNum = '';
let operator = '';
let result = '';
let displayValue;

function add(aNum, bNum){
    return result = aNum + bNum;
}

function divideBy(aNum, bNum){
    return result = aNum / bNum;
}

function subtract(aNum, bNum){
    return result = aNum - bNum;
}

function multiply(aNum, bNum){
    return result = aNum * bNum;
}

function operate(aNum, bNum, operator){
    if (operator == '+') {
        add(aNum, bNum);
    } else if (operator == '-'){
        subtract(aNum, bNum);
    } else if (operator == '*'){
        multiply(aNum, bNum);
    } else if (operator == '/'){
        divideBy(aNum, bNum);
    }
    return display.textContent = result;
    //add logic to clear last answer
}

function displayNum(num){
    if (result != '') clearDisplay();
    (display.textContent == 0 
    || display.textContent == 'enter num' 
    || display.textContent.includes('+') 
    || display.textContent.includes('-') 
    || display.textContent.includes('*') 
    || display.textContent.includes('/'))
        ? display.textContent = num : display.textContent += num;
    aNum == '' ? aNum = num : bNum = num;
}

function displayOperator(operatorSelection){
    if (display.textContent == 0 || display.textContent == '') {
        display.textContent = 'enter num';
    } else {
        display.textContent = operatorSelection;
        operator = operatorSelection;  
    }
    //add logic for CSS button pressed
}

equals.addEventListener('click', () => operate(aNum, bNum, operator));

clear.addEventListener('click', () => clearDisplay());

function clearDisplay() {
    display.textContent = "0"
    aNum = '';
    bNum = '';
    operator = ''; 
    result = ''; 
}

