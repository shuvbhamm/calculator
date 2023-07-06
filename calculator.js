let display = document.getElementById("display") ;
let result = display.innerHTML;
let answer = '';
let finalAns
result = ' ';

function calculate(x){
    display.innerHTML = result+x
    result = display.innerHTML;
    answer = answer+x;
    console.log(answer)
}
function Result(){
    finalAns = eval(answer)
    display.innerHTML = finalAns
    result = finalAns
    answer=parseInt(result)
}
function clearDisplay(){
    result= ' ';
    display.innerHTML = "0"
    answer=''
    console.log("display cleared")
}