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
const digitKeys=document.querySelectorAll(".digits button");
const operatorKeys=document.querySelectorAll(".operators button");

// let array=Array.from(allKeys);
// console.log(allKeys.length);
// console.log(array[0]);
// const num9=document.querySelector("#num9");
// num9.addEventListener("click",event=>{
//     console.log(allKeys.item(17).id);
// });      converted to array

let firstNumber="undefined",secondNumber="undefined",operator="undefined";
let display=0
let screen=document.querySelector(".screen");
screen.textContent="";
function getNumber(key)
{
    switch(key.id)
        {
            
            case "num0":
                console.log(key.id);
                screen.textContent+=0;
                break;
            case "num1":
                console.log(key.id);
                screen.textContent+=1;
                break;
            case "num2":
                console.log(key.id);
                screen.textContent+=2;
                break;
            case "num3":
                console.log(key.id);
                screen.textContent+=3;
                break;
            case "num4":
                console.log(key.id);
                screen.textContent+=4;
                break;
            case "num5":
                console.log(key.id);
                screen.textContent+=5;
                break;
            case "num6":
                console.log(key.id);
                screen.textContent+=6;
                break;
            case "num7":
                console.log(key.id);
                screen.textContent+=7;
                break;
            case "num8":
                console.log(key.id);
                screen.textContent+=8;
                break;
            case "num9":
                console.log(key.id);
                screen.textContent+=9;
                break;
            case "numDEL":
                console.log(key.id);
                let str=screen.textContent
                screen.textContent=str.substring(0, str.length - 1);;
                break;
            case "numAC":
                screen.textContent="";
                firstNumber="undefined";
                secondNumber="undefined";
                operator="undefined";
                break;
            default:
                console.log("error");
                break;
        }
        if(!(screen.textContent===""))
            firstNumber=screen.textContent;
}
function getOperator(key)
{
    switch(key.id)
    {
        case "add":
            operator="+";
            break;
        case "subtract":
            operator="-";
            break;
        case "multiply":
            operator="x";
            break;
        case "divide":
            operator="/";
            break;
    }
    screen.textContent=screen.textContent+" "+operator+" ";
}
digitKeys.forEach((key)=>{

    if(secondNumber==="undefined")
    {
        key.addEventListener("click",(event)=>{        
            getNumber(key);
            console.log(firstNumber);  
        });
    }
    else
    {
        screen.textContent=operate(firstNumber,operator,secondNumber)
    }
});

operatorKeys.forEach((key)=>{

    key.addEventListener("click",(event)=>{
        if(firstNumber==="undefined")
            return;
        getOperator(key);
        console.log(firstNumber);
        console.log(key.id);
    });
});
