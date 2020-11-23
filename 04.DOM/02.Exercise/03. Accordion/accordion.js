function toggle() {
    let textContentElement = document.getElementById('extra');
    let buttonElement = document.getElementsByClassName('button')[0];


    if (textContentElement.style.display === 'none') {
        textContentElement.style.display = 'block';
        buttonElement.textContent = 'Less'
    } else {
        textContentElement.style.display = 'none';
        buttonElement.innerHTML = 'More'
    }

}