function growingWord() {

  let colors = document.getElementById('colors');
  let text = document.querySelector('#exercise p');

  let firstElement = colors.firstElementChild;
  let color = firstElement.innerHTML.toLowerCase();

  if (!text.style.fontSize) {
    text.style.fontSize = '2px';
    text.style.color = color;
  } else {
    let size = parseInt(text.style.fontSize) * 2;
    text.style.fontSize = `${size}px`;
    text.style.color = color;
  }

  colors.appendChild(colors.firstElementChild);

}