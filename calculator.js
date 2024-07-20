let add=(a,b)=>a+b;
let subtract=(a,b)=>a-b;
let multiply=(a,b)=>a*b;
let divide=(a,b)=>a/b;
let operate=(firstNumber,secondNumber,operator)=> {

    let result=undefined;
    switch(operator)
    {
        case "+":
            result=add(firstNumber,secondNumber);
            break;
        case "-":
            result=subtract(firstNumber,secondNumber);
            break;
        case "*":
            result=multiply(firstNumber,secondNumber);
            break;
        case "/":
            result=divide(firstNumber,secondNumber);
            break;
        default:
            result="Error";
            break;
    }
    return result;
};