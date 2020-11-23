function solve() {
   let sendButton = document.getElementById('send');
   let inputChatField = document.getElementById('chat_input');
   let chatBoxElements = document.getElementById('chat_messages');


   sendButton.addEventListener('click', sendMessage);

   function sendMessage(e) {

      let newMessage = document.createElement('div')
      newMessage.setAttribute('class', 'message my-message');
      newMessage.innerHTML = inputChatField.value;
      chatBoxElements.appendChild(newMessage);
      inputChatField.value = '';
   }

}


