const one = document.getElementById('1').addEventListener('click', () => displayNum(1));
const two = document.getElementById('2').addEventListener('click', () => displayNum(2));
const three = document.getElementById('3').addEventListener('click', () => displayNum(3));
const four = document.getElementById('4').addEventListener('click', () => displayNum(4));
const five = document.getElementById('5').addEventListener('click', () => displayNum(5));
const six = document.getElementById('6').addEventListener('click', () => displayNum(6));
const seven = document.getElementById('7').addEventListener('click', () => displayNum(7));
const eight = document.getElementById('8').addEventListener('click', () => displayNum(8));
const nine = document.getElementById('9').addEventListener('click', () => displayNum(9));
const zero = document.getElementById('zero').addEventListener('click', () => displayNum(0));

let aNum = '';
let bNum = '';
const aNumDisp = document.getElementById('aNumDisp');
const bNumDisp = document.getElementById('bNumDisp');
const clear = document.getElementById('clear').addEventListener('click', () => clearDisplay());
const divide = document.getElementById('/').addEventListener('click', () => displayOperator('/'));
const dot = document.getElementById('dot').addEventListener('click', () => displayDot('.'));
const equals = document.getElementById('=').addEventListener('click', () => displayEquals(aNum, operator, bNum));
const equalsDisp = document.getElementById('equalsDisp');
const minus = document.getElementById('-').addEventListener('click', () => displayOperator('-'));
const mutliply = document.getElementById('*').addEventListener('click', () => displayOperator('*'));
const opDisp = document.getElementById('opDisp');
let operator = '';
const plus = document.getElementById('+').addEventListener('click', () => displayOperator('+'));
let result = '';
const resultDisp = document.getElementById('resultDisp');

function add(aNum, bNum){
    return result = aNum + bNum;
}

function divideBy(aNum, bNum){
    (bNum === 0) ? result = "bum bum!" : result = aNum / bNum;
}

function subtract(aNum, bNum){
    return result = aNum - bNum;
}

function multiply(aNum, bNum){
    return result = aNum * bNum;
}

function displayEquals(aNum, operator, bNum){
    if (aNum === '' || operator === '' || bNum === ''){
        return resultDisp.textContent = 'error!';
    } else {
        equalsDisp.textContent = '=';
        operate(aNum, bNum, operator);
    } 
    return result;
}

function displayNum(num){
    if (result != '' || resultDisp.textContent == 'error!') clearDisplay();

    opDisp.textContent == '' ? aNumDisp.textContent += num : 
    bNumDisp.textContent += num;
    resultDisp.textContent = '';
    operator == '' ? aNum = +aNumDisp.textContent : 
    bNum = +bNumDisp.textContent;
}

function displayOperator(operatorSelection){
    // IF aNum display is empty THEN
    if (aNumDisp.textContent == '') {
        //OUTPUT 'enter num' in result display
        resultDisp.textContent = 'enter num';
    //  ELSE IF aNum is not empty AND operator is empty
    } else {
        // OUPUT empty string in result display
        resultDisp.textContent = '';
        // OUTPUT operator selected by user in operator display
        opDisp.textContent = operatorSelection;
        // STORE operator selected in operator variable
        operator = operatorSelection;  

    } //ELSE IF operator display is not empty AND bNum is not empty
        // CONTINUE THIS TOMORROW
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
    // removing rounding function
    // result = result.toString(); 
    // if (result.length >= 11) result = roundNum(result);
    displayResult(result);
}

function displayDot(dot){
    if (result != '' || resultDisp.textContent == 'error!') clearDisplay();
    aNum = aNum.toString();
    bNum = bNum.toString();
    console.log(typeof aNumDisp.textContent)
    if (opDisp.textContent == '') {
        if (aNumDisp.textContent.includes('.')){
            return; //don't allow another dot
        } else aNumDisp.textContent += dot;
    } else {
        if (bNumDisp.textContent.includes('.')){
            return; //don't allow another dot
        } else bNumDisp.textContent += dot;
    }
    aNum = +aNum;
    bNum = +bNum;
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

// function roundNum(result){
//     let resultExpanded = Array.from(String(result));
//     if (resultExpanded[10] == 9){
//         ++resultExpanded[9]
//         resultExpanded[10] = 0;
//     } else if (resultExpanded[10] >= 5){
//         ++resultExpanded[10];
//     } else if (resultExpanded[10] < 5) {
//         --resultExpanded[10];
//     }    
//     let resultShortened = resultExpanded.slice(0, 11);
//     let newResult = resultShortened.join('');
//     return +newResult;
// }

// KEYBOARD SUPPORT
window.addEventListener('keydown', (e) => {
    // console.log(e);
    if (e.key === '0') {displayNum(0)};
    if (e.key === '1') {displayNum(1)};
    if (e.key === '2') {displayNum(2)};
    if (e.key === '3') {displayNum(3)};
    if (e.key === '4') {displayNum(4)};
    if (e.key === '5') {displayNum(5)};
    if (e.key === '6') {displayNum(6)};
    if (e.key === '7') {displayNum(7)};
    if (e.key === '8') {displayNum(8)};
    if (e.key === '9') {displayNum(9)};
    if (e.key === '.') {displayDot('.')};
    if (e.key === '+') {displayOperator('+')};
    if (e.key === '-') {displayOperator('-')};
    if (e.key === '/') {displayOperator('/')};
    if (e.key === '*') {displayOperator('*')};
    if (e.key === '=') {displayEquals(aNum, operator, bNum)};
    if (e.key === 'c' || e.key === 'C') {clearDisplay()};
});
    
// TEST CENTRE

/* SOLVE ONE PROBLEM AT A TIME
prep
1. separate displaying result out from operate function
2. make displayResult it's own function

INPUT operator
function one problem at a time() {
    IF bNum is not empty THEN
        CALL operate function
        OUTPUT result in aNumDisp
        opDisp equals operator selected
}

function displayResult() {
    IF equalsDisp is empty THEN
        DISPLAY result in aNumDisp
    ELSE IF equalsDips is not empty THEN
        DISPLAY result in resultsDisp
}



Input aNum
Input operator
Input bNum

Input second operator
    Display result in nNumDisp
    Display new operator input
    Clear input from bNumDisp

*/

function evalNextSum(aNum, operator, bNum){
    if (bNumDisp.textContent != ''){
        operate(aNum, operator, bNum);
        displayResult(result);
    }
}

function displayResult(result){
    if (equalsDisp.textContent == ''){
        aNumDisp.textContent = result;
        opDisp.textContent = '';
        bNumDisp.textContent = '';
        equalsDisp.textContent = '';
    } else {
        resultDisp.textContent = result;
    }
}

/*
PROBLEMS TO SOLVE
1. logic to solve one operation at a time.
2. back button



*/