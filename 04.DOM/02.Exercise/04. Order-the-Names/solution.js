function solve() {
    let inputField = document.getElementsByTagName('input')[0];
    let button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', buttonClicked);
    let database = {};
    let index = 0;
    for (let i = 65; i <= 90; i++) {
        let leter = String.fromCharCode(i);
        database[leter] = index;
        index++;
    }

    function buttonClicked(e) {
        let unorderedList = document.getElementsByTagName('ol')[0].children;

        let currentName = inputField.value.toString()[0].toUpperCase() + inputField.value.slice(1).toLocaleLowerCase();
        let firstLetter = currentName[0];


        if (database[firstLetter] !== undefined) {
            let currentIndex = database[firstLetter];
            let currentElement = unorderedList[currentIndex];
            if (currentElement.textContent != '') {
                currentElement.textContent += ', ';

            }
            currentElement.textContent += currentName;
        }

        inputField.value = '';
    }
}