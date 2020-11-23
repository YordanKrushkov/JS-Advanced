function addItem() {
    let ulElement = document.getElementById('items');
    let inputElement = document.getElementById('newText');

    let newElement = document.createElement('li');
    newElement.textContent = inputElement.value;
    
    let newLinkElement = document.createElement('a');
    newLinkElement.setAttribute('href', '#')
    newLinkElement.textContent = '[Delete]';
    newLinkElement.addEventListener('click', deleteElement);

    newElement.appendChild(newLinkElement);
    ulElement.appendChild(newElement);

    inputElement.value = '';

    function deleteElement(e) {
        e.target.parentElement.remove();
    }
}