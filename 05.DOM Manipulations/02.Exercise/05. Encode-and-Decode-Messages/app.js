function encodeAndDecodeMessages() {

    let inputField = document.querySelectorAll('#main textarea')[0];
    let textArea = document.querySelectorAll('#main textarea')[1];

    let sendButton = document.querySelectorAll('#main button')[0];
    let converButton = document.querySelectorAll('#main button')[1];

    sendButton.addEventListener('click', encode);
    converButton.addEventListener('click', convert);

    function encode(e) {
        let message = inputField.value;
        let encodeMessage = '';

        for (let i = 0; i < message.length; i++) {
            encodeMessage += String.fromCharCode(message.charCodeAt(i) + 1);
        }

        textArea.innerHTML = encodeMessage;
        inputField.value = '';
    }
    function convert(e) {
        let recievedMessage = textArea.value;
        let decodeMessage = '';

        for (let i = 0; i < recievedMessage.length; i++) {
            decodeMessage += String.fromCharCode(recievedMessage.charCodeAt(i) - 1);
        }

        textArea.innerHTML = decodeMessage;
    }

}