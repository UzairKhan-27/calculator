let add=(a,b)=>a+b;
let subtract=(a,b)=>a-b;
let multiply=(a,b)=>a*b;
let divide=(a,b)=>a/b;
let operate=(firstNumber,secondNumber,operator)=> {
    let result=undefined;
    switch(operator)
    {
        case "+":
            result=add(Number(firstNumber),Number(secondNumber));
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
const equals=document.querySelector("#equals");
let secondNumberFlag=0;
let firstNumber="",secondNumber="",operator="";
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
                if(secondNumberFlag===0)
                    firstNumber+=0;
                else
                    secondNumber+=0;
                break;
            case "num1":
                console.log(key.id);
                screen.textContent+=1;
                if(secondNumberFlag===0)
                    firstNumber+=1;
                else
                    secondNumber+=1;
                break;
            case "num2":
                console.log(key.id);
                screen.textContent+=2;
                if(secondNumberFlag===0)
                    firstNumber+=2;
                else
                    secondNumber+=2;
                break;
            case "num3":
                console.log(key.id);
                screen.textContent+=3;
                if(secondNumberFlag===0)
                    firstNumber+=3;
                else
                    secondNumber+=3;
                break;
            case "num4":
                console.log(key.id);
                screen.textContent+=4;
                if(secondNumberFlag===0)
                    firstNumber+=4;
                else
                    secondNumber+=4;
                break;
            case "num5":
                console.log(key.id);
                screen.textContent+=5;
                if(secondNumberFlag===0)
                    firstNumber+=5;
                else
                    secondNumber+=5;
                break;
            case "num6":
                console.log(key.id);
                screen.textContent+=6;
                if(secondNumberFlag===0)
                    firstNumber+=6;
                else
                    secondNumber+=6;
                break;
            case "num7":
                console.log(key.id);
                screen.textContent+=7;
                if(secondNumberFlag===0)
                    firstNumber+=7;
                else
                    secondNumber+=7;
                break;
            case "num8":
                console.log(key.id);
                screen.textContent+=8;
                if(secondNumberFlag===0)
                    firstNumber+=8;
                else
                    secondNumber+=8;
                break;
            case "num9":
                console.log(key.id);
                screen.textContent+=9;
                if(secondNumberFlag===0)
                    firstNumber+=9;
                else
                    secondNumber+=9;
                break;
            case "numDEL":
                console.log(key.id);
                let str=screen.textContent
                screen.textContent=str.substring(0, str.length - 1);;
                break;
            case "numAC":
                screen.textContent="";
                firstNumber="";
                secondNumber="";
                operator="";
                secondNumberFlag=0;
                break;
            default:
                console.log("error");
                break;
        }
   
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
            operator="*";
            break;
        case "divide":
            operator="/";
            break;
    }
    // screen.textContent=screen.textContent+" "+operator+" ";
    screen.textContent=firstNumber+operator+secondNumber;
}
digitKeys.forEach((key)=>{

    
    key.addEventListener("click",(event)=>{ 
        
        getNumber(key);
        console.log(firstNumber);  
        // else
        // {
        //     screen.textContent=operate(firstNumber,secondNumber,operator);
        //     firstNumber=screen.textContent;
        //     console.log("HERE BC");
        // }
    });
    
});

operatorKeys.forEach((key)=>{

    key.addEventListener("click",(event)=>{
        if(firstNumber==="")
            return;
        if(!(firstNumber==="" || secondNumber===""))
        {
            screen.textContent=operate(firstNumber,secondNumber,operator);
            firstNumber=screen.textContent;
            console.log("HERE BC");
            secondNumber=""; 
        }
        getOperator(key);
        secondNumberFlag=!secondNumberFlag;
        console.log(firstNumber);
        console.log(key.id);
    });
});
equals.addEventListener("click",(event)=>{
    if(firstNumber!=="" && secondNumber!=="" && operator!=="")
    {
        screen.textContent=operate(firstNumber,secondNumber,operator);
        firstNumber=screen.textContent;
        console.log("EQUALS");
        secondNumber=""; 
        secondNumberFlag=0;
    }
    else
        return;
});
