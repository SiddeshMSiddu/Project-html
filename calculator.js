let currentNumber='';
let prevNumber='';
let operation=null;

function appendNumber(number){
    currentNumber+=number;
    updateDisplay();

}
function setOperation(op){
    if(currentNumber === '')return;
    if(prevNumber !=='')calculate();
    operation=op;
    prevNumber=currentNumber;
    currentNumber='';
}
function updateDisplay(){
    document.getElementById("input").value=currentNumber;
}
function clearDisplay(){
    currentNumber='';
    prevNumber='';
    operation=null;
    updateDisplay()
}
function Clearlastnum(){
    currentNumber='';
    prevNumber='';
    operation=null;
    updateDisplay()
}

function calculate(){
    let result='';
    const prev=parseFloat(prevNumber);
    const curr=parseFloat(currentNumber);
    if(isNaN(prev)|| isNaN(curr)) return;
    switch(operation){
        case '+':
            result=prev+curr;
            break;
        case '-':
            result=prev-curr;
            break;
        case '*':
            result = prev * curr;
                break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;    
    }
    currentNumber=result;
    operation=null;
    prevNumber='';
    updateDisplay();


}

