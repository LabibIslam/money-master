/* input value function */

function inputValue(inputId){
const priceInput = document.getElementById(inputId + '-input');
let inputAmountText = priceInput.value;
const inputAmount = parseFloat(inputAmountText);
if(typeof inputAmount == 'number' && inputAmount > 0){
    return inputAmount;
}

/* error massage */

else {
    try {
        alert("Please enter a correct number.");
        }
    catch(err) {
        document.getElementById("error").innerHTML = err.message;
        }
}

}

/* total expence calculation */

function expence(){
    const foodAmount = inputValue('food');
    const rentAmount = inputValue('rent');
    const clothesAmount = inputValue('clothes');
    const totalExpence = foodAmount + rentAmount + clothesAmount;
    return totalExpence;
}

 /* total balance calculation */

function reminingIncome(){
    const income = inputValue('income');
    const incomeExpence = expence(); 
    const totalBalance = income - incomeExpence;
    return totalBalance;
}

/* remaining balance calculation */

function precentage(){
    const income = inputValue('income');
    const saveAmount = inputValue('save');
    const percentageAmount = income * saveAmount / 100;
    return percentageAmount;
}

/* final expence & balance calculator */

document.getElementById('calculate-btn').addEventListener('click', function(){
    const expenceIncome = expence();
    const expenceValue = document.getElementById('expence-id');
    const expenceValueText = expenceValue.innerText;
    expenceValue.innerText = expenceIncome;
    const balanceRemaining = reminingIncome();
    const balanceValue = document.getElementById('balance-id');
    const balanceValueText = balanceValue.innerText;
    balanceValue.innerText = balanceRemaining;
});

/* remaining balance calculation */
function reminder(){
    const balance = reminingIncome();
    const saving = precentage();
    const remainingBalance = balance - saving;
    console.log(remainingBalance);
    return remainingBalance;
}

/* percentage saving calculated */

document.getElementById('save-btn').addEventListener('click', function(){
    const savings = precentage();
    const saveValue = document.getElementById('saving-id');
    const saveValueText = saveValue.innerText;
    saveValue.innerText = savings;
    const balanceRemain = reminder();
    const balanceRemainValue = document.getElementById('remaining-id');
    const balanceRemainText = balanceRemainValue.innerText;
    balanceRemainValue.innerText = balanceRemain;
});
