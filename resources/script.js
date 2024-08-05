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
const back = document.getElementById('back').addEventListener('click', () => undoLast());
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
    if (operator == ''){
        aNum = +aNumDisp.textContent; 
    } else {
        bNum = +bNumDisp.textContent;
    }
}

function displayOperator(operatorSelection){
    if (aNumDisp.textContent == '') {
        resultDisp.textContent = 'enter num';
    } else if (bNumDisp.textContent != ''){
        operate(aNum, bNum, operator);
        displayResult(result);
        aNum = result;
        opDisp.textContent = operatorSelection;
        operator = operatorSelection;  
        bNumDisp.textContent = '';
        bNum = '';
        result = '';
    } else {
        opDisp.textContent = operatorSelection;
        operator = operatorSelection; 
    } 
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
    displayResult(result);
    // removing rounding function
    // result = result.toString(); 
    // if (result.length >= 11) result = roundNum(result);
}

function displayResult(result){
    if (equalsDisp.textContent == ''){
        aNumDisp.textContent = result;
    } else {
        resultDisp.textContent = result;
    }
}

function displayDot(dot){
    if (result != '' || resultDisp.textContent == 'error!') clearDisplay();
    aNum = aNum.toString();
    bNum = bNum.toString();
    if (opDisp.textContent == '') {
        if (aNumDisp.textContent.includes('.')){
            return;
        } else {
            aNumDisp.textContent += dot;
        }
    } else {
        if (bNumDisp.textContent.includes('.')){
            return; 
        } else {
            bNumDisp.textContent += dot;
        }    
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

function undoLast(){
    if (resultDisp.textContent != '') {
        ;
    } else if (opDisp.textContent == '') {
        aNumDisp.textContent = aNumDisp.textContent.slice(0, -1); 
    } else if (opDisp.textContent != '' && bNumDisp.textContent == ''){
       opDisp.textContent = '';
    } else {
        bNumDisp.textContent = bNumDisp.textContent.slice(0, -1);
    }
    if (aNumDisp.textContent == '' && resultDisp.textContent == '') resultDisp.textContent = '0';
}

window.addEventListener('keydown', (e) => {
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
    if (e.key === '='|| e.key === 'Enter') {displayEquals(aNum, operator, bNum)};
    if (e.key === 'c' || e.key === 'C') {clearDisplay()};
    if (e.key === 'Backspace') {undoLast()};
});
    
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