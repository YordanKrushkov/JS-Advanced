function solve() {
    let addButton = document.querySelector('#container button');
    let adoptionUl = document.querySelector('#adoption ul');
    let adoptedUl = document.querySelector('#adopted ul');
    let inputElements = Array.from(document.querySelectorAll(`#container input`));
    let [nameInput, ageInput, kindInput, ownerInput] = inputElements;
    addButton.addEventListener('click', (e) => {

        e.preventDefault();

        if (!inputElements.every(x => x.value)) {
            return;
        }
        if (!Number(ageInput.value) || Number(ageInput.value)<= 0) {
            return;
        }

        let liElement = document.createElement('li');
        let pElement = document.createElement('p');
        let spanElement = document.createElement('span');
        let contactButton = document.createElement('button');

        pElement.innerHTML = `<strong>${nameInput.value}</strong> is a <strong>${ageInput.value}</strong> year old <strong>${kindInput.value}</strong>`;
        spanElement.innerHTML = `Owner: ${ownerInput.value}`;
        contactButton.textContent = 'Contact with owner';

        liElement.appendChild(pElement);
        liElement.appendChild(spanElement);
        liElement.appendChild(contactButton);

        adoptionUl.appendChild(liElement);

        inputElements.forEach(x => x.value = '');

        contactButton.addEventListener('click', (e) => {
            let parent = e.currentTarget.parentElement;
            e.currentTarget.remove();
            let newDiv = document.createElement('div');
            let inputElement = document.createElement('input');
            let takeButton = document.createElement('button');

            inputElement.setAttribute('placeholder', 'Enter your names');
            takeButton.textContent = 'Yes! I take it!';

            newDiv.appendChild(inputElement);
            newDiv.appendChild(takeButton);
            parent.appendChild(newDiv);

            takeButton.addEventListener('click', (e) => {

                let parentEl = e.currentTarget.parentElement;
                let grandParent = parentEl.parentElement;

                let newOwner = grandParent.querySelector('span');
                let ownerInput = grandParent.querySelector('input');

                let checkedButton = document.createElement('button');
                if (ownerInput.value == '') {
                    return;
                }
                newOwner.innerHTML = `New Owner: ${inputElement.value}`;
                checkedButton.textContent = 'Checked';

                parentEl.remove();

                grandParent.appendChild(checkedButton);
                adoptedUl.appendChild(grandParent);

                checkedButton.addEventListener('click', (e) => {
                    let checkedElement = e.currentTarget.parentElement.parentElement;
                    checkedElement.remove();
                });
            });
        });

    });
}

