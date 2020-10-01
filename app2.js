var userAction = document.querySelector('.user-action');
var userBalance = document.querySelector('.amount');
var transationReciept = document.querySelector('.receipt ul');
var Reciept = document.querySelector('.receipt');
var display =document.querySelector('.screen');
var btns = document.querySelectorAll('.number-pad button');


var btns = document.querySelectorAll('button');


function clear(){
    userAction.textContent = "";
}

function deposit(){
    display.style.backgroundColor = "rgb(100, 115, 184)";
    userBalance.textContent = Number(userBalance.textContent) + Number(userAction.textContent);
    writeReciept("+$");
}


function writeReciept(sign){
    var node = document.createElement('li');
    var textNode = document.createTextNode(`${sign} ${userAction.textContent}`);
    node.appendChild(textNode);
    transationReciept.appendChild(node) 

}
function withdraw(){
    if((Number(userBalance.textContent) - Number(userAction.textContent)) <= 0){
        display.style.backgroundColor = "red";
        // alert("not enough funds for this transaction");

    }else{
        display.style.backgroundColor = "rgb(100, 115, 184)";
        userBalance.textContent = Number(userBalance.textContent) - Number(userAction.textContent);
        writeReciept("-$");
    }
    
}

function getReciept(){
    if(Reciept.style.visibility = "hidden"){
        Reciept.style.visibility = "visible";
        Reciept.style.transform = "scaleY(1)";
    }else{
        Reciept.style.visibility = "hidden";
    }
}


function clickHandler(event){
    if(event.target.textContent == "DEPOSIT"){
        deposit();
    }else if(event.target.textContent == "WITHDRAW"){
        withdraw();
    }else if(event.target.textContent == "CLEAR"){
        clear();
    }else if(event.target.textContent == "GET RECEIPT"){
        getReciept();
    }else{
        userAction.textContent = userAction.textContent + event.target.textContent;
        // console.log(event.target)
    }
}
for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', clickHandler);
}

