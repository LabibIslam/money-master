/* input value function */

function inputValue(inputId){
const priceInput = document.getElementById(inputId + '-input');
let inputAmountText = priceInput.value;
const inputAmount = parseFloat(inputAmountText);
return inputAmount;
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
    const expenceIncome = expence(); 
    const totalBalance = income - expenceIncome;
    return totalBalance;
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

/* percentage saving calculated */

document.getElementById('save-btn').addEventListener('click', function(){
    const income = inputValue('income');
    const saveAmount = inputValue('save');
    const percentageAmount = income * saveAmount / 100;
    console.log(percentageAmount);
    const saveValue = document.getElementById('saving-id');
    const saveValueText = saveValue.innerText;
    saveValue.innerText = percentageAmount;

});

/* remaining balance calculation */

