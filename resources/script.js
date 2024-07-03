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

const aNumDisp = document.getElementById('aNumDisp');
const bNumDisp = document.getElementById('bNumDisp');
const clear = document.getElementById('clear').addEventListener('click', () => clearDisplay());
const divide = document.getElementById('/').addEventListener('click', () => displayOperator('/'));
const dot = document.getElementById('.').addEventListener('click', () => displayOperator('.'));
const equals = document.getElementById('=').addEventListener('click', () => operate(aNum, bNum, operator));
const equalsDisp = document.getElementById('equalsDisp');
const minus = document.getElementById('-').addEventListener('click', () => displayOperator('-'));
const mutliply = document.getElementById('*').addEventListener('click', () => displayOperator('*'));
const opDisp = document.getElementById('opDisp');
const plus = document.getElementById('+').addEventListener('click', () => displayOperator('+'));
const resultDisp = document.getElementById('resultDisp');

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
    equalsDisp.textContent = '=';
    if (operator == '+') {
        add(aNum, bNum);
    } else if (operator == '-'){
        subtract(aNum, bNum);
    } else if (operator == '*'){
        multiply(aNum, bNum);
    } else if (operator == '/'){
        divideBy(aNum, bNum);
    }
    result = result.toString(); 
    if (result.length >= 11) result = roundNum(result);
    return resultDisp.textContent = result;
}

function displayNum(num){
    if (result != '') clearDisplay();
    opDisp.textContent == '' ? aNumDisp.textContent += num : 
    bNumDisp.textContent += num;
    resultDisp.textContent = '';
    // STORING VARIABLES
    operator == '' ? aNum = +aNumDisp.textContent : 
    bNum = +bNumDisp.textContent;
}

function displayOperator(operatorSelection){
    if (aNumDisp.textContent == '') {
        resultDisp.textContent = 'enter num';
    } else {
        opDisp.textContent = operatorSelection;
        operator = operatorSelection;  
    }
    //add logic for CSS button pressed
}

function clearDisplay() {
    resultDisp.textContent = '0';
    aNumDisp.textContent = '';
    opDisp.textContent = '';
    bNumDisp.textContent = '';
    equalsDisp.textContent = '';
    aNum = '';
    bNum = '';
    operator = ''; 
    result = ''; 
}

function roundNum(result){
    let resultExpanded = Array.from(String(result));
    if (resultExpanded[10] == 9){
        ++resultExpanded[9]
        resultExpanded[10] = 0;
    } else if (resultExpanded[10] >= 5){
        ++resultExpanded[10];
    } else if (resultExpanded[10] < 5) {
        --resultExpanded[10];
    }    
    let resultShortened = resultExpanded.slice(0, 11);
    let newResult = resultShortened.join('');
    return +newResult;
}

// TEST KEYBOARD SUPPORT
// resultDisp.focus().addEventListener('keydown', (event) => {
//     // console.log(`key=${event.key}, code=${event.code}`);
//     let key = event.key;
//     // if (key == 0) {resultDisp.textContent = 0};
//     if (key == 1) {resultDisp.textContent = 1};
//     // if (key == 2) {resultDisp.textContent = 2};
//     // if (key == 3) {resultDisp.textContent = 3};
//     // if (key == 4) {resultDisp.textContent = 4};
//     // if (key == 5) {resultDisp.textContent = 5};
//     // if (key == 6) {resultDisp.textContent = 6};
//     // if (key == 7) {resultDisp.textContent = 7};
//     // if (key == 8) {resultDisp.textContent = 8};
//     // if (key == 9) {resultDisp.textContent = 9};
// });

// TEST CENTRE
// console.log(roundNum(1.666666669999999)); //1.6666666670
// console.log(roundNum(1.6666666666666667)); //1.6666666667
// console.log(roundNum(1.6666666644444444)); //1.6666666665


/*
PROBLEMS TO SOLVE
2. add logic for floating numbers
3. add keyboard support
*/