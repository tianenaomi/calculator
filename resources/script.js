const one = document.getElementById('1').addEventListener('click', () => pressNum(1));
const two = document.getElementById('2').addEventListener('click', () => pressNum(2));
const three = document.getElementById('3').addEventListener('click', () => pressNum(3));
const four = document.getElementById('4').addEventListener('click', () => pressNum(4));
const five = document.getElementById('5').addEventListener('click', () => pressNum(5));
const six = document.getElementById('6').addEventListener('click', () => pressNum(6));
const seven = document.getElementById('7').addEventListener('click', () => pressNum(7));
const eight = document.getElementById('8').addEventListener('click', () => pressNum(8));
const nine = document.getElementById('9').addEventListener('click', () => pressNum(9));
const zero = document.getElementById('0').addEventListener('click', () => pressNum(0));
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

function pressNum(num){
    display.textContent == 0 ? display.textContent = num : display.textContent += num;
    aNum == "" ? aNum = num : bNum = num; 
}

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