var userAction = document.querySelector('.user-action');
var userBalance = document.querySelector('.amount');
var transationReciept = document.querySelector('.receipt ul');
var Reciept = document.querySelector('.receipt');
var display =document.querySelector('.screen');
var btns = document.querySelectorAll('.number-pad button');

var clearBtn = document.querySelectorAll('.number-pad button')[3];
var depositBtn = document.querySelectorAll('.number-pad button')[7];
var withdrawBtn = document.querySelectorAll('.number-pad button')[11];
var receiptBtn = document.querySelector('.action-btn-bottom');


// TODO find a better method for assigning the buttons
var oneBtn = document.querySelectorAll('.number-pad button')[0];
var twoBtn = document.querySelectorAll('.number-pad button')[1];
var threeBtn = document.querySelectorAll('.number-pad button')[2];
var fourBtn = document.querySelectorAll('.number-pad button')[4];
var fiveBtn = document.querySelectorAll('.number-pad button')[5];
var sixBtn = document.querySelectorAll('.number-pad button')[6];
var sevenBtn = document.querySelectorAll('.number-pad button')[8];
var eightBtn = document.querySelectorAll('.number-pad button')[9];
var nineBtn = document.querySelectorAll('.number-pad button')[10];

Reciept.style.visibility = "hidden";
display.style.backgroundColor = "rgb(100, 115, 184)";

function clear(){
    userAction.textContent = "";
}

function deposit(){
    display.style.backgroundColor = "rgb(100, 115, 184)";
    userBalance.textContent = Number(userBalance.textContent) + Number(userAction.textContent);
    // TODO could make a function for adding to receipt
    var node = document.createElement('li');
    var textNode = document.createTextNode(`+$ ${userAction.textContent}`);
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
        var node = document.createElement('li');
        var textNode = document.createTextNode(`-$ ${userAction.textContent}`);
        node.appendChild(textNode);
        transationReciept.appendChild(node) 
    }
    
}

function getReciept(){
    if(Reciept.style.visibility = "hidden"){
        Reciept.style.visibility = "visible";
        Reciept.style.transform = "scaleY(1)";
    }else{
        Reciept.style.visibility = "hidden";
        // transition: width 2s;
    }
}


// function callback(btnPressed){
function append(btnPressed){
    userAction.textContent =  userAction.textContent + btnPressed.textContent;

}
// }

function listen(btn){
    btn.addEventListener('click', function(){
        append(btn)
    })
}


listen(oneBtn)
listen(twoBtn)
listen(threeBtn)
listen(fourBtn)
listen(fiveBtn)
listen(sixBtn)
listen(sevenBtn)
listen(eightBtn)


receiptBtn.addEventListener('click', getReciept);
clearBtn.addEventListener('click', clear);
depositBtn.addEventListener('click', deposit);
withdrawBtn.addEventListener('click', withdraw);



