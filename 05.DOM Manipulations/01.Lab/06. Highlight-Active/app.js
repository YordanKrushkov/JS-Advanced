function focus() {

    let inputField = document.querySelectorAll('input[type="text"]');

    Array.from(inputField).forEach(x => {
        x.addEventListener('focus', function (e) {
            let parentElement = e.currentTarget.parentElement;
            parentElement.classList.add('focused')
        })

        x.addEventListener('blur', function (e) {
            let parentElement = e.currentTarget.parentElement;
            parentElement.classList.remove('focused')
        })
    });

}