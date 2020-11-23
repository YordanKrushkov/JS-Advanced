function deleteByEmail() {
    let customersList = document.getElementById('customers');
    let emailSection = customersList.lastElementChild.children;
    let inputField = document.getElementsByTagName('input')[0];
    let resultOutput = document.getElementById('result');
    let i = 1;

    for (let j = 0; j < emailSection.length; j++) {
        let customersEmail = document.getElementsByTagName('td')[i];
        
        if (customersEmail.textContent == inputField.value) {
            let parent = customersEmail.parentElement;
            parent.remove();
            resultOutput.textContent = 'Deleted.'
            break;
        } else {
            resultOutput.textContent = 'Not found.'
        }
            i += 2;
    }
    inputField.value = '';

}