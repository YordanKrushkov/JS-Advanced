function solve() {
  let linkElement = document.querySelectorAll('.link-1 a');

  for (const link of linkElement) {
    link.addEventListener('click', countVisitors);
  }

  function countVisitors(e) {

    let numberVisitors = e.currentTarget.nextElementSibling;
    let number = Number(numberVisitors.innerText.split(' ')[1]);
    number++;
    numberVisitors.innerText = `visited ${number} times`;
  }
  
}