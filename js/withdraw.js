document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    if(isNaN(newWithdrawAmount)){
        alert('input field should not be empty. Please! provide valid number ');
        return;
    }
    const previousWithdrawTotal = getTextElementById('withdraw-total');
    const totalPreviousBalance = getTextElementById('balance-total');
    if(newWithdrawAmount > totalPreviousBalance){
        alert('Baap er ato tk nai')
        return;
    }
    const totalWIthdraw = previousWithdrawTotal + newWithdrawAmount;

    setTextValueById('withdraw-total', totalWIthdraw);

   

    const newBalance = totalPreviousBalance - newWithdrawAmount;
    
    setTextValueById('balance-total', newBalance)
})