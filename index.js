//分数计算器
function score(){
let score = +prompt("Enter your score: ")
while (!score && score) {
    alert("Please enter your score")
    score = +prompt("Enter your score: ")
}
if (score >= 700){
    alert("You are a genius")
    document.write(`<h1> You are a genius </h1>`)
} else{
    alert("You need to work harder")
    document.write(`<h1> You need to work harder </h1>`)
}
}
 


//--------------------------------------------------------------------------
//登陆系统
function login(){
const name = "admin"
const password = "123456"
let status = 0
while (status == 0){
    let EnterName = prompt("Enter your username: ")
    let EnterPassword = prompt("Enter your password: ")
        if (EnterName === name && EnterPassword === password){
            status = 1
        } else{
            alert("Please enter your correct username and password")
        }
}
if (status === 1){
    alert("Welcome")
    document.write(`<h1> Welcome </h1>`)
} 
}

//--------------------------------------------------------------------------
//闰年计算器
function year(){
let status = 0
let year
while (status === 0){
    year = +prompt("Enter a year: ")
    if (year%4 === 0 && year%100 !==0 || year%400 === 0){
        status = 1
        alert("This is a leap year")
        document.write(`<h1> This is a leap year </h1>`)
    } else if (!isNaN(year)){
        status = 1
        alert("This is not a leap year")
        document.write(`<h1> This is not a leap year </h1>`)
    } else{
        alert("please enter a year")
    }

}  
}
//--------------------------------------------------------------------------
//成绩判断
//user input
function score1(){
let status = 0;
let score;
while (status === 0){
score = +prompt('Please input your score')
if (isNaN(score) || score < 0 || score > 100){
    alert("Please enter a number")
    status = 0

} else if (score >= 90){
    alert("You are a genius")
    document.write(`<h1> You are a genius </h1>`)
    status = 1
} else if (score >= 70 && score < 90){
    alert("You are a good student")
    document.write(`<h1> You are a good student </h1>`)
    status = 2
    
} else if (score >=60 && score < 70){
    alert("You are a normal student")
    document.write(`<h1> You are a normal student </h1>`)
    status = 3
} else{
    alert("You need to work harder")
    document.write(`<h1> You need to work harder </h1>`)
    status = 4
}
}
}
//--------------------------------------------------------------
//数字比较
function compare(){
let input = +prompt('please enter a number')
let input2 = +prompt('please enter another number')
input > input2 ? alert('The first number is greater than the second number') : alert('The first number is less than the second number') 

}

//自动补0
function Zero(){
let input1 = +prompt('please enter a number')
input1 < 10 ? alert(`0${input1}`) : alert(input1)

}


//---------------------------------------------------------------
//计算器
function calculator(){
    let num1 = +prompt('please enter a number')
    let num2 = +prompt('please enter another number')
    let operator = prompt('please enter an operator')
    switch (operator) {
        case "+":
            alert(num1 + num2)
            break;
        case "-":
            alert(num1 - num2)
            break;
        case "*":
            alert(num1 * num2)
            break;
        case "/":
            alert(num1 / num2)
            break;
        default:
            alert('please enter a valid operator')
            break;
}
}
//---------------------------------------------------------------------
//love
function love(){
    let status = true
    while(status){
        love = prompt('Do you love me?')
        if (love === 'yes' || love === 'Yes' || love === 'YES'){
            alert("I love you too mua mua mua mua")
            status = false
        }
    }
}
for (let i = 0; i<9; i++) {
document.getElementById("score").onclick = function() {
    score()
}
document.getElementById("login").onclick = function(){
    login()
}
document.getElementById("year").onclick = function(){
    year()
}
document.getElementById("score1").onclick = function(){
    score1()
}
document.getElementById("compare").onclick = function(){
    compare()
}
document.getElementById("Zero").onclick = function(){
    Zero()
}
document.getElementById("calculator").onclick = function(){
    calculator()
}
document.getElementById("love").onclick = function(){
    love()
}
}