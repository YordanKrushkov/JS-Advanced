function addItem() {
    let textInputElement = document.getElementById('newItemText');
    let valueInputElement = document.getElementById('newItemValue');
    let idMenuElement = document.getElementById('menu');

    let optionElement = document.createElement('option');
    optionElement.innerHTML = textInputElement.value + ' ' + valueInputElement.value;

    idMenuElement.appendChild(optionElement);

    textInputElement.value = '';
    valueInputElement.value = '';
}