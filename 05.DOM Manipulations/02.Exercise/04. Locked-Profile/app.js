function lockedProfile() {
    Array.from(document.getElementsByClassName('profile')).forEach((parent) => {
        let button = parent.querySelectorAll('button')[0];

        button.addEventListener('click', (e) => {
            let unlock = parent.querySelectorAll('input')[1].checked;
            let hidden = parent.querySelectorAll('div')[0];

            if (unlock) {
                if (button.textContent == 'Show more') {
                    hidden.style.display = 'block';
                    button.textContent = 'Hide it';
                } else if (button.textContent == 'Hide it') {
                    hidden.style.display = 'none';
                    button.textContent = 'Show more'
                }
            }
        })
    })
}