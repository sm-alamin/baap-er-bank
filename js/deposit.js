document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-field');
    if(isNaN(newDepositAmount)){
        alert('input field should not be empty. Please! provide valid number ');
        return;
    }
    const previousDepositTotal = getTextElementById('deposit-total');
    const newDepositTotal = newDepositAmount + previousDepositTotal;
    

    setTextValueById('deposit-total', newDepositTotal);

    const previousTotalBalance = getTextElementById('balance-total');
    const totalBalance = newDepositAmount + previousTotalBalance;
    
    setTextValueById('balance-total', totalBalance)
})
