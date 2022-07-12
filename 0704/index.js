let btn = document.getElementById("btn");

let sumBtn = document.getElementById("sumBtn");
let getId = document.getElementById("textId");
let colorBtn = document.getElementById("colorBtn")
let liData = document.getElementsByClassName("top-li")

function notification() {
    alert("안녕하세요");
}
function numSum(){
    let num1 = document.getElementById("first").value;
    let num2 = document.getElementById("seccend").value;
    let sum = Number(num1) + Number(num2)

    document.getElementById("result").value = sum
}
function changStr() {
    document.getElementById("getTextId").innerHTML = getId.value
}

function changeColor(){
    let box =  document.getElementById("backBox")
    box.style.backgroundColor = "blue";
}

btn.addEventListener("click",notification);
sumBtn.addEventListener("click",numSum);
getId.addEventListener("change",changStr);
colorBtn.addEventListener("click", changeColor)
