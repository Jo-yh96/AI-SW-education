let plusBtn = document.getElementById("plusBtn");
let minusBtn = document.getElementById("minusBtn")
let resultBtn = document.getElementById("resultBtn")
let result = document.getElementById("result")

function plus(){
    let num = document.getElementById("num").value;
    num++;
    document.getElementById("num").value = num;
}

function minus(){
    let num = document.getElementById("num").value;
    if(num > 0){
        num--;
        document.getElementById("num").value = num;
    }else {
        num = 0
        document.getElementById("num").value = num;
    }
}

function checkedMenu() {
    let menu = document.getElementsByName("menu")
    console.log(menu)
    let str = ""
    for(let i = 0; i< menu.length; i++){
        if(menu[i].checked){
            str += menu[i].value + "<br>"
        }
    }
    result.innerHTML = "<h1>" + str + "</h1>";
}

plusBtn.addEventListener("click",plus)
minusBtn.addEventListener("click",minus)
resultBtn.addEventListener("click",checkedMenu)