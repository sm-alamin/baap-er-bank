function getInputFieldValueById(inputFieldId){
    const getInputField = document.getElementById(inputFieldId);
    const getInputFieldString = getInputField.value;
    const inputFieldValue = parseFloat(getInputFieldString);
    getInputField.value = '';
    return inputFieldValue;
}
function getTextElementById(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementText = parseFloat(elementString);
    return elementText;
}

function setTextValueById(elementId, newValue){
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}