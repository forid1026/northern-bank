// login button event handler
const loginButton = document.getElementById('loginBtn');
loginButton.addEventListener('click',function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = "block";
})

// deposit button event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click',function(){

    const depositNumber = getInputNumber("depositAmount");
    document.getElementById("depositAmount").value = "";
    
    //deposit balance 
    UpdateSpanText("currentDeposit", depositNumber);

    // TotalBalance
    UpdateSpanText("currentBalance", depositNumber);
    
})

// Withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
    const withdrawAmount  = getInputNumber("withdrawAmount");
    document.getElementById("withdrawAmount").innerHTML = withdrawAmount;
})

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;

}

function UpdateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalBalance = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalBalance;

}




