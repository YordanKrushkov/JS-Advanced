function solve() {
    let dropDownUlElements = document.getElementById('dropdown-ul');
    let displayBox = document.getElementById('box');

    document.getElementById('dropdown').addEventListener('click', show);
    dropDownUlElements.addEventListener('click', element);


    function show(e) {

        let toggledDisplay = dropDownUlElements.style.display != 'block'
            ? 'block'
            : 'none';
        if (toggledDisplay == 'none') {
            displayBox.style.color = 'white';
            displayBox.style.backgroundColor = 'black';
        }
        dropDownUlElements.style.display = toggledDisplay;
    }

    function element(e) {
        displayBox.style.color = 'black';
        displayBox.style.backgroundColor = e.target.textContent;
    }
}