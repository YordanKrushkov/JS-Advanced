function solve() {

   let searchField = document.getElementById('searchField');
   let searchButton = document.getElementById('searchBtn');

   searchButton.addEventListener('click', searching)


   function searching(e) {

      [...document.querySelectorAll('tbody > tr')].forEach(el => {
         if (el.innerHTML.includes(searchField.value)) {
            el.className = 'select'
         } else {
            el.className = '';
         }
      })
      searchField.value = '';
   }
}