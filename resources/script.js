const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('0');
const integer = document.querySelectorAll('.integer');
const operator = document.querySelectorAll('.operator');

const clear = document.getElementById('clear').addEventListener('click', () => {
    display.textContent = "0"
});
const decimal = document.getElementById('.').addEventListener('click', () => {
    display.textContent += "."
});
const display = document.getElementById('display');
const divide = document.getElementById('/').addEventListener('click', () => {
    display.textContent += "/"
    // add logic to display single operator only
});
const equals = document.getElementById('=').addEventListener('click', () => {
    display.textContent = "=" //PLACEHOLDER: actually don't want this displayed. 
});
const minus = document.getElementById('-').addEventListener('click', () => {
    display.textContent += "-"
    // add logic to display single operator only
});
const mutliply = document.getElementById('*').addEventListener('click', () => {
    display.textContent += "*"
    // add logic to display single operator only
});
const plus = document.getElementById('+').addEventListener('click', () => {
    display.textContent += "+"
    // add logic to display single operator only
});
let aNum = "";
let bNum = "";
let result;

// Event listeners to display integers
one.addEventListener('click', () => {
    display.textContent == 0 ? display.textContent = 1 : display.textContent += 1;
    aNum == "" ? aNum = 1 : bNum = 1;
});
two.addEventListener('click', () => {
    display.textContent == 0 ? display.textContent = 2 : display.textContent += 2;
    aNum == "" ? aNum = 1 : bNum = 2;
});
three.addEventListener('click', () => {
    display.textContent == 0 ? display.textContent = 3 : display.textContent += 3
});
four.addEventListener('click', () => {
    display.textContent == 0 ? display.textContent = 4 : display.textContent += 4
});
five.addEventListener('click', () => {
    display.textContent == 0 ? display.textContent = 5 : display.textContent += 5
});
six.addEventListener('click', () => {
    display.textContent == 0 ? display.textContent = 6 : display.textContent += 6
});
seven.addEventListener('click', () => {
    display.textContent == 0 ? display.textContent = 7 : display.textContent += 7
});
eight.addEventListener('click', () => {
    display.textContent == 0 ? display.textContent = 8 : display.textContent += 8
});
nine.addEventListener('click', () => {
    display.textContent == 0 ? display.textContent = 9 : display.textContent += 9
});
zero.addEventListener('click', () => {
    display.textContent == 0 ? display.textContent = 0 : display.textContent += 0
});

plus.addEventListener('click', (aNum, bNum) => {
    result = aNum + bNum;
});

equals.addEventListener('click', (result) => {
    result;
    // result to be added to display 
});

function operate(){

}

/*
POUR MOI POUR LE LUNDI
- started on logic for adding integers to either aNum or bNum
- began equals event listener

*/

/*
PSEUDOCODE
OBTAIN first num
OBTAIN operator
OBTAIN second num
INVOKE equals

*/