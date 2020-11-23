function create(words) {

   let contentElements = document.getElementById('content');

   words.forEach(word => {

      let divElement = document.createElement('div');
      let paragraph = document.createElement('p');

      paragraph.style.display = 'none';
      paragraph.innerHTML = word;

      divElement.addEventListener('click', (e) => {
         paragraph.style.display = 'block'
      });

      divElement.appendChild(paragraph);
      contentElements.appendChild(divElement);
  
   });

}