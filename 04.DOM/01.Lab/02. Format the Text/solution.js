function solve() {
  let text = document.getElementById('input');
  let contentElements = document.getElementById('output')
  let paragraphs = text.textContent.split('. ');

  while (paragraphs.length > 0) {

    let content = paragraphs.splice(0, 3).join('. ')

    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = content;
    contentElements.appendChild(newParagraph);
  }
}